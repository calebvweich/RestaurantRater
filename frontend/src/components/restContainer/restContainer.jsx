import RestTile from "../restTile/restTile"
import "./restContainer.css"
export default function RestContainer({ restList, token, save, like, dislike }) {
  return (
    <div className="restContainer">
      <h2>Closest Restaurants</h2>
      <div className="restGrid">
        {restList[0] && restList.map(r =>
          <RestTile
            key={r._id}
            r={r}
            token={token}
            save={save}
            like={like}
            dislike={dislike}
          />
        )}
      </div>
    </div>
  )
}