import "./review.css"
export default function Review({r}) {
  return (
    <div className="reviewContainer">
      <div className="reviewText">{r.text}</div>
      <div className="reviewName">{r.name}</div>
    </div>
  )
}