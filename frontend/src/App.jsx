import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import RestContainer from './components/restContainer/restContainer'
import { getRestList } from './api'

function App() {
  const [restList, setRestList] = useState({})

  async function getRestaurants() {
    const res = await getRestList();
    setRestList(res)
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  return (
    <>
    <Header />
    <div className="body">
      <Sidebar />
      <RestContainer restList={restList} />
    </div>
    </>
  )
}

export default App
