const Portfolio = (props) => {
  const onDeletePortfolio = (item) => {
    const deletePortfolio = [...props.portfolio];
    deletePortfolio.splice(item);
    props.addPortfolio(deletePortfolio);
  };
  console.log("props", props.portfolio);

  return (
    <>
      <div className="portfolio-container">
        <h1>My Portfolio</h1>
        <button className="add-coin-button">+ Add Coin</button>

        {props.portfolio.map((item) => {
          return <p>{item}</p>;
        })}
        <button onClick={onDeletePortfolio} className="delete-coin-button">
          Delete
        </button>
      </div>
    </>
  );
};

export default Portfolio;
