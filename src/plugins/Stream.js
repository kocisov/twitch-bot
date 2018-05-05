import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { SkyLightStateless } from 'react-skylight'
import Input from '../components/Input'
import Button from '../components/Button'

@inject('StreamStore')
@observer
export default class Stream extends Component {
  render() {
    const {
      toggle,
      show,
      submit,
      changeTitle,
      changeGame,
    } = this.props.StreamStore

    return (
      <SkyLightStateless
        isVisible={show}
        onOverlayClicked={toggle}
        dialogStyles={{ height: 150 }}
        titleStyle={{ display: 'none' }}
        overlayStyles={{ background: '#dedede', opacity: 0.5 }}
        onCloseClicked={() => {
          toggle()
        }}
      >
        <Input
          width={300}
          margin={5}
          type="text"
          name="title"
          value={this.props.StreamStore.title}
          onChange={(event) => {
            console.log(event.target.name, event.target.value)
            changeTitle(event.target.value)
          }}
          placeholder="Stream's title"
        />
        <Input
          margin={5}
          type="text"
          name="game"
          value={this.props.StreamStore.game}
          onChange={(event) => {
            console.log(event.target.name, event.target.value)
            changeGame(event.target.value)
          }}
          placeholder="Stream's game"
        />
        <Button onClick={submit}>Submit</Button>
      </SkyLightStateless>
    )
  }
}
