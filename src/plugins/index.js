import * as React from 'react'
import { inject, observer } from 'mobx-react'
// import Avatar from '../components/Avatar'
// import Button from '../components/Button'
import Images from 'react-icons/lib/io/image'
import ChatBoxes from 'react-icons/lib/io/chatboxes'
import Chart from 'react-icons/lib/io/pie-graph'
import Users from 'react-icons/lib/io/person'
import Flex from '../components/Flex'
import Page from '../components/Page'
import Text from '../components/Text'

@inject('PluginsStore')
@observer
export default class Plugins extends React.Component {
  render() {
    return (
      <Page>
        <Text fontSize={24} fontWeight={600}>
          Plugins
        </Text>
        <Flex padding={10} align="center">
          <Images style={{ minWidth: 60 }} width={30} height={30} />
          <Flex padding={10} direction="column">
            <Text fontSize={16} fontWeight={600}>
              Avatars
            </Text>
            <Text fontSize={14} color="#c1c1c1">
              Avatars will cache and use user avatars{' '}
              <span role="img" aria-label="Wawing emoji">
                👋
              </span>
            </Text>
          </Flex>
          <Flex
            style={{ marginLeft: 'auto', width: 20 }}
            align="flex-end"
            justify="flex-end"
          >
            <input
              type="checkbox"
              checked={this.props.PluginsStore.avatars}
              onChange={() => {
                this.props.PluginsStore.toggle('avatars')
              }}
            />
          </Flex>
        </Flex>
        <Flex padding={10} align="center">
          <ChatBoxes style={{ minWidth: 60 }} width={30} height={30} />
          <Flex padding={10} direction="column">
            <Text fontSize={16} fontWeight={600}>
              Chat
            </Text>
            <Text fontSize={14} color="#c1c1c1">
              Chat will keep eye on everything that happens in chat like
              messages, emotes, mods, etc...
            </Text>
          </Flex>
          <Flex
            style={{ marginLeft: 'auto', width: 20 }}
            align="flex-end"
            justify="flex-end"
          >
            <input
              type="checkbox"
              checked={this.props.PluginsStore.chat}
              onChange={() => {
                this.props.PluginsStore.toggle('chat')
              }}
            />
          </Flex>
        </Flex>
        <Flex padding={10} align="center">
          <Chart style={{ minWidth: 60 }} width={30} height={30} />
          <Flex padding={10} direction="column">
            <Text fontSize={16} fontWeight={600}>
              Charts (W.I.P)
            </Text>
            <Text fontSize={14} color="#c1c1c1">
              Charts will show data in pretty way
            </Text>
          </Flex>
          <Flex
            style={{ marginLeft: 'auto', width: 20 }}
            align="flex-end"
            justify="flex-end"
          >
            <input
              type="checkbox"
              disabled={true}
              checked={this.props.PluginsStore.charts}
              onChange={() => {
                this.props.PluginsStore.toggle('charts')
              }}
            />
          </Flex>
        </Flex>
        <Flex padding={10} align="center">
          <Users style={{ minWidth: 60 }} width={30} height={30} />
          <Flex padding={10} direction="column">
            <Text fontSize={16} fontWeight={600}>
              Users
            </Text>
            <Text fontSize={14} color="#c1c1c1">
              Users will keep eye on users, mods... in chat
            </Text>
          </Flex>
          <Flex
            style={{ marginLeft: 'auto', width: 20 }}
            align="flex-end"
            justify="flex-end"
          >
            <input
              type="checkbox"
              checked={this.props.PluginsStore.users}
              onChange={() => {
                this.props.PluginsStore.toggle('users')
              }}
            />
          </Flex>
        </Flex>
      </Page>
    )
  }
}
