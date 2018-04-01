import styled from 'styled-components'
import handleProps from '../static/style/props'

export default styled.img`
  ${(props) => handleProps(props)};
  border-radius: 50%;
  object-fit: cover;
`
