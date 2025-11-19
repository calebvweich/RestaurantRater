import { save, like, dislike } from "../../api";
import RestContainer from "../../components/restContainer/restContainer";
import Sidebar from "../../components/sidebar/sidebar";


export default function MainPage({user, restList}) {

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

  return(
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
  )
}