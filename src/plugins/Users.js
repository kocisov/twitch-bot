import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { client } from '../client'
import Avatar from '../components/Avatar'
import Text from '../components/Text'
import Flex from '../components/Flex'

@inject('PluginsStore', 'UsersStore', 'AvatarsStore')
@observer
export default class Users extends React.Component {
  componentDidMount() {
    const {
      afterMount,
      changeCount,
      changeViewers,
      changeMods,
      mounted,
    } = this.props.UsersStore

    if (mounted === false) {
      const callApi = () => {
        console.log('Called API')

        client.api(
          {
            url: `https://tmi.twitch.tv/group/user/${
              process.env.REACT_APP_TWITCH_USER_NAME
            }/chatters`,
          },
          (err, r, response) => {
            changeCount(response.data.chatter_count)

            if (response.data) {
              if (response.data.chatters.viewers) {
                changeViewers(response.data.chatters.viewers)
              }

              if (response.data.chatters.moderators) {
                changeMods(response.data.chatters.moderators)
              }
            }
          }
        )
      }
      setInterval(callApi, 30000)

      callApi()
      afterMount()
    }
  }

  render() {
    const { avatars } = this.props.PluginsStore
    const { getAvatarStatic } = this.props.AvatarsStore
    const { count, viewers, mods } = this.props.UsersStore

    return this.props.PluginsStore.users ? (
      <Flex flex={1} direction="column">
        <Flex align="center">
          <Text fontSize={20} fontWeight={600}>
            Users
          </Text>
          <Text fontSize={14} fontWeight={400} style={{ marginLeft: 'auto' }}>
            {count}
          </Text>
        </Flex>
        <Flex align="flex-start">
          <Flex flex={1} direction="column">
            <Text fontSize={16} fontWeight={500}>
              Viewers
            </Text>
            {viewers &&
              viewers.map((viewer) => (
                <div key={viewer}>
                  {avatars && (
                    <Avatar
                      width={20}
                      height={20}
                      src={getAvatarStatic(viewer)}
                      alt=""
                      margin={5}
                    />
                  )}
                  {viewer}
                </div>
              ))}
          </Flex>
          <Flex flex={1} direction="column">
            <Text fontSize={16} fontWeight={500}>
              Mods
            </Text>
            {mods &&
              mods.map((mod) => (
                <div key={mod}>
                  {avatars && (
                    <Avatar
                      width={20}
                      height={20}
                      src={getAvatarStatic(mod)}
                      alt=""
                      margin={5}
                    />
                  )}
                  {mod}
                </div>
              ))}
          </Flex>
        </Flex>
      </Flex>
    ) : null
  }
}
