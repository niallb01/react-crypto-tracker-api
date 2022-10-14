import React from "react";
import Name from "./Name";
import MarketCap from "./MarketCap";
import DescImage from "./DescImage";
import Symbol from "./Symbol";
import CoinPrice from "./CoinPrice";
import Circulating from "./Circulating";
import FullyDiluted from "./FullyDiluted";
import TotalSupply from "./TotalSupply";
import MaxSupply from "./MaxSupply";
import TwentyFourHourHigh from "./TwentyFourHourHigh";
import TwentyFourHourLow from "./TwentyFourHourLow ";
import MarketRank from "./MarketRank";
import Ath from "./Ath";
import Atl from "./Atl";
import Volume from "./Volume";
import DescText from "./DescText";

const CoinDesc = (props) => {
  return (
    <>
      <MarketRank marketrank={props.marketRank} />
      <DescImage descimage={props.descImage} />
      <Name name={props.name} />
      <Symbol symbol={props.symbol} />
      <CoinPrice coinprice={props.coinPrice} />
      <MarketCap marketcap={props.marketCap} />
      <Volume volume={props.volume} />
      <Circulating circulating={props.circulating} />
      <FullyDiluted fullydiluted={props.fullyDiluted} />
      <TotalSupply totalsupply={props.totalSupply} />
      <MaxSupply maxsupply={props.maxSupply} />
      <TwentyFourHourHigh twentyfourhourhigh={props.twentyFourHourHigh} />
      <TwentyFourHourLow twentyfourhourlow={props.twentyFourHourLow} />
      <Ath ath={props.ath} />
      <Atl atl={props.atl} />
      <DescText desctext={props.descText} />
    </>
  );
};

export default CoinDesc;
