import { Vagacss } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => {
  return (
    <Vagacss>
      <h3>{titulo}</h3>
      <ul>
        <li>Localizacao: {localizacao}</li>
        <li>Senioridade: {nivel}</li>
        <li>Tipo de contratacao: {modalidade}</li>
        <li>
          Salário: {salarioMin} - {salarioMax}
        </li>
        <li>Requisitos: {requisitos.join(', ')}</li>
      </ul>
      <a href="#">Ver detalhes e candidatar-se</a>
    </Vagacss>
  )
}

export default Vaga
