import CoinPrice from "../components/CoinPrice";
import Name from "../components/Name";
import Quantity from "./Quantity";
import TotalValue from "./TotalValue";

const PortfolioEditCoin = (props) => {
  return (
    <>
      <Name name={props.name} />
      <CoinPrice coinPrice={props.coinPrice} />
      <Quantity quantity={props.quantity} />
      <TotalValue totalValue={props.totalValue.toLocaleString()} />
    </>
  );
};

export default PortfolioEditCoin;
