import RestTile from "../restTile/restTile"
import "./restContainer.css"
export default function RestContainer({ restList, user, save, like, dislike }) {
  return (
    <div className="restContainer">
      <h2>Closest Restaurants</h2>
      <div className="restGrid">
        {restList[0] && restList.map(r =>
          <RestTile
            key={r._id}
            r={r}
            user={user}
            save={save}
            like={like}
            dislike={dislike}
          />
        )}
      </div>
    </div>
  )
}