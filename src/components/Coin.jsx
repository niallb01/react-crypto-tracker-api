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
import Sparkline from "./Sparkline";

const Coin = (props) => {
  return (
    <>
      <Rank rank={props.rank} />
      <Image image={props.image} />
      <Name name={props.name} />
      <Symbol symbol={props.symbol} />
      <CoinPrice coinPrice={props.coinPrice} />
      <TwentyFourHour twentyFourHour={props.twentyFourHour} />
      <Volume volume={props.volume} />
      <Sparkline sparkline={props.sparkline} />
      <FDV fdv={props.fdv} />
      <MarketCap marketCap={props.marketCap} />
    </>
  );
};

export default Coin;
