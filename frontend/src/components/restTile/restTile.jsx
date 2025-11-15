import { MdOutlineThumbUp, MdThumbUp, MdOutlineThumbDown, MdThumbDown, MdBookmarkBorder, MdBookmark } from "react-icons/md";
import "./restTile.css"
import { useEffect, useState } from "react";
import RestModal from "../modal/restModal/restModal";

export default function RestTile({ r, user, save, like, dislike }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  function handleRateUp(e) {
    e.stopPropagation();
    like(r._id, !r.userInteraction.liked);
  };
  function handleRateDown(e) {
    e.stopPropagation();
    dislike(r._id, !r.userInteraction.disliked);
  };
  function handleSave(e) {
    e.stopPropagation();
    save(r._id, !r.userInteraction.saved);
  };
  return (
    <>
    <div className="restTile" onClick={() => setDialogOpen(true)}>
      <div>
        <p className="restTileName">{r.name}</p>
        <button onClick={(e) => handleSave(e)}>{r.userInteraction && r.userInteraction.saved ? <MdBookmark /> : <MdBookmarkBorder />}</button>
      </div>
      <img src={r.gallery[0]} />
      <div>{r.address}</div>
      <div className="ratings">
        <button onClick={(e) => handleRateDown(e)}>{r.userInteraction && r.userInteraction.disliked ? <MdThumbDown /> : <MdOutlineThumbDown />}{r.ratings.down}</button>
        <p>{r.ratings.up > 0 ? Math.round(r.ratings.up / (r.ratings.up + r.ratings.down) * 100) : 0}%</p>
        <button onClick={(e) => handleRateUp(e)}>{r.userInteraction && r.userInteraction.liked ? <MdThumbUp /> : <MdOutlineThumbUp />}{r.ratings.up}</button>
      </div>
    </div>
    {dialogOpen &&
      <RestModal
        close={() => setDialogOpen(false)}
        info={r}
        user={user}
      />
    }
    </>
  )
}