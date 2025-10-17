import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import RestTile from './components/restTile/restTile'

function App() {

  return (
    <>
    <Header />
    <Sidebar />
    <RestTile />
    </>
  )
}

export default App
