import Coin from "../components/Coin";
import Pages from "../components/Pages";
import { useState } from "react";
import { FaStar, FaRegStar, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import CoinDescription from "./CoinDescription";

const Home = (props) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handlePortfolioItem = (name) => {
    const portfolioCopy = [...props.portfolio];
    if (portfolioCopy.includes(name)) return;
    portfolioCopy.push(name);
    props.addPortfolio(portfolioCopy);
    console.log(portfolioCopy);
  };

  const filteredCoins = props.home.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  //if user enters search term use filtered version of coins otherwise use all coins
  const coinsToUse = search ? filteredCoins : props.home;

  return (
    <>
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
            {props.home.map((coin) => (
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
              <FaRegStar
                onClick={() => handlePortfolioItem(coin.name)}
                className="star-icon"
                size="16"
              />
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
      <>
        <div className="page-select">{!search && <Pages pages={page} />}</div>
      </>
    </>
  );
};

export default Home;
