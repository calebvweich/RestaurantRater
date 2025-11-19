import { useState } from "react"
import "./header.css"
import LoginModal from "../modal/loginModal/loginModal"
import { useNavigate } from "react-router-dom";
export default function Header({ user, logout, validate }) {
  const [search, setSearch] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  let navigate = useNavigate()
  return (
    <>
    <div className="header">
      <h1 onClick={() => navigate("/")}>Rate-A-Rest</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar"
      />
      <button className="accButton" onClick={() => user ? navigate("/account") : setLoginOpen(true)}>{user ? "Account" : "Log In"}</button>
    </div>
    {loginOpen &&
      <LoginModal close={() => setLoginOpen(false)} validate={validate} />
    }
    </>
  )
}