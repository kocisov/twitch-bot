# Twitch Bot

> Revamped TWChat

## How does it currently look?

<p align="center">
  <img alt="" src="https://kocibot-static.surge.sh/showcase.gif">
</p>

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
    * Auto scroll
    * Fake message
    * UI Message removal
    * User color resolver
5.  Users plugin
    * Viewers count
    * Viewers names
6.  Avatars plugin
    * Users can use Avatars
    * Chat can use Avatars
    * Simple Cache 👋
      * Local file caching to be added
7.  Usable for everyone, not just kocibot

## How to get it working

Required .env variables, I am using .env.local, wondering why 🤔

* `REACT_APP_TWITCH_NAME` name of bot
* `REACT_APP_TWITCH_PASS` bot's oauth pass => https://twitchapps.com/tmi/
* `REACT_APP_TWITCH_PASS` twitch app client id => https://dev.twitch.tv/dashboard/apps

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
