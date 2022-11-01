import PortfolioCoin from "../components/PortfolioCoin";
import Coin from "../components/Coin";
import { FaStar, FaRegStar, FaSearch } from "react-icons/fa";

const Portfolio = (props) => {
  console.log(props);
  return (
    <>
      <div className="portfolio-container">
        <h1>My Portfolio</h1>
        <button className="add-coin-button">+ Add Coin</button>
        <button className="delete-coin-button">Delete</button>
        {props.portfolio.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </>
  );
};

export default Portfolio;
