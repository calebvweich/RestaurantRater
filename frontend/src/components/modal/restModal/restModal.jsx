import Modal from "../modal"
import "./restModal.css"
export default function RestModal({ close, info }) {
  return (
    <Modal close={close}>
      <h1>{info.name}</h1>
    </Modal>
  )
}