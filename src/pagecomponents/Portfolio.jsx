import { useState } from "react";
import "../Modal.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Coin from "../components/Coin";

const Portfolio = (props) => {
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [portfolioSearch, setPortfolioSearch] = useState([]);

  const handlePortfolioSearchInput = (e) => {
    setPortfolioSearch(e.target.value);
    console.log(e.target.value);
  };

  const togglePortfolioModal = () => {
    setPortfolioModal(!portfolioModal);
  };

  const onDeletePortfolio = (item) => {
    const deletePortfolio = [...props.portfolio];
    deletePortfolio.splice(item);
    props.addPortfolio(deletePortfolio);
    toast.success("Success! Portfolio Deleted!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
      limit: 1,
    });
  };

  const coinPortfolio = props.coins.filter((coin) => {
    return props.portfolio.includes(coin.name);
  });

  const coinResults = props.coins.filter((coin) => {
    return coin.name.includes(portfolioSearch);
  });

  console.log(coinResults);

  return (
    <>
      <ToastContainer limit={1} />
      <div className="portfolio-container">
        <h1>My Portfolio</h1>

        <button onClick={togglePortfolioModal} className="btn-modal">
          + Add Coin
        </button>
        {portfolioModal && (
          <div className="modal">
            <div onClick={togglePortfolioModal} className="overlay"></div>
            <div className="modal-content">
              <h4 className="modal-header">Add Coin Bitch</h4>
              <input
                type="text"
                className="portfolio-search"
                placeholder="Search Coin..."
                onInput={handlePortfolioSearchInput}
                list="search-input-3"
              />
              <ul>
                {coinResults.map((coin) => {
                  return <li>{coin.name}</li>;
                })}
              </ul>

              <input
                type="text"
                className="portfolio-quantity"
                placeholder="Add Quantity..."
              />
              <button className="add-portfolio-coin-btn">+ Add</button>

              <button onClick={togglePortfolioModal} className="close-modal">
                X
              </button>
            </div>
          </div>
        )}

        {coinPortfolio.map((coin) => {
          return (
            <p>
              <Coin
                id={coin.id}
                rank={coin.market_cap_rank}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol.toUpperCase()}
                marketCap={coin.market_cap.toLocaleString()}
                coinPrice={coin.current_price.toLocaleString()}
                twentyFourHour={coin.price_change_percentage_24h.toFixed(1)}
                volume={coin.total_volume.toLocaleString()}
                fdv={coin.fully_diluted_valuation.toLocaleString()}
              />
            </p>
          );
        })}
        <button onClick={onDeletePortfolio} className="delete-coin-button">
          Delete
        </button>
      </div>
    </>
  );
};

export default Portfolio;

{
  /* <datalist id="search-input-3">
{props.portfolio.map((coin) => (
  <option>{coin.name}</option>
))}
</datalist> */
}

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

/* <Icon
icon={handlePortfolioItem ? FaStar : FaRegStar}
onClick={() => handlePortfolioItem(coin.name)}
className="star-icon"
size="16"
/> */
