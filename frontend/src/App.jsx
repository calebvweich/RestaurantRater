import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import RestContainer from './components/restContainer/restContainer'
import { dislike, getInteractions, getRestList, like, save } from './api'

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
    if (user) {
      localStorage.setItem("user", JSON.parse(user));
    } else {
      localStorage.removeItem("user");
    }
    getRestaurants();
  }, [user]);

  return (
    <>
    <Header user={user} logout={logout} validate={login} />
    <div className="body">
      <Sidebar />
      <RestContainer
        restList={restList}
        user={user}
        save={saveRest}
        like={likeRest}
        dislike={dislikeRest}
      />
    </div>
    </>
  )
}

export default App
