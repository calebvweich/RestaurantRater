import "./modal.css"
export default function Modal({ close, children }) {
  return (
    <div className="dialogBackground" onClick={close}>
      {children}
    </div>
  )
}