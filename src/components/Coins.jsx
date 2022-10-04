import Coin from "./Coin";

const Coins = (props) => {
  return (
    <>
      {props.coins.map((coin) => {
        return (
          <div className="coin-container">
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
    </>
  );
};

export default Coins;
