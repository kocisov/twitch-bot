import * as TMI from 'tmi.js'

export const client = new TMI.client({
  options: {
    debug: true,
    clientId: process.env.REACT_APP_TWITCH_CLIENT_ID,
  },
  connection: {
    reconnect: true,
  },
  identity: {
    username: process.env.REACT_APP_TWITCH_NAME,
    password: process.env.REACT_APP_TWITCH_PASS,
  },
  channels: [`#${process.env.REACT_APP_TWITCH_USER_NAME}`],
})

client.connect()
