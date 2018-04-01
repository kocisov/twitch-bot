import { action, observable } from 'mobx'

export default new class AvatarsStore {
  @observable cache = {}

  @action
  setCacheFromStorage(cache) {
    this.cache = cache
  }

  @action
  addAvatar = (name, url) => {
    this.cache[name] = url
    this.cache[name.toLocaleLowerCase()] = url
  }

  getAvatarStatic = (name) => {
    if (this.cache[name]) {
      return this.cache[name]
    }

    return 'https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-70x70.jpg'
  }

  getAvatar = async (name) => {
    if (!this.cache[name]) {
      const baseUrl = 'https://api.twitch.tv/kraken/channels'
      const url = `${baseUrl}/${name}`

      await fetch(url, {
        headers: {
          'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.addAvatar(name, res.logo)
        })
    }

    return this.cache[name]
  }
}()
