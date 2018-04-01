import { action, observable } from 'mobx'

export default new class ChatStore {
  @observable messages = []
  @observable avatars = {}
  @observable mounted = false

  @action
  pushMessage = (message) => {
    this.messages.push(message)
  }

  @action
  afterMount() {
    this.mounted = true
  }

  @action
  deleteMessage(id) {
    this.messages = this.messages.filter((item) => item.id !== id)
  }

  @action
  addAvatar = (name, url) => {
    this.avatars[name] = url
  }

  getAvatar = async (name) => {
    if (!this.avatars[name]) {
      const { addAvatar } = this
      const baseUrl = 'https://api.twitch.tv/kraken/channels'
      const url = `${baseUrl}/${name}`

      await fetch(url, {
        headers: {
          'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          addAvatar(name, res.logo)
        })
    }

    return this.avatars[name]
  }

  @action
  toggle = () => {
    this.enabled = this.enabled ? false : true
  }
}()
