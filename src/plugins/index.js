import * as React from 'react'
import { inject, observer } from 'mobx-react'
// import Avatar from '../components/Avatar'
// import Button from '../components/Button'
import ChatBoxes from 'react-icons/lib/io/chatboxes'
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
          <input
            type="checkbox"
            checked={this.props.PluginsStore.chat}
            onChange={() => {
              this.props.PluginsStore.toggle('chat')
            }}
          />
        </Flex>
      </Page>
    )
  }
}
