import { useState } from "react";
import "../Modal.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import CoinDescription from "./CoinDescription";
import Coin from "../components/Coin";
import InputCoin from "../inputcomponents/InputCoin";

const Portfolio = (props) => {
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [portfolioSearch, setPortfolioSearch] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const handlePortfolioSearchInput = (e) => {
    setPortfolioSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
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
    return coin.name.toLowerCase().includes(portfolioSearch);
  });

  const handleNewCoin = (name) => {
    //create spread version of state
    const newCoin = [...props.portfolio];
    //add new item to portfolio/state
    newCoin.push(name);
    props.addPortfolio(newCoin);
    console.log(newCoin);
  };

  // console.log(props.portfolio);
  // console.log(coinResults);

  return (
    <>
      <ToastContainer limit={1} />
      <h1>My Portfolio</h1>

      <div className="add-portfolio-btn">
        <button onClick={togglePortfolioModal} className="btn-modal">
          + Add Coin
        </button>
      </div>
      {portfolioModal && (
        <div className="modal">
          <div onClick={togglePortfolioModal} className="overlay"></div>
          <div className="modal-content">
            <h4 className="modal-header">Add Coin</h4>
            <input
              className="portfolio-search"
              list="search-input-3"
              placeholder="Search Coin..."
              onInput={handlePortfolioSearchInput}
            />

            <ul>
              {coinResults.map((coin) => {
                // return <li>{coin.name}</li>;
                return (
                  <li className="input-coin">
                    <InputCoin
                      onClick={() => handleNewCoin(coin.name)}
                      image={coin.image}
                      symbol={coin.symbol.toUpperCase()}
                      name={coin.name}
                    />
                  </li>
                );
              })}
            </ul>

            <input
              onInput={handleQuantity}
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
          <Link
            to={`/coin-description/${coin.name}`}
            element={<CoinDescription />}
            key={coin.name}
          >
            <div className="portfolio-container">
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
            </div>
          </Link>
        );
      })}
      <div className="delete-portfolio-btn">
        <button onClick={onDeletePortfolio} className="delete-coin-button">
          Delete
        </button>
      </div>
    </>
  );
};

export default Portfolio;
