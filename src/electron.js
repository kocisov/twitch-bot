const { app, BrowserWindow } = require('electron')
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  MOBX_DEVTOOLS,
} = require('electron-devtools-installer')
const path = require('path')
const url = require('url')
const fs = require('fs')
const fetch = require('isomorphic-fetch')
const isDev = process.env.NODE_ENV === 'development'
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 420,
  })

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true,
      })
  )

  if (isDev) {
    const devtools = [REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS]

    devtools.forEach((devTool) => {
      installExtension(devTool)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
    })

    // chromeDevTools
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
