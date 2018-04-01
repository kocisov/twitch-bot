import { action, observable } from 'mobx'

export default new class PluginsStore {
  @observable chat = true

  @action
  toggle = (name) => {
    this[name] = this[name] ? false : true
  }
}()
