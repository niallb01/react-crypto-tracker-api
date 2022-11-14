import { useState } from "react";
import InputCoin from "../inputcomponents/InputCoin";
import "../Modal.css";

const EditCoin = (props) => {
  const [editModal, setEditModal] = useState(false);
  const [quantity, setQuantity] = useState([]);

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      {/* <button className="edit-coin">EDIT</button> */}
      <div className="add-portfolio-btn">
        <button onClick={toggleEditModal} className="edit-coin">
          Edit
        </button>
      </div>
      {editModal && (
        <div className="edit-modal">
          <div onClick={toggleEditModal} className="overlay"></div>
          <div className="modal-content">
            <h4 className="modal-header">Edit Coin</h4>
            <input
              className="edit-coin-input"
              //   placeholder={}
            />

            <input
              onInput={handleQuantity}
              type="text"
              className="portfolio-quantity"
              placeholder="Add Quantity..."
            />
            <button className="delete-portfolio-coin-btn">Delete</button>
            <button className="add-portfolio-coin-btn">Update</button>

            <button onClick={toggleEditModal} className="close-modal">
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCoin;
