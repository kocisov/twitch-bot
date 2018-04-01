import * as React from 'react'
import styled from 'styled-components'
import handleProps from '../static/style/props'
import Close from 'react-icons/lib/io/close'

const Remove = (props) => <Close {...props} width={18} height={18} />

export default styled(Remove)`
  ${(props) => handleProps(props)};
  cursor: pointer;
  fill: #c1c1c1;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }
`
