import React from "react";
import Name from "../components/Name";
import MarketCap from "../components/MarketCap";
import Image from "../components/Image";
import Symbol from "../components/Symbol";
import CoinPrice from "../components/CoinPrice";
import Rank from "../components/Rank";

const CoinDescription = (props) => {
  return (
    <>
      {/* <TwentyFourHourHigh twentyfourhourhigh={props.twentyFourHourHigh} />
      <TwentyFourHourLow twentyfourhourlow={props.twentyFourHourLow} /> */}
      {/* <DescriptionText descriptiontext={props.descriptionText} /> */}
      <CoinPrice coinprice={props.coinPrice} />
      <Image image={props.image} />
      <MarketCap marketcap={props.marketCap} />
      <Name name={props.name} />
      <Rank rank={props.rank} />
      <Symbol symbol={props.symbol} />
    </>
  );
};

export default CoinDescription;
