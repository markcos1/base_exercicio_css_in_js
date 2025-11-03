import Titulo from './components/Titulo'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal from './styles'
import Heroi from './components/Hero'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Titulo />
      <Heroi />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
