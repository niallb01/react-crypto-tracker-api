import Coin from "../components/Coin";
import Pages from "../components/Pages";
import { useState } from "react";
import { Icon, FaStar, FaRegStar, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import CoinDescription from "./CoinDescription";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = (props) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  //disable function when modal is active
  const handlePortfolioItem = (name) => {
    console.log(name, "this is the handle portfolio function");
    const portfolioCopy = [...props.portfolio];
    //all coins we have in portfolio, look at them, if name is equal to one we passed in return it
    const found = portfolioCopy?.find((coin) => {
      return coin.name === name;
    }); //if found remove from array
    if (found) {
      //Remove found coin
      const filtered = portfolioCopy.filter((coin) => {
        return coin.name !== name;
      });
      //Update state
      props.addPortfolio(filtered);
      return;
    }
    portfolioCopy.push({ name: name, quantity: "1" });
    props.addPortfolio(portfolioCopy);
    toast.success("Coin Added To Portfolio", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };

  const filteredCoins = props.coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  //if user enters search term use filtered version of coins otherwise use all coins
  const coinsToUse = search ? filteredCoins : props.coins;

  return (
    <>
      <ToastContainer />
      <div className="user-coin-search">
        <div className="search-bar">
          {/* <FaSearch className="search-icon" size="16" /> */}
          <input
            className="search-input"
            list="search-input-2"
            placeholder="Search Currency..."
            onInput={handleSearchInput}
          ></input>
          <datalist id="search-input-2">
            {props.coins.map((coin) => (
              <option>{coin.name}</option>
            ))}
          </datalist>
        </div>
      </div>
      {coinsToUse.map((coin) => {
        return (
          <Link
            to={`/coin-description/${coin.name}`}
            element={<CoinDescription />}
            key={coin.name}
          >
            <div className="coin-container">
              <Link to={"#"}>
                {props.portfolio.find((coinToFind) => {
                  return coinToFind.name === coin.name;
                }) ? (
                  <FaStar
                    onClick={() => handlePortfolioItem(coin.name)}
                    className="star-icon-fill"
                    size="16"
                  />
                ) : (
                  <FaRegStar
                    onClick={() => handlePortfolioItem(coin.name)}
                    className="star-icon"
                    size="16"
                  />
                )}
              </Link>

              <Coin
                id={coin.id}
                rank={coin.market_cap_rank}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol.toUpperCase()}
                marketCap={coin.market_cap.toLocaleString()}
                coinPrice={coin.current_price.toLocaleString()}
                twentyFourHour={coin.price_change_percentage_24h.toFixed(1)}
                sparkline={coin.sparkline_in_7d}
                volume={coin.total_volume.toLocaleString()}
                fdv={coin.fully_diluted_valuation.toLocaleString()}
              />
            </div>
          </Link>
        );
      })}
      <>
        <div className="page-select">{!search && <Pages pages={page} />}</div>
      </>
    </>
  );
};

export default Home;
