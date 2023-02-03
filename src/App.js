import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pagecomponents/Home";
import Portfolio from "./pagecomponents/Portfolio";
import CoinDescription from "./pagecomponents/CoinDescription";
import { useSelector, useDispatch } from "react-redux"; //hooks
import { setCoins } from "./state/reducers/currencySlice";
import { setDescription } from "./state/reducers/descriptionSlice";
import { addPortfolio } from "./state/reducers/addPortfolioSlice";
import { setInput } from "./state/reducers/inputSlice";

function setApiData(apiData) {
  localStorage.setItem("apiData", JSON.stringify(apiData));
}

function getApiData() {
  const data = localStorage.getItem("apiData");
  if (data) return JSON.parse(data);
  return [];
}
// From app we can send messages to store - dispatch
function App() {
  const coins = useSelector((state) => state.currency.coins); // selects data we want from the store
  // console.log("line 25", coins);
  // pulling in state from store, global tree, small obj created is coins has value + actions - how we manipulate
  // const dispatch = useDispatch(); // returns function - dispatches action
  // description
  const coinDescription = useSelector(
    (state) => state.currencyDescription.coinDescription
  );
  // console.log("line 30", coinDescription);
  //portfolio
  // const portfolio = useSelector((state) => state.portfolioItem.portfolio);

  //inputs
  const input = useSelector((state) => state.userInput.input);

  const dispatch = useDispatch(); //we create an instance of useDispatch- returns function - dispatches action - sends message to store
  //
  // const [coins, setCoins] = useState(getApiData());
  // const [page, setPage] = useState(1);
  // const [coinDescription, setDescription] = useState(getApiData());
  const [portfolio, addPortfolio] = useState([]);
  const [passwordType, setPasswordType] = useState("password");
  // const [input, setInput] = useState({
  //   loginPassword: "",
  //   loginEmail: "",
  //   modifyName: "",
  //   modifyPassword: "",
  //   modifyEmail: "",
  //   signUpName: "",
  //   signUpPassword: "",
  //   signUpEmail: "",
  // });

  // coins - The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
  useEffect(() => {
    const coins = getApiData();
    dispatch(setCoins(coins));
  }, []);

  // description
  useEffect(() => {
    const coinDescription = getApiData();
    // console.log("coinDescription line 62", coinDescription);
    dispatch(setDescription(coinDescription));
  }, []);

  //add portfolio item
  // useEffect(() => {
  //   const addPortfolio = handlePortfolioItem();
  //   console.log("line 62", portfolio);
  //   dispatch(addPortfolio(portfolio));
  // });

  //inputs
  useEffect(() => {
    const input = handleInputs();
    dispatch(setInput(input));
  });

  // const handleInputs = (e) => {
  //   const { name, value } = e.target;
  //   setInput({
  //     ...input,
  //     [name]: value,
  //   });
  //   console.log(input);
  // };

  if (coins.length === 0) {
    return <div>loading.....</div>;
  }

  if (coinDescription.length === 0) {
    return <div>loading.....</div>;
  }

  //gives back object with key(name) and value(user input)
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(input);
  };

  const togglePassword = (e) => {
    setPasswordType(passwordType === "password" ? "text" : "password");
    e.preventDefault();
  };

  const onLogin = (e) => {
    e.prevent.default();
  };

  const onModifyDetails = (e) => {
    e.prevent.default();
  };

  const onSignUp = (e) => {
    e.prevent.default();
  };

  const onLogout = (e) => {
    e.prevent.default();
  };

  // console.log("should never occur");
  return (
    <>
      <Navbar
        input={input}
        handleInputs={handleInputs}
        onLogin={onLogin}
        onModifyDetails={onModifyDetails}
        onSignUp={onSignUp}
        onLogout={onLogout}
        togglePassword={togglePassword}
        passwordType={passwordType}
      />

      <Routes>
        <Route
          path="/home"
          element={
            <Home
              coins={coins}
              portfolio={portfolio}
              addPortfolio={addPortfolio}
            />
          }
        />
        <Route
          path="/coin-description/:coinName"
          element={<CoinDescription coinDescription={coinDescription} />}
        />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              portfolio={portfolio}
              addPortfolio={addPortfolio}
              coins={coins}
            />
          }
        />
        <Route
          path="/coin-description/:coinName"
          element={<CoinDescription coinDescription={coinDescription} />}
        />
      </Routes>
    </>
  );
}

export default App;
