import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDown } from "react-icons/md";
import "./restTile.css"
export default function RestTile({ r }) {
  return (
    <div className="restTile">
      {r.name}
      <img src={r.image} />
      <div>{r.address}</div>
      <div className="ratings">
        <button><MdOutlineThumbUp />{r.ratings.up}</button>
        <button><MdOutlineThumbDown />{r.ratings.down}</button>
      </div>
    </div>
  )
}