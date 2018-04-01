import * as React from 'react'
import { observer } from 'mobx-react'
import { NavLink, Route, withRouter } from 'react-router-dom'
import Easel from 'react-icons/lib/io/easel'
import Flash from 'react-icons/lib/io/flash'
import Plugins from '../plugins'
import Header from '../components/Header'
import Canvas from '../components/Canvas'
// import Text from '../components/Text'
// import Button from '../components/Button'
// import Flex from '../components/Flex'

@withRouter
@observer
export default class View extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <li>
            <NavLink to="/">
              <Easel width={25} height={25} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/plugins">
              <Flash width={25} height={25} />
            </NavLink>
          </li>
        </Header>
        <Route path="/" exact component={Canvas} />
        <Route path="/plugins" component={Plugins} />
      </div>
    )
  }
}
