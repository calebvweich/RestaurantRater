import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDown } from "react-icons/md";
import "./restTile.css"
import { useState } from "react";
import RestModal from "../modal/restModal/restModal";
export default function RestTile({ r }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  function handleRateUp(e) {
    e.stopPropagation();
  };
  function handleRateDown(e) {
    e.stopPropagation();
  };
  return (
    <>
    <div className="restTile" onClick={() => setDialogOpen(true)}>
      <p className="restTileName">{r.name}</p>
      <img src={r.gallery[0]} />
      <div>{r.address}</div>
      <div className="ratings">
        <button onClick={(e) => handleRateUp(e)}><MdOutlineThumbUp />{r.ratings.up}</button>
        <p>{r.ratings.up > 0 ? (r.ratings.up / (r.ratings.up + r.ratings.down) * 100) : 0}%</p>
        <button onClick={(e) => handleRateDown(e)}><MdOutlineThumbDown />{r.ratings.down}</button>
      </div>
    </div>
    {dialogOpen &&
      <RestModal
        close={() => setDialogOpen(false)}
        info={r}
      />
    }
    </>
  )
}