const CoinPrice = (props) => {
  return (
    <>
      <p className="coin-price">Price: £{props.coinPrice}</p>
    </>
  );
};

export default CoinPrice;
