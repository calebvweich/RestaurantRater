import RestTile from "../restTile/restTile"
import "./restContainer.css"
export default function RestContainer() {
  return (
    <div className="restContainer">
      <h2>Closest Restaurants</h2>
      <div className="restGrid">
        <RestTile />
      </div>
    </div>
  )
}