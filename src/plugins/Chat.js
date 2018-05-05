import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { client } from '../client'
import Avatar from '../components/Avatar'
import Text from '../components/Text'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Messages, { Child } from '../components/Messages'
import BTTVJSON from '../static/emotes/bttv.json'
import Remove from '../components/Remove'

const twitchEmoteBaseUri = 'https://static-cdn.jtvnw.net/emoticons/v1'
const getTwitchEmoteUri = (id, size) => `${twitchEmoteBaseUri}/${id}/${size}`

const bttvEmoteBaseUri = 'https://cdn.betterttv.net/emote'
const getBttvEmoteUri = (id, size = '3x') => `${bttvEmoteBaseUri}/${id}/${size}`

function messageNodes({ emotes, size = '3.0', message, debug = false }) {
  const normalizedEmotes = []
  const nodes = []

  if (emotes) {
    const keys = Object.keys(emotes)
    keys.forEach((emote) => {
      const current = emotes[emote][0]
      const firstIndex = parseInt(current.match(/[0-9]+?(?=-)/)[0], 10)
      const secondIndex = parseInt(
        current.match(/-[0-9]+/)[0].replace('-', ''),
        10,
      )

      const emoteName = message.slice(firstIndex, secondIndex + 1).trim()

      normalizedEmotes.push({
        name: emoteName,
        uri: getTwitchEmoteUri(emote, size),
        firstIndex,
        secondIndex,
        alt: `${emoteName} emote`,
        default: { id: emote, indexexes: current },
      })
    })
  }

  if (debug) {
    console.log(normalizedEmotes)
  }

  const splittedMessage = message.split(/\s+/)
  splittedMessage.forEach((string) => {
    const result = normalizedEmotes.find((emote) => emote.name === string)
    if (result) {
      nodes.push({
        type: 'emote',
        content: result.name,
        source: result.uri,
      })
    } else {
      const bttvResult = BTTVJSON.find((emote) => emote.code === string)

      if (bttvResult) {
        nodes.push({
          type: 'emote',
          content: bttvResult.code,
          source: getBttvEmoteUri(bttvResult.id),
        })
      } else {
        nodes.push({
          type: 'text',
          content: string,
        })
      }
    }
  })

  return nodes
}

const defaultColors = [
  '#FF0000',
  '#0000FF',
  '#008000',
  '#B22222',
  '#FF7F50',
  '#9ACD32',
  '#FF4500',
  '#2E8B57',
  '#DAA520',
  '#D2691E',
  '#5F9EA0',
  '#1E90FF',
  '#FF69B4',
  '#8A2BE2',
  '#00FF7F',
]

let randomColorsChosen = {}

function resolveColor(chan, name, color) {
  if (color !== null) {
    return color
  }

  if (!(chan in randomColorsChosen)) {
    randomColorsChosen[chan] = {}
  }

  if (name in randomColorsChosen[chan]) {
    color = randomColorsChosen[chan][name]
  } else {
    color = defaultColors[Math.floor(Math.random() * defaultColors.length)]
    randomColorsChosen[chan][name] = color
  }

  return color
}

@inject('PluginsStore', 'ChatStore', 'AvatarsStore')
@observer
export default class Chat extends React.Component {
  componentDidUpdate() {
    const node = document.getElementById('messages-box')
    const scrollHeight = node.scrollHeight
    const clientHeight = node.clientHeight
    const scrollTop = node.scrollTop
    if (clientHeight + scrollTop + 120 >= scrollHeight) {
      node.scrollTop = scrollHeight
    }
  }

  componentDidMount() {
    if (this.props.ChatStore.mounted === false) {
      client.on('chat', (channel, userState, message, self) => {
        const emotesInMessage = userState.emotes
        console.log(userState)
        const color = resolveColor(channel, userState.username, userState.color)

        this.pushNewMessage({
          channel,
          id: userState.id,
          user: userState['display-name'],
          content: messageNodes({ emotes: emotesInMessage, message }),
          color,
        })
      })

      client.on('join', (channel, username, self) => {
        if (self) {
          return false
        }

        this.pushNewMessage({
          channel,
          id: `${username}-join`,
          user: username,
          content: [{ type: 'text', content: 'just joined' }],
          color: '#2eec71',
        })
      })

      client.on('part', (channel, username, self) => {
        if (self) {
          return false
        }

        this.pushNewMessage({
          channel,
          id: `${username}-leave`,
          user: username,
          content: [{ type: 'text', content: 'just left' }], // in memory of Nuf
          color: '#cc343d',
        })
      })

      this.props.ChatStore.afterMount()
    }
  }

  async pushNewMessage(data) {
    const { pushMessage } = this.props.ChatStore
    const { getAvatar } = this.props.AvatarsStore
    const avatar = await getAvatar(data.user)

    pushMessage({
      ...data,
      avatar,
    })
  }

  plebcoder(content) {
    const node = document.createElement('div')
    node.textContent = content
    return node.innerHTML
  }

  render() {
    const { messages } = this.props.ChatStore
    const { chat: enabled } = this.props.PluginsStore

    return enabled ? (
      <div style={{ flex: 2, height: '100%', marginRight: 10 }}>
        <Flex align="center">
          <Text fontSize={20} fontWeight={600} style={{ marginRight: 5 }}>
            Chat
          </Text>
          <Button
            onClick={() => {
              this.pushNewMessage({
                id: Math.random(),
                color: '#cc343d',
                user: process.env.REACT_APP_TWITCH_USER_NAME,
                content: 'Cool Kappa',
              })
            }}
          >
            Add fake message
          </Button>
          <Button onClick={this.test}>?</Button>
        </Flex>
        <Messages>
          <Child id="messages-box">
            {messages.length > 0 &&
              messages.map((message) => (
                <Flex
                  align="center"
                  key={
                    message.id ||
                    `#{message.user}${message.content.split(0, 2)}`
                  }
                >
                  {this.props.PluginsStore.avatars && (
                    <Avatar
                      width={30}
                      height={30}
                      margin={2}
                      src={message.avatar}
                      alt=""
                    />
                  )}
                  <Text margin={2} color={message.color} fontWeight={600}>
                    {message.user}
                  </Text>
                  {message.content.map(
                    (item, index) =>
                      item.type === 'emote' ? (
                        <img
                          style={{ width: 25 }}
                          key={index}
                          src={item.source}
                          alt={item.alt}
                        />
                      ) : (
                        <Text key={index} margin={2}>
                          {item.content}
                        </Text>
                      ),
                  )}
                  <Remove
                    style={{
                      position: 'absolute',
                      right: 0,
                    }}
                    onClick={() => {
                      this.props.ChatStore.deleteMessage(message.id)
                    }}
                  />
                </Flex>
              ))}
          </Child>
        </Messages>
      </div>
    ) : null
  }
}
