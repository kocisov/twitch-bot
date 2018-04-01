import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { PieChart, Pie, Cell } from 'recharts'
// import { client } from '../client'
import Avatar from '../components/Avatar'
import Text from '../components/Text'
import Button from '../components/Button'
import Flex from '../components/Flex'

const data = [
  {
    name: 'Czech',
    value: 3,
    color: '#d0d0d0',
  },
  {
    name: 'Englando',
    value: 20,
    color: '#d7d7d7',
  },
]

@inject('PluginsStore')
@observer
export default class Charts extends React.Component {
  render() {
    return this.props.PluginsStore.charts ? (
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={80}
          fill="#e2e"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    ) : null
  }
}
