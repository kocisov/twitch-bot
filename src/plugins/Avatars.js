import * as React from 'react'
import { inject, observer } from 'mobx-react'
// import { client } from '../client'
import Avatar from '../components/Avatar'
import Text from '../components/Text'
import Button from '../components/Button'
import Flex from '../components/Flex'

@inject('PluginsStore', 'AvatarsStore')
@observer
export default class Avatars extends React.Component {
  render() {
    return this.props.PluginsStore.avatars ? (
      <Text>Avatars are being cached and used</Text>
    ) : null
  }
}
