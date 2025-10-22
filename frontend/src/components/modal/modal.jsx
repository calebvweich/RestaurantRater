import "./modal.css"
export default function Modal({ close, children }) {
  return (
    <div className="dialogBackground" onClick={close}>
      <div className="dialogContainer" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}