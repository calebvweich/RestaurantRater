import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import RestContainer from './components/restContainer/restContainer'

function App() {

  return (
    <>
    <Header />
    <div className="body">
      <Sidebar />
      <RestContainer />
    </div>
    </>
  )
}

export default App
