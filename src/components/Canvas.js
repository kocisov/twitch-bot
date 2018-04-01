import * as React from 'react'
import Page from './Page'
import Chat from '../plugins/Chat'

export default class Canvas extends React.Component {
  render() {
    return (
      <Page>
        <Chat />
      </Page>
    )
  }
}
