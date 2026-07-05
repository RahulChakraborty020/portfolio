import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orb one" aria-hidden="true" />
      <div className="bg-orb two" aria-hidden="true" />

      <Navbar />

      <main>
        <section id="hero" style={{ height: '200vh' }} />
      </main>
    </>
  )
}

export default App
