import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Text from '../components/Text'
import { readFromCache } from '../electron-caches'

@inject('PluginsStore', 'AvatarsStore')
@observer
export default class Avatars extends React.Component {
  componentDidMount() {
    readFromCache('avatars', (data) => {
      this.props.AvatarsStore.setFromCache(data)
    })
  }

  render() {
    return this.props.PluginsStore.avatars ? (
      <Text>Avatars are being cached and used</Text>
    ) : null
  }
}
