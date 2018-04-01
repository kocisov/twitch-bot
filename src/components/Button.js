import styled from 'styled-components'
import handleProps from '../static/style/props'

export default styled.button`
  ${(props) => handleProps(props)};
  align-items: center;
  background: #e7e7e7;
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  justify-content: center;
  margin: 2px;
  outline: 0;
  padding: 5px 15px;
  text-align: center;
`
