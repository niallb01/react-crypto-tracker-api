const Volume = (props) => {
  return (
    <>
      <p className="coin-volume-24hr">24h Volume: £{props.volume}</p>
    </>
  );
};

export default Volume;
