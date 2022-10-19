import CoinDesc from "./CoinDesc";

const Desc = (props) => {
  return (
    <>
      {props.desc.map((coindesc) => {
        return (
          <div className="description-container">
            <CoinDesc
              marketRank={coindesc.market_cap_rank}
              descImage={coindesc.image}
              name={coindesc.name}
              symbol={coindesc.symbol.toUpperCase()}
              marketCap={coindesc.market_cap.toLocaleString()}
              coinPrice={coindesc.current_price.toLocaleString()}
              volume={coindesc.total_volume.toLocaleString()}
              circulating={coindesc.circulating_supply.toLocaleString()}
              fullyDiluted={coindesc.fully_diluted_valuation.toLocaleString()}
              totalSupply={coindesc.total_supply.toLocaleString()}
              maxSupply={
                coindesc.max_supply ? coindesc.max_supply.toLocaleString() : "∞"
              }
              twentyFourHourHigh={coindesc.high_24h.toLocaleString()}
              twentyFourHourLow={coindesc.low_24h.toLocaleString()}
              ath={coindesc.ath.toLocaleString()}
              atl={coindesc.atl.toLocaleString()}
              descText={coindesc.desc.description.en}
            />
          </div>
        );
      })}
    </>
  );
};

export default Desc;
