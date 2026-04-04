import styled from 'styled-components'

export const Vagacss = styled.li`
  border: 1px solid ${(props) => props.theme.colors.corPrincipal};
  background-color: ${(props) => props.theme.colors.corSecundaria};
  color: ${(props) => props.theme.colors.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.corPrincipal};
    color: ${(props) => props.theme.colors.corSecundaria};
  }

  .h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }

  .a {
    border-color: ${(props) => props.theme.colors.corPrincipal};
    background-color: ${(props) => props.theme.colors.corPrincipal};
    color: ${(props) => props.theme.colors.corSecundaria};
    display: inline-block;
    padding: 8px 16px;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;

    &:hover {
      background-color: ${(props) => props.theme.colors.corPrincipal};
      color: var(--cor-principal);
    }

    @media (max-width: 768px) {
      display: block;
    }
  }
`
