import { action, observable } from 'mobx'

export default new class UsersStore {
  @observable mounted = false
  @observable viewers = []
  @observable mods = []
  @observable staff = []
  @observable admins = []
  @observable global_mods = []
  @observable count = 0

  @action
  afterMount = () => {
    this.mounted = true
  }

  @action
  changeCount = (count) => {
    this.count = count
  }

  @action
  changeViewers = (viewers) => {
    this.viewers = viewers
  }

  @action
  changeMods = (mods) => {
    this.mods = mods
  }
}()
