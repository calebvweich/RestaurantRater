import { useEffect, useState } from "react";
import { capitalize } from "../../../functions";
import Modal from "../modal";
import "./restModal.css";
import { getRestReviews, newReview } from "../../../api";
import Review from "../../review/review";
export default function RestModal({ close, info, user }) {
  const [reviewList, setReviewList] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [userReview, setUserReview] = useState("");

  async function postReview() {
    if (reviewText.length > 10) {
      newReview(info._id, reviewText);
      setReviewText("");
      getReviews(info._id);
    }
  }

  async function getReviews(id) {
    const res = await getRestReviews(id);
    setReviewList(res.filter(r => (user ? r.userId._id !== user.id : r)));
    setUserReview(res.filter(r => (user ? (r.userId._id === user.id)[0] : "")));
  }

  useEffect(() => {
    getReviews(info._id);
  }, [])

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
              <div className="restModalReviews">
                {(user && !userReview) && <div className="newReview">
                  <textarea
                    value={reviewText}
                    onChange={e => setReviewText(e.target.value)}
                  />
                  <button onClick={() => postReview()}>Post</button>
                </div>
                }
                <div className="reviewList">
                  {(user && userReview) && <Review r={userReview} />}
                  {(reviewList.length > 0) ? reviewList.map(r => 
                    <Review r={r} />
                  )
                  : !userReview &&<div>No Reviews Yet</div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}