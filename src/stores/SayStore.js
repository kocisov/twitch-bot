import { action, observable } from 'mobx'
import { client } from '../client'

export default new class SayStore {
  @observable message = ''

  @action
  changeMessage = (message) => {
    this.message = message
  }

  submit = () => {
    console.log(client.channels)
    client.say(process.env.REACT_APP_TWITCH_USER_NAME, this.message)
  }
}()
