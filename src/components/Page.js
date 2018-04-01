import styled from 'styled-components'
import handleProps from '../static/style/props'

export default styled.div`
  ${(props) => handleProps(props)};
  padding: 10px;
`
