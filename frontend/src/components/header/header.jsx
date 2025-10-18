import { useState } from "react"
import "./header.css"
export default function Header() {
  const [search, setSearch] = useState("")
  return (
    <div className="header">
      <h1>Rate-A-Rest</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar"
      />
      <button className="accButton">Account</button>
    </div>
  )
}