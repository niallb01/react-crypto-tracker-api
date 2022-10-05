const MarketRank = (props) => {
  return (
    <>
      <p className="market-cap-rank">
        <strong>Rank: #{props.marketrank}</strong>
      </p>
    </>
  );
};

export default MarketRank;
