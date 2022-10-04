const Name = (props) => {
  return (
    <>
      <p className="coin-name">
        Coin: <strong>{props.name}</strong>
      </p>
    </>
  );
};

export default Name;
