import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { SkyLightStateless } from 'react-skylight'
import Text from '../components/Text'
import Input from '../components/Input'
import Button from '../components/Button'

@inject('StreamStore')
@observer
export default class Stream extends React.Component {
  render() {
    const { toggle, show, title, game, submit } = this.props.StreamStore

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
          value={title}
          placeholder="Stream's title"
        />
        <Input
          margin={5}
          type="text"
          value={game}
          placeholder="Stream's game"
        />
        <Button onClick={submit}>Submit</Button>
      </SkyLightStateless>
    )
  }
}
