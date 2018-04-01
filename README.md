# Twitch Bot

> Revamped TWChat

## How does it currently look?

Check this gif https://kocibot-static.surge.sh/showcase.gif

## What

1.  Going for better plugin system (it was really LUL in TWChat)
2.  Going for faster bot
3.  Going for beautiful UI (kind of; xd)
4.  Going for cool new features

## What is done

1.  Plugins system start
    * Page for plugins
    * Plugins can be enabled/disabled
2.  Own global emote parsing 👋
3.  Replaced Redux with Mobx for this project
4.  Chat plugin
    * Messages view
    * Auto scroll on new messages
    * Fake message
    * UI Message removal
    * User color resolver
5.  Users plugin
    * Viewers count
    * Viewers names
6.  Avatars plugin
    * Users can use Avatars
    * Chat can use Avatars
7.  Say plugin
    * You are able to chat with your bot account
8.  Stream title and game changing
9.  Usable for everyone, not just kocibot
10. FileSystem Cache 👋

## Needs to be done

1.  Subscribers and BTTV + FrankerZ emotes
2.  Simplify electron-caches.js and make it "better"
3.  Scripts for git, npm...
4.  Restructure, rework weird looking things...

## How to get it working

Required .env variables

* `REACT_APP_TWITCH_BOT_NAME` name of bot
* `REACT_APP_TWITCH_USER_NAME` name of channel
* `REACT_APP_TWITCH_BOT_PASS` bot's oauth pass => https://twitchapps.com/tmi/
* `REACT_APP_TWITCH_CLIENT_ID` twitch app client id => https://dev.twitch.tv/dashboard/apps

## Installation

```bash
$ git clone https://github.com/kocisov/twitch-bot
$ cd twitch-bot
$ npm install
$ npm start

# for electron
# you can start devServer with npm start and then npm run electron-dev
# that way you get auto reload and everything dev related 👍
# or
$ npm run build
$ npm run electron
# for production-ready electron app 😀
```
