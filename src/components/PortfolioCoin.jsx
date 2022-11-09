import React from "react";
import CoinPrice from "./CoinPrice";
import Name from "./Name";
import Image from "./Image";
import MarketCap from "./MarketCap";
import Symbol from "./Symbol";
import Volume from "./Volume";
import Rank from "./Rank";
import TwentyFourHour from "./24hr";
import FDV from "./FDV";
import Quantity from "./Quantity";

const PortfolioCoin = (props) => {
  return (
    <>
      <Rank rank={props.rank} />
      <Image image={props.image} />
      <Name name={props.name} />
      <Symbol symbol={props.symbol} />
      <Quantity quantity={props.quantity} />
      <CoinPrice coinPrice={props.coinPrice} />
      <TwentyFourHour twentyFourHour={props.twentyFourHour} />
    </>
  );
};

export default PortfolioCoin;
