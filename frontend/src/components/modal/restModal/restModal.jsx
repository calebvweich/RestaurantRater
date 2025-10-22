import { capitalize } from "../../../functions"
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Modal from "../modal"
import "./restModal.css"
export default function RestModal({ close, info }) {
  return (
    <Modal close={close}>
      <div className="restModalContainer">
        <div className="restModalHeader">
          <h1>{info.name}</h1>
        </div>
        {/* Replace with Image Carousel */}
        <div className="restModalImgCarousel">
          <div className="carouselArrow"><MdArrowBackIos /></div>
          <img src={info.gallery[0]} className="restModalImage" />
          <div className="carouselArrow"><MdArrowForwardIos /></div>
        </div>
        <div className="restModalSection">
          <div className="restModalDesc">{info.description}</div>
          <div className="restModalOpen">{Object.keys(info.openingHours).map(h => 
              <p>{h.toUpperCase()}: {info.openingHours[h]}</p>
            )}
          </div>
        </div>
        <div className="restModalSection">
          <div className="restModalOptions">
            <div>
              {Object.keys(info.options).map(o => 
                <p>{capitalize(o)}: {info.options[o] ? "Yes" : "No"}</p>
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
    </Modal>
  )
}