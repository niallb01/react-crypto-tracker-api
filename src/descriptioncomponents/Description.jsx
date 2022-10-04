import CoinDescription from "./CoinDescription";

const Description = (props) => {
  return (
    <>
      <h1>Yo</h1>
      {props.description.map((coindescription) => {
        return (
          <div className="description-container">
            <CoinDescription
              name={coindescription.name}
              image={coindescription.image}
              marketcap={coindescription.marketCap}
              coinprice={coindescription.current_price}
              rank={coindescription.market_cap_rank}
            />
          </div>
        );
      })}
    </>
  );
};

export default Description;
