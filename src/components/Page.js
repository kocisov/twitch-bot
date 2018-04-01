import styled from 'styled-components'
import handleProps from '../static/style/props'

export default styled.div`
  ${(props) => handleProps(props)};
  height: calc(100vh - 60px);
  padding: 10px;
  overflow: hidden;
`
