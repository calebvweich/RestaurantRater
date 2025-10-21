import RestTile from "../restTile/restTile"
import "./restContainer.css"
export default function RestContainer({ restList }) {
  return (
    <div className="restContainer">
      <h2>Closest Restaurants</h2>
      <div className="restGrid">
        {restList[0] && restList.map(r =>
          <RestTile
            key={r._id}
            r={r}
          />
        )}
      </div>
    </div>
  )
}