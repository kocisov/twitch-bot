import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router } from 'react-router-dom'
import stores from './stores'
import View from './components/View'
import './static/style'
import './electron-caches'

const node = document.getElementById('root')

render(
  <Provider {...stores}>
    <Router>
      <View />
    </Router>
  </Provider>,
  node
)
