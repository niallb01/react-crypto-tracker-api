import React from "react";
import CoinPrice from "./CoinPrice";
import Name from "./Name";
import Image from "./Image";
import MarketCap from "./MarketCap";
import Symbol from "./Symbol";
import Volume from "./Volume";
import Rank from "./Rank";
import TwentyFourHour from "./24hr";

const Coin = (props) => {
  return (
    <>
      <Rank rank={props.rank} />
      <Image image={props.image} />
      <Name name={props.name} />
      <Symbol symbol={props.symbol} />
      <CoinPrice coinprice={props.coinPrice} />
      <TwentyFourHour twentyFourHour={props.twentyFourHour} />
      <Volume volume={props.volume} />
      <MarketCap marketcap={props.marketCap} />
    </>
  );
};

export default Coin;
