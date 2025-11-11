import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import RestContainer from './components/restContainer/restContainer'
import { dislike, getInteractions, getRestList, like, save } from './api'

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
    if (token) {
      const res = await getInteractions();
      console.log(res);
      if (res.ok) {
        setRestList(res.json());
      } else if (res.status === 401) {
        localStorage.removeItem("token");
        setToken(null);
      }
    } else {
      const res = await getRestList();
      setRestList(res);
    }
  }

  async function saveRest(restId, saveValue) {
    const res = await save(restId, saveValue);
    if (res.ok) {
      getRestaurants();
    };
  }

  async function likeRest(restId, likeValue) {
    const res = await like(restId, likeValue);
    if (res.ok) {
      getRestaurants();
    };
  }

  async function dislikeRest(restId, dislikeValue) {
    const res = await dislike(restId, dislikeValue);
    if (res.ok) {
      getRestaurants();
    };
  }
  
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    getRestaurants();
  }, [token]);

  return (
    <>
    <Header token={token} logout={logout} validate={login} />
    <div className="body">
      <Sidebar />
      <RestContainer
        restList={restList}
        token={token}
        save={saveRest}
        like={likeRest}
        dislike={dislikeRest}
      />
    </div>
    </>
  )
}

export default App
