import * as React from 'react'
import Page from './Page'
import Avatars from '../plugins/Avatars'
import Users from '../plugins/Users'
import Charts from '../plugins/Charts'
import Chat from '../plugins/Chat'

export default class Canvas extends React.Component {
  render() {
    return (
      <Page>
        <Avatars />
        <Users />
        <Charts />
        <Chat />
      </Page>
    )
  }
}
