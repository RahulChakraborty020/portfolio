import Navbar from './components/Navbar'
import Intro from './sections/Intro/Intro'

function App() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orb one" aria-hidden="true" />
      <div className="bg-orb two" aria-hidden="true" />
      <div id="spotlight" aria-hidden="true" />

      <header>
        <Navbar />
      </header>

      <main>
        <Intro />
      </main>
    </>
  )
}

export default App
