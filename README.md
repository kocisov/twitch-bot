# Twitch Bot

> Revamped TWChat

## What

1.  Going for better plugin system (it was really LUL in TWChat)
2.  Going for faster bot
3.  Going for beautiful UI (kind of; xd)
4.  Going for cool new features

## What is done

1.  Plugins system start
    * Page for plugins
    * One plugin -> Can be enabled/disabled
2.  Own global emote parsing 👋
3.  Replaced Redux with Mobx for this project
4.  Chat plugin
    * Messages view
    * Auto scroll
    * Fake message
    * UI Message removal
    * User color resolver

## How to get it working

Required .env variables, I am using .env.local, wondering why 🤔

* `REACT_APP_TWITCH_NAME` name of bot
* `REACT_APP_TWITCH_PASS` bot's oauth pass

## Installation

```bash
$ git clone https://github.com/kocisov/twitch-bot
$ cd twitch-bot
$ npm install
$ npm start
```
