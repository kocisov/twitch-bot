import { action, observable } from 'mobx'

export default new class ChatStore {
  @observable mounted = false
  @observable messages = []

  @action
  afterMount() {
    this.mounted = true
  }

  @action
  pushMessage = (message) => {
    this.messages.push(message)
  }

  @action
  deleteMessage(id) {
    this.messages = this.messages.filter((item) => item.id !== id)
  }

  @action
  toggle = () => {
    this.enabled = this.enabled ? false : true
  }
}()
