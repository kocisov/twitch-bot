import styled from 'styled-components'
import handleProps from '../static/style/props'

export default styled.input`
  ${(props) => handleProps(props)};
  border-radius: 3px;
  border: 0;
  display: flex;
  outline: 0;
  padding: 5px 15px;
`
