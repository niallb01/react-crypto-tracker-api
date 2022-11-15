import { useState } from "react";
import "../Modal.css";

const EditCoin = (props) => {
  const [editModal, setEditModal] = useState(false);
  const [editQuantity, setEditQuantity] = useState([]);

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const handleEditQuantity = (e) => {
    setEditQuantity(e.target.value);
    console.log(e.target.value);
  };

  const onDeletePortfolioCoin = (item) => {
    const deleteCoin = [...props.portfolio];
    deleteCoin.splice(item, 1);
    props.addPortfolio(deleteCoin);
    // console.log(props.portfolio);
  };

  // console.log(props.portfolio);

  return (
    <>
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
              onInput={handleEditQuantity}
              type="text"
              className="portfolio-quantity"
              placeholder="Add Quantity..."
            />
            <button
              onClick={onDeletePortfolioCoin}
              className="delete-portfolio-coin-btn"
            >
              Delete
            </button>
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
