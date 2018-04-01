import { action, observable } from 'mobx'

export default new class PluginsStore {
  @observable avatars = true
  @observable chat = true
  @observable charts = false
  @observable users = true
  @observable say = true

  @action
  toggle = (name) => {
    this[name] = this[name] ? false : true
  }
}()
