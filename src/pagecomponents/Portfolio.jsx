import { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "../Modal.css";

const Portfolio = (props) => {
  const [portfolioModal, setPortfolioModal] = useState(false);

  const togglePortfolioModal = () => {
    setPortfolioModal(!portfolioModal);
  };

  const onDeletePortfolio = (item) => {
    const deletePortfolio = [...props.portfolio];
    deletePortfolio.splice(item);
    props.addPortfolio(deletePortfolio);
  };

  // console.log("portfolio", props.portfolio);
  console.log(togglePortfolioModal);

  return (
    <>
      <div className="portfolio-container">
        <h1>My Portfolio</h1>

        <button onClick={togglePortfolioModal} className="btn-modal">
          + Add Coin
        </button>
        {portfolioModal && (
          <div className="modal">
            <div onClick={togglePortfolioModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Search coin bitch</h2>
              <input type="text" className="portfolio-search" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, neque?
              </p>
              <button onClick={togglePortfolioModal} className="close-modal">
                X
              </button>
            </div>
          </div>
        )}

        {props.portfolio.map((item) => {
          return <p>{item}</p>;
        })}
        <button onClick={onDeletePortfolio} className="delete-coin-button">
          Delete
        </button>
      </div>
    </>
  );
};

export default Portfolio;

// {handlePortfolioItem ? (
//   <FaRegStar
//     onClick={() => handlePortfolioItem(coin.name)}
//     className="star-icon"
//     size="16"
//   />
// ) : (
//   <FaStar
//     onClick={() => handlePortfolioItem(coin.name)}
//     className="star-icon-fill"
//     size="16"
//   />
// )}

{
  /* <Icon
icon={handlePortfolioItem ? FaStar : FaRegStar}
onClick={() => handlePortfolioItem(coin.name)}
className="star-icon"
size="16"
/> */
}

// return <p key={item}>{`"${item}"`}</p>
