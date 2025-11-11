import { capitalize } from "../../../functions";
import Modal from "../modal";
import "./restModal.css";
export default function RestModal({ close, info, token }) {
  return (
    <Modal close={close}>
      <div className="restModalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="restModalHeader">
          <h1>{info.name}</h1>
        </div>
        <div className="restModalBody">
          <div className="restModalImgList">
            {info.gallery.map(img => 
              <img src={img} key={img} className="restModalImg" />
            )}
          </div>
          <div className="restModalInfo">
            <div className="restModalSection">
              <div className="restModalDesc">{info.description}</div>
              <div className="restModalOpen">{Object.keys(info.openingHours).map(h => 
                  <p>{h.toUpperCase()}:<br/>{info.openingHours[h]}</p>
                )}
              </div>
            </div>
            <div className="restModalSection">
              <div className="restModalOptions">
                <div>
                  {Object.keys(info.options).map(o => 
                    <p>{capitalize(o)}: {info.options[o] ? "Yes" : "No"}<br/></p>
                  )}
                </div>
                <p>{info.priceRange}</p>
              </div>
              <div className="restModalContact">
                <p>{info.address}</p>
                <p>{info.phone}</p>
                <p><a onClick={() => alert("This is an example, website does not exist")}>{info.website}</a></p>
              </div>
            </div>
            <div className="restModalSection">
              <div className="review">
                <textarea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}