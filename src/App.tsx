import EstiloGlobal from './styles'
import Hero from './components/Hero'
import Cabecalho from './components/Cabecalho'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
