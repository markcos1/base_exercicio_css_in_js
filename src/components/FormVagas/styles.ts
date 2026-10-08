import styled from 'styled-components'
import { cores } from '../../styled'

export const Formulario1 = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${cores.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  input {
    padding: 0 16px;
    outline-color: ${cores.corPrincipal};
  }

  button {
    background-color: ${cores.corPrincipal};
    border: 1px solid ${cores.corPrincipal};
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: ${cores.corSecundaria};
    margin-left: 8px;
    cursor: pointer;
  }
`
