import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container, theme } from './Estilos/styled'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <EstiloGlobal />
        <Header />
        <Hero />

        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
