import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import RestContainer from './components/restContainer/restContainer'
import { getRestList } from './api'

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [restList, setRestList] = useState({})
  
  function logout() {
    localStorage.clear();
    setToken(null);
  }

  function login(token) {
    setToken(token);
  }

  async function getRestaurants() {
    const res = await getRestList();
    setRestList(res);
  }

  useEffect(() => {
    getRestaurants();
  }, [])
  
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <>
    <Header token={token} logout={logout} validate={login} />
    <div className="body">
      <Sidebar />
      <RestContainer restList={restList} token={token} />
    </div>
    </>
  )
}

export default App
