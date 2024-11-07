import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
      <template id="elements__list" />
    </>
  )
}

export default App
