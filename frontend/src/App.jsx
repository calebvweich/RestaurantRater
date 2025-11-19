import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { getInteractions, getRestList } from './api'
import AccountPage from './pages/account/account'
import MainPage from './pages/main/main'

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [restList, setRestList] = useState({})
  
  function logout() {
    localStorage.clear();
    setUser(null);
  }

  function login(user) {
    setUser(user);
  }

  async function getRestaurants() {
    if (user) {
      const res = await getInteractions();
      if (res.ok) {
        setRestList(await res.json());
      } else if (res.status === 401) {
        setUser(null);
      }
    } else {
      const res = await getRestList();
      setRestList(res);
    }
  }
  
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    getRestaurants();
  }, [user]);

  return (
    <BrowserRouter>
      <Header user={user} logout={logout} validate={login} />
      <Routes>
        <Route path="/" element={<MainPage user={user} restList={restList} />} />
        <Route path="/account" element={user ? <AccountPage /> : <Navigate to="/" />} />
        <Route path="/accountTEST" element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
