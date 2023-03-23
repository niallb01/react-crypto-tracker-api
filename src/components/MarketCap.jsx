const MarketCap = (props) => {
  return (
    <>
      {/* <p className="market-cap">Mkt Cap: £{props.marketCap}</p> */}
      <p className="market-cap">Mkt Cap: £{props.marketCap}b</p>
    </>
  );
};

export default MarketCap;
