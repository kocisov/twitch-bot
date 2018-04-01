import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Text from '../components/Text'

@inject('PluginsStore', 'AvatarsStore')
@observer
export default class Avatars extends React.Component {
  render() {
    return this.props.PluginsStore.avatars ? (
      <Text>Avatars are being cached and used</Text>
    ) : null
  }
}
