import Coin from "./Coin";
import Pages from "./Pages";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const Coins = (props) => {
  const [page, setPage] = useState(1);
  return (
    <>
      <h2>Search Currency</h2>
      <input
        type="text"
        className="search-input"
        // onKeyUp={handleSearchInput}
      ></input>

      {props.coins.map((coin) => {
        return (
          <div className="coin-container">
            <FaRegStar className="star-icon" size="16" />
            <Coin
              rank={coin.market_cap_rank}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol.toUpperCase()}
              marketCap={coin.market_cap.toLocaleString()}
              coinPrice={coin.current_price.toLocaleString()}
              twentyFourHour={coin.price_change_percentage_24h.toFixed(1)}
              volume={coin.total_volume.toLocaleString()}
            />
          </div>
        );
      })}
      <div className="page-select">
        <Pages pages={page} />
      </div>
    </>
  );
};

export default Coins;
