import React from "react";
import Name from "./Name";
import MarketCap from "./MarketCap";
import Image from "./Image";
import Symbol from "./Symbol";
import CoinPrice from "./CoinPrice";
import Rank from "./Rank";
import Circulating from "./Circulating";

const CoinDesc = (props) => {
  return (
    <>
      <CoinPrice coinprice={props.coinPrice} />
      <Image image={props.image} />
      <MarketCap marketcap={props.marketCap} />
      <Name name={props.name} />
      <Rank rank={props.rank} />
      <Symbol symbol={props.symbol} />
      <Circulating circulating={props.circulating} />
    </>
  );
};

export default CoinDesc;
