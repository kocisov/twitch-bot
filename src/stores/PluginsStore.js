import { action, observable } from 'mobx'

export default new class PluginsStore {
  @observable avatars = false
  @observable chat = false
  @observable charts = false
  @observable users = false

  @action
  toggle = (name) => {
    this[name] = this[name] ? false : true
  }
}()
