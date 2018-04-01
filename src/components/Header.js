import styled from 'styled-components'
import handleProps from '../static/style/props'

export default styled.div`
  ${(props) => handleProps(props)};
  align-items: center;
  display: flex;
  height: 60px;

  & li {
    list-style: none;
  }

  & li a {
    align-items: center;
    border-radius: 3px;
    border: 1px solid #e1e1e1;
    color: inherit;
    display: flex;
    height: 40px;
    justify-content: center;
    margin-left: 10px;
    padding: 10px;
    transition: background 0.25s ease-in-out;
    width: 55px;
  }

  & li a:hover {
    background: #f9f9f9;
  }
`
