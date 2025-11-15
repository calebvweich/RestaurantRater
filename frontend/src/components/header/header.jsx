import { useState } from "react"
import "./header.css"
import LoginModal from "../modal/loginModal/loginModal"
export default function Header({ user, logout, validate }) {
  const [search, setSearch] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <>
    <div className="header">
      <h1>Rate-A-Rest</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar"
      />
      <button className="accButton" onClick={() => user ? logout() : setLoginOpen(true)}>{user ? "Account" : "Log In"}</button>
    </div>
    {loginOpen &&
      <LoginModal close={() => setLoginOpen(false)} validate={validate} />
    }
    </>
  )
}