import CoinDesc from "./CoinDesc";

const Desc = (props) => {
  return (
    <>
      <h1>Description</h1>
      {props.desc.map((coindesc) => {
        return (
          <div className="description-container">
            <CoinDesc
              image={coindesc.image}
              rank={coindesc.market_cap_rank}
              name={coindesc.name}
              symbol={coindesc.symbol.toUpperCase()}
              marketCap={coindesc.market_cap.toLocaleString()}
              coinPrice={coindesc.current_price.toLocaleString()}
              circulating={coindesc.circulating_supply.toLocaleString()}
            />
          </div>
        );
      })}
    </>
  );
};

export default Desc;
