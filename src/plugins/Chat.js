import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { client } from '../client'
import Avatar from '../components/Avatar'
import Text from '../components/Text'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Messages, { Child } from '../components/Messages'
import globalEmotes from '../static/emotes/global.json'
import Remove from '../components/Remove'

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

@inject('PluginsStore', 'ChatStore')
@observer
export default class Chat extends React.Component {
  componentDidUpdate() {
    const node = document.getElementById('messages-box')

    let scrollHeight = node.scrollHeight
    let clientHeight = node.clientHeight
    let scrollTop = node.scrollTop

    if (clientHeight + scrollTop + 70 >= scrollHeight) {
      node.scrollTop = scrollHeight
    }
  }

  componentDidMount() {
    if (this.props.ChatStore.mounted === false) {
      client.on('chat', (channel, userState, message, self) => {
        const color = resolveColor(channel, userState.username, userState.color)

        this.pushNewMessage({
          channel,
          id: userState.id,
          user: userState['display-name'],
          content: message,
          color,
        })
      })

      this.props.ChatStore.afterMount()
    }
  }

  async pushNewMessage(data) {
    const { pushMessage, getAvatar } = this.props.ChatStore
    const avatar = await getAvatar(data.user)
    pushMessage({
      ...data,
      avatar,
    })
  }

  parseMessage(message) {
    const parsedMessage = []
    const emotesKeys = Object.keys(globalEmotes)
    const getEmoteUrl = (id) =>
      `https://static-cdn.jtvnw.net/emoticons/v1/${id}/1.0`

    message = message.split(/\s+/)
    message.forEach((text) => {
      const result = emotesKeys.find((emote) => text === emote)
      if (result) {
        parsedMessage.push({
          type: 'emote',
          url: getEmoteUrl(globalEmotes[result].id),
          alt: `${result} emote`,
        })
      } else {
        parsedMessage.push({
          type: 'text',
          content: text,
        })
      }
    })

    return parsedMessage
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
      <div>
        <Flex align="center">
          <Text fontSize={18} fontWeight={600} style={{ marginRight: 5 }}>
            Chat
          </Text>
          <Button
            onClick={() => {
              this.pushNewMessage({
                id: Math.random(),
                user: 'KociQQ',
                content: 'Cool Kappa',
              })
            }}
          >
            Add fake message
          </Button>
        </Flex>
        <Messages>
          <Child id="messages-box">
            {messages.map((message) => (
              <Flex align="center" key={message.id}>
                <Avatar
                  width={30}
                  height={30}
                  margin={2}
                  src={message.avatar}
                  alt=""
                />
                <Text margin={2} color={message.color} fontWeight={600}>
                  {message.user}
                </Text>
                {this.parseMessage(message.content).map(
                  (item, index) =>
                    item.type === 'emote' ? (
                      <img key={index} src={item.url} alt={item.alt} />
                    ) : (
                      <Text key={index} margin={2}>
                        {item.content}
                      </Text>
                    )
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