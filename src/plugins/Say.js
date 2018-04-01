import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Button from '../components/Button'
import Input from '../components/Input'
import Flex from '../components/Flex'

@inject('PluginsStore', 'SayStore')
@observer
export default class Say extends React.Component {
  handleSubmit = () => {
    const { message, submit, changeMessage } = this.props.SayStore
    if (message && message.length > 0) {
      submit()
      changeMessage('')
    }
  }

  render() {
    const { changeMessage, message } = this.props.SayStore

    return this.props.PluginsStore.say ? (
      <Flex>
        <Input
          type="text"
          value={message}
          placeholder="Your message..."
          onChange={(event) => {
            event.persist()
            changeMessage(event.target.value)
          }}
        />
        <Button onClick={this.handleSubmit}>Send</Button>
      </Flex>
    ) : null
  }
}
