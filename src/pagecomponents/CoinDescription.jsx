import CoinDesc from "../components/CoinDesc";
import { useLocation } from "react-router-dom";
import DescText from "../components/DescText";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CoinDescription = (props) => {
  const location = useLocation();
  const currentCoin = location.pathname.split("/");
  let coinToShow = props.coinDescription;
  if (currentCoin[2]) {
    coinToShow = props.coinDescription.filter((coin) => {
      return coin.name === currentCoin[2];
    });
  }

  console.log(coinToShow);

  return (
    <>
      <h4 className="desc-header">All About {currentCoin[2]}</h4>
      <div className="portfolio-link">
        Go to
        <Link to="/portfolio">
          <a href="#" className="portfolio-link-text">
            {" "}
            Portfolio{" "}
            {
              <FaStar
                className="star-icon-fill"
                size="10"
                width={{ width: "10px" }}
              />
            }
          </a>
        </Link>
      </div>

      {coinToShow.map((coindesc, description) => {
        // console.log(coindesc.coinDescription.description.en);
        return (
          <div key={description} className="desc-container">
            <div className="desc-data">
              <CoinDesc
                key={coindesc.key}
                marketRank={coindesc.market_cap_rank}
                descImage={coindesc.image}
                name={coindesc.name}
                symbol={coindesc.symbol.toUpperCase()}
                marketCap={coindesc.market_cap.toLocaleString()}
                coinPrice={coindesc.current_price.toLocaleString()}
                volume={coindesc.total_volume.toLocaleString()}
                circulating={coindesc.circulating_supply.toLocaleString()}
                fullyDiluted={
                  coindesc.fully_diluted_valuation
                    ? coindesc.fully_diluted_valuation.toLocaleString()
                    : ""
                }
                totalSupply={
                  coindesc.total_supply
                    ? coindesc.total_supply.toLocaleString()
                    : ""
                }
                maxSupply={
                  coindesc.max_supply
                    ? coindesc.max_supply.toLocaleString()
                    : "∞"
                }
                twentyFourHourHigh={coindesc.high_24h.toLocaleString()}
                twentyFourHourLow={coindesc.low_24h.toLocaleString()}
                ath={coindesc.ath.toLocaleString()}
                atl={coindesc.atl.toLocaleString()}
              />
            </div>

            <div className="coin-desc-text">
              {!coindesc.coinDescription.description.en ? (
                <>
                  <h4 className="coin-desc-header">No Description Available</h4>
                </>
              ) : (
                <>
                  <h4 className="coin-desc-header">
                    What is {currentCoin[2]}?
                  </h4>
                  <DescText
                    descText={coindesc.coinDescription.description.en}
                  />
                </>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CoinDescription;
