import Coin from "./Coin";
import Pages from "./Pages";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const Coins = (props) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="user-coin-search">
        <TextField
          className="search-input"
          placeholder="Search Currency..."
          onInput={handleSearchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="search-icon" />
              </InputAdornment>
            ),
            style: { color: "#ffffff" },
          }}
        />
      </div>

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
