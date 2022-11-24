import { useState } from "react";
import "../Modal.css";
// import PortfolioEditCoin from "./PortfolioEditCoin";
import Placeholder from "./Placeholder";

const EditCoin = (props) => {
  const [editModal, setEditModal] = useState(false);
  const [quantity, setQuantity] = useState([]);
  const [editCoin, setEditCoin] = useState([]); //edit coin
  const [selectedCoin, setSelectedCoin] = useState();
  //const [placeholder, setPlaceholder] = useState([]);

  //weve passed down the coin into editcoin when btn is clicked we are then storing coin in local state
  const toggleEditModal = (coin) => {
    setEditModal(!editModal);
    setSelectedCoin(coin);
  };

  //event handler to edit coin quantity from user
  const handleEditQuantity = (e) => {
    setQuantity(e.target.value);
    console.log(e.target.value);
  };

  //need function to add quantity to state - need to iterate over portfolio in this file
  //need to know which item in array to edit - array method to update?
  const newCoinQuantity = () => {
    console.log("update btn was clicked");
    // const updatedCoin = [...props.portfolio];
    // // updatedCoin.?
    // props.addPortfolio(updatedCoin);
  };

  //need to tell this function which coin to delete, index, itemNo then delete from state

  //add updated coin to the state
  // const editCoinPortfolio = () => {
  //   const coinToEdit = [...props.portfolio];
  //   props.addPortfolio(editCoin);
  // };

  //user choose's coin to edit, ideally using toggleEdit but it already has onClick
  // const chooseEditCoin = (name) => {
  //   setEditCoin(name);
  // };

  return (
    <>
      <div className="add-portfolio-btn">
        <button
          onClick={() => {
            toggleEditModal(props.name);
          }}
          className="edit-coin"
        >
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
              disabled
              value={selectedCoin} // value should never be action
            />

            <input
              onInput={handleEditQuantity}
              type="text"
              className="portfolio-quantity"
              value={quantity}
              placeholder="Enter Quantity..."
            />
            <button
              onClick={() => {
                props.onDeletePortfolioCoin(selectedCoin);
              }}
              className="delete-portfolio-coin-btn"
            >
              Delete
            </button>
            <button
              onClick={() => {
                props.onUpdatePortfolioCoin(selectedCoin, quantity);
                toggleEditModal();
              }}
              className="add-portfolio-coin-btn"
            >
              Update
            </button>
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
