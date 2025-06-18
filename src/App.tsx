
import { About, Header, Introduction, Projects, Connection, Footer } from './components'

function App() {

  return (
    <div className='app'>
      <Header />
      <main>
        <Introduction />
        <About />
        <Projects />
        <Connection />
        <Footer />
      </main>
    </div>
  )
}

export default App
