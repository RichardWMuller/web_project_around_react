import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

import closeBtn from './images/close_icon.svg'
import PopupWithForm from './components/PopupWithForm'

function App() {
  // const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  // const handleOpenProfilePopup = () => {}

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
