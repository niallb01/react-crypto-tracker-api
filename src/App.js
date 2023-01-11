import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pagecomponents/Home";
import Portfolio from "./pagecomponents/Portfolio";
import CoinDescription from "./pagecomponents/CoinDescription";

function setApiData(apiData) {
  localStorage.setItem("apiData", JSON.stringify(apiData));
}

function getApiData() {
  const data = localStorage.getItem("apiData");
  if (data) return JSON.parse(data);
  return [];
}

function App() {
  const [coins, setCoins] = useState(getApiData());
  const [page, setPage] = useState(1);
  const [coinDescription, setDescription] = useState(getApiData());
  const [portfolio, addPortfolio] = useState([]);
  //password
  const [passwordType, setPasswordType] = useState("password");
  //inputs
  const [input, setInput] = useState({
    loginPassword: "",
    loginEmail: "",
    modifyName: "",
    modifyPassword: "",
    modifyEmail: "",
    signUpName: "",
    signUpPassword: "",
    signUpEmail: "",
  });

  useEffect(() => {
    if (coins.length > 0) return;
    console.log("no data found. getting new data");
    async function getApiData() {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=5&page=${page}&sparkline=false`
        );
        const now = Math.round(Date.now() / 1000);
        const sevenDaysAgo = Math.round(now - 86400);
        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];
          const history = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${element.id}/market_chart/range?vs_currency=gbp&from=${sevenDaysAgo}&to=${now}`
          );
          //each entry will have correct data attached to it
          res.data[index].history = history.data;
          const description = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${element.id}`
          );
          res.data[index].coinDescription = description.data;
        }
        console.log(res.data);
        setCoins(res.data);
        setApiData(res.data);
        setDescription(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    getApiData();
  }, []);

  //gives back object with key(name) and value(user input)
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(input);
  };

  // const togglePassword = (e) => {
  //   if (passwordType === "password") {
  //     setPasswordType("password");
  //   } else {
  //     setPasswordType("text");
  //   }
  //   e.preventDefault();
  // };

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

  return (
    <>
      <Navbar
        input={input}
        setInput={setInput}
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
