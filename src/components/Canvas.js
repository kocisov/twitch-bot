import * as React from 'react'
import Page from './Page'
import Avatars from '../plugins/Avatars'
import Users from '../plugins/Users'
import Charts from '../plugins/Charts'
import Chat from '../plugins/Chat'
import Say from '../plugins/Say'
import Stream from '../plugins/Stream'
import Flex from './Flex'

export default class Canvas extends React.Component {
  render() {
    return (
      <Page>
        <Avatars />
        <Charts />
        <Flex align="flex-start">
          <Chat />
          <Users />
        </Flex>
        <Say />
        <Stream />
      </Page>
    )
  }
}
