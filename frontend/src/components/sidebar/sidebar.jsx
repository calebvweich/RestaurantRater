import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Sort By</h3>
      <div className="sortList"></div>
      <h3>Categories</h3>
      <div className="catList"></div>
    </div>
  )
}