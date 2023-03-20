import CoinDesc from "../components/CoinDesc";
import { useLocation } from "react-router-dom";

const CoinDescription = (props) => {
  const location = useLocation();
  const currentCoin = location.pathname.split("/");
  let coinToShow = props.coinDescription;
  if (currentCoin[2]) {
    coinToShow = props.coinDescription.filter((coin) => {
      return coin.name === currentCoin[2];
    });
  }

  console.log(coinToShow);

  return (
    <>
      {coinToShow.map((coindesc, description) => {
        // console.log(coindesc.coinDescription.description.en);
        return (
          <div key={description} className="description-container">
            <CoinDesc
              key={coindesc.key}
              marketRank={coindesc.market_cap_rank}
              descImage={coindesc.image}
              name={coindesc.name}
              symbol={coindesc.symbol.toUpperCase()}
              marketCap={coindesc.market_cap.toLocaleString()}
              coinPrice={coindesc.current_price.toLocaleString()}
              volume={coindesc.total_volume.toLocaleString()}
              circulating={coindesc.circulating_supply.toLocaleString()}
              fullyDiluted={
                coindesc.fully_diluted_valuation
                  ? coindesc.fully_diluted_valuation.toLocaleString()
                  : ""
              }
              totalSupply={
                coindesc.total_supply
                  ? coindesc.total_supply.toLocaleString()
                  : ""
              }
              maxSupply={
                coindesc.max_supply ? coindesc.max_supply.toLocaleString() : "∞"
              }
              twentyFourHourHigh={coindesc.high_24h.toLocaleString()}
              twentyFourHourLow={coindesc.low_24h.toLocaleString()}
              ath={coindesc.ath.toLocaleString()}
              atl={coindesc.atl.toLocaleString()}
              descText={coindesc.coinDescription.description.en}
            />
          </div>
        );
      })}
    </>
  );
};

export default CoinDescription;
