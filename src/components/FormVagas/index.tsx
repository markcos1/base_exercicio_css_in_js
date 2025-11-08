import React, { FormEvent, useState } from 'react'
import { EdicaoFormV, Input, Botao } from './styles'

type Props = {
  children: (termo: string) => void
}

const FormVagas = ({ children }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    children(termo.toLocaleLowerCase())
  }

  return (
    <EdicaoFormV onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Botao type="Submit">Pesquisar</Botao>
    </EdicaoFormV>
  )
}

export default FormVagas
