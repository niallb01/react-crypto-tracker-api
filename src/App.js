import { useEffect, useState } from "react";
// import axios from "axios";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pagecomponents/Home";
import Portfolio from "./pagecomponents/Portfolio";
import CoinDescription from "./pagecomponents/CoinDescription";
//
import CoinData from "./CoinData.json";
import CoinDescData from "./CoinDescData.json";

// function setApiData(apiData) {
//   localStorage.setItem("apiData", JSON.stringify(apiData));
// }

// function getApiData() {
//   const data = localStorage.getItem("apiData");
//   if (data) return JSON.parse(data);
//   return [];
// }

function App() {
  // const [coins, setCoins] = useState(getApiData());
  // const [coinDescription, setDescription] = useState(getApiData());
  // const [portfolio, addPortfolio] = useState([]);
  // state for local data
  const [coins, setCoins] = useState([]);
  const [coinDescription, setDescription] = useState([]);
  const [portfolio, addPortfolio] = useState([]);

  //exists as the api is rate limiting on a free account
  // const russellsWaitHack = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 15000);
  //   });
  // };

  // useEffect(() => {
  //   if (coins.length > 0) return;
  //   console.log("no data found. getting new data");
  //   async function ApiData() {
  //     await russellsWaitHack(); //wait before begin

  //     try {
  //       const res = await axios.get(
  //         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=10&page=&sparkline=false`
  //       );
  //       const now = Math.round(Date.now() / 1000);
  //       const sevenDaysAgo = Math.round(now - 86400);
  //       for (let index = 0; index < res.data.length; index++) {
  //         await russellsWaitHack(); //wait after each api call
  //         console.log("Doing");
  //         const element = res.data[index];
  //         const history = await axios.get(
  //           `https://api.coingecko.com/api/v3/coins/${element.id}/market_chart/range?vs_currency=gbp&from=${sevenDaysAgo}&to=${now}`
  //         );
  //         //each entry will have correct data attached to it
  //         res.data[index].history = history.data;
  //         const description = await axios.get(
  //           `https://api.coingecko.com/api/v3/coins/${element.id}`
  //         );
  //         res.data[index].coinDescription = description.data;
  //       }
  //       console.log(res.data);
  //       setCoins(res.data);
  //       setApiData(res.data);
  //       setDescription(res.data);
  //     } catch (error) {
  //       console.log("Error", error);
  //     }
  //   }
  //   getApiData();
  // }, []);

  // on mount
  useEffect(() => {
    getCoins();
    getCoinsDesc();
  }, []);

  // get coin data into state
  function getCoins() {
    const getCoinData = CoinData;
    setCoins(getCoinData);
  }
  // get description data into state
  function getCoinsDesc() {
    const getCoinDescData = CoinDescData;
    setDescription(getCoinDescData);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
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
