import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import Desc from "./components/Desc";
import Login from "./pagecomponents/Login";
import Logout from "./pagecomponents/Logout";
import SignUp from "./pagecomponents/SignUp";
import ModifyAccount from "./pagecomponents/ModifyAccount";

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
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin-description" element={<Desc desc={desc} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/modify-account" element={<ModifyAccount />} />
      </Routes>
    </>
  );
}

export default App;
