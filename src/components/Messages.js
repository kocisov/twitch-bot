import styled from 'styled-components'
import handleProps from '../static/style/props'

export default styled.div`
  ${(props) => handleProps(props)};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 115px);
  overflow: hidden;
  position: relative;
  width: 100%;
`

export const Child = styled.div`
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  position: absolute;
  right: -17px;
  top: 0;
`
