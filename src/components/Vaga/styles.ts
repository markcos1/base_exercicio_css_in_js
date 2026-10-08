import styled from 'styled-components'
import { cores } from '../../styled'

export const Vagacss = styled.li`
  border: 1px solid ${cores.corPrincipal};
  background-color: ${cores.corSecundaria};
  color: ${cores.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${cores.corPrincipal};
    color: ${cores.corSecundaria};
  }

  h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }

  a {
    border-color: ${cores.corPrincipal};
    background-color: ${cores.corPrincipal};
    color: ${cores.corSecundaria};
    display: inline-block;
    padding: 8px 16px;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;

    &:hover {
      background-color: ${cores.corPrincipal};
      color: var(--cor-principal);
    }

    @media (max-width: 768px) {
      display: block;
    }
  }
`
