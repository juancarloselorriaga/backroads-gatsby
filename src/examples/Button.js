import styled from "styled-components"

//Styled Components example.

const color = 'blue'

const Button = styled.button`
  /* color: white; */
  /* font-size: 1rem; */
  color: ${props => props.color};
  background: ${color};
  font-size: ${props => props.big ? '3rem' : '1rem'};
  padding: 1rem;
  margin: 1rem;
`

export default Button
