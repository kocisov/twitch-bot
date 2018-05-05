import { action, observable } from 'mobx'
import { client } from '../client'

export default new class StreamStore {
  @observable title = ''
  @observable game = ''
  @observable show = false

  @action
  changeTitle = (title) => {
    this.title = title
  }

  @action
  changeGame = (game) => {
    this.game = game
  }

  @action
  toggle = () => {
    const validation = this.title.length > 0

    if (validation === false) {
      this.getFirst()
    }

    this.show = this.show ? false : true
  }

  getFirst = () => {
    fetch(
      `https://api.twitch.tv/kraken/channels/${
        process.env.REACT_APP_TWITCH_USER_NAME
      }`,
      {
        method: 'GET',
        headers: {
          'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
        },
      },
    ).then((res) =>
      res.json().then((res) => {
        console.log('Got stream info!')
        this.changeTitle(res.status)
        this.changeGame(res.game)
      }),
    )
  }

  submit = () => {
    client.api(
      {
        url: `https://api.twitch.tv/kraken/channels/${
          process.env.REACT_APP_TWITCH_USER_NAME
        }?status=${this.title}&game=${this.game}`,
        method: 'PUT',
      },
      (err, res, response) => {
        if (err) {
          return console.log('Error when updating stream info:', err)
        }

        console.log('Updated stream info!')
      },
    )
  }
}()
