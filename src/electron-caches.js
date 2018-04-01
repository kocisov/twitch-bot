const electron = window.require('electron')
const { remote } = electron
const { app } = remote
const fs = remote.require('fs')

const directory = app.getPath('home')
const cacheDirectory = `${directory}/twitch-bot-cache`
const cacheDataFile = `${cacheDirectory}/data.json`
const cacheAvatarsFile = `${cacheDirectory}/avatars.json`

let caches = {}

if (fs.existsSync(cacheDirectory) === false) {
  fs.mkdirSync(cacheDirectory)
}

export const fsCache = {
  key(name, value) {
    caches[name] = value
    fs.writeFileSync(cacheDataFile, JSON.stringify(caches, null, 2))
  },
  avatars(data) {
    fs.writeFileSync(cacheAvatarsFile, JSON.stringify(data, null, 2))
  },
}

export function readFromCache(file, cb) {
  try {
    const cacheContent = fs.readFileSync(
      `${cacheDirectory}/${file}.json`,
      'utf-8'
    )
    cb(cacheContent)
  } catch (err) {
    console.log('Error in Cache:', err)
  }
}
