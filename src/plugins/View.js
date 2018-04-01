import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Images from 'react-icons/lib/io/image'
import ChatBoxes from 'react-icons/lib/io/chatboxes'
import Chart from 'react-icons/lib/io/pie-graph'
import Users from 'react-icons/lib/io/person'
import Say from 'react-icons/lib/io/chatbubble'
import Flex from '../components/Flex'
import Page from '../components/Page'
import Text from '../components/Text'

const plugins = [
  {
    name: 'Avatars',
    variable: 'avatars',
    disabled: false,
    icon: <Images style={{ minWidth: 60 }} width={30} height={30} />,
    description: (
      <Text fontSize={14} color="#c1c1c1">
        Avatars will cache and use user avatars{' '}
        <span role="img" aria-label="Wawing emoji">
          👋
        </span>
      </Text>
    ),
  },
  {
    name: 'Chat',
    variable: 'chat',
    disabled: false,
    icon: <ChatBoxes style={{ minWidth: 60 }} width={30} height={30} />,
    description: (
      <Text fontSize={14} color="#c1c1c1">
        Chat will keep eye on everything that happens in chat like messages,
        emotes, mods, etc...
      </Text>
    ),
  },
  {
    name: 'Charts (W.I.P)',
    variable: 'charts',
    disabled: true,
    icon: <Chart style={{ minWidth: 60 }} width={30} height={30} />,
    description: (
      <Text fontSize={14} color="#c1c1c1">
        Charts will show data in pretty way
      </Text>
    ),
  },
  {
    name: 'Say',
    variable: 'say',
    disabled: false,
    icon: <Say style={{ minWidth: 60 }} width={30} height={30} />,
    description: (
      <Text fontSize={14} color="#c1c1c1">
        Say will let you send a message to your channel
      </Text>
    ),
  },
  {
    name: 'Users',
    variable: 'users',
    disabled: false,
    icon: <Users style={{ minWidth: 60 }} width={30} height={30} />,
    description: (
      <Text fontSize={14} color="#c1c1c1">
        Users will keep eye on users, mods... in chat
      </Text>
    ),
  },
]

@inject('PluginsStore')
@observer
export default class Plugins extends React.Component {
  render() {
    return (
      <Page>
        <Text fontSize={24} fontWeight={600}>
          Plugins
        </Text>
        {plugins.map((plugin) => (
          <Flex key={plugin.variable} padding={10} align="center">
            {plugin.icon}
            <Flex padding={10} direction="column">
              <Text fontSize={16} fontWeight={600}>
                {plugin.name}
              </Text>
              {plugin.description}
            </Flex>
            <Flex
              style={{ marginLeft: 'auto', width: 20 }}
              align="flex-end"
              justify="flex-end"
            >
              <input
                type="checkbox"
                disabled={plugin.disabled}
                checked={this.props.PluginsStore[plugin.variable]}
                onChange={() => {
                  this.props.PluginsStore.toggle(plugin.variable)
                }}
              />
            </Flex>
          </Flex>
        ))}
      </Page>
    )
  }
}
