import { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import "./App.css";
import Pages from "./components/Pages";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Desc from "./components/Desc";

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
  const [search, setSearch] = useState("");
  const [desc, setDesc] = useState(getApiData());

  useEffect(() => {
    if (coins.length > 0) return;
    console.log("no data found. getting new data");
    async function getApiData() {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=2&page=${page}&sparkline=false`
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

          res.data[index].desc = description.data;
        }
        console.log(res.data);
        setCoins(res.data);
        setApiData(res.data);
        setDesc(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    getApiData();
  }, []);

  //need event listener and function
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  // const filteredCoins = coins.filter((coins) => coins.name.toLowerCase());
  console.log(coins);

  return (
    <>
      <Navbar />
      <h2>Search Currency</h2>
      <input
        type="text"
        className="search-input"
        onKeyUp={handleSearchInput}
      ></input>
      <Coins coins={coins} />
      <Pages pages={page} />
      <Desc desc={desc} />

      <Routes>
        <Route path="coin-description" element={<Desc />} />
      </Routes>
    </>
  );
}

export default App;
