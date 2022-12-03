import React from "react";
import CoinPrice from "../components/CoinPrice";
import Name from "../components/Name";
import Image from "../components/Image";
import Symbol from "../components/Symbol";
import TwentyFourHour from "../components/24hr";
import Rank from "../components/Rank";
import Quantity from "./Quantity";
import TotalValue from "./TotalValue";
import EditCoin from "./EditCoin";
//this component is child of portfolio - data is being sent down from portfolio
//parent - portfolio is mapping over data

const PortfolioCoin = (props) => {
  return (
    <>
      <Rank rank={props.rank} />
      <Image image={props.image} />
      <Name name={props.name} />
      <Symbol symbol={props.symbol} />
      <TwentyFourHour twentyFourHour={props.twentyFourHour} />
      <CoinPrice coinPrice={props.coinPrice} />
      <Quantity quantity={props.quantity} />
      <TotalValue totalValue={props.totalValue.toLocaleString()} />
      <EditCoin
        name={props.name}
        onDeletePortfolioCoin={props.onDeletePortfolioCoin}
        onUpdatePortfolioCoin={props.onUpdatePortfolioCoin}
      />
    </>
  );
};

export default PortfolioCoin;