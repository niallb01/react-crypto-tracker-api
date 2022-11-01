import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pagecomponents/Home";
import Login from "./pagecomponents/Login";
import Logout from "./pagecomponents/Logout";
import SignUp from "./pagecomponents/SignUp";
import Portfolio from "./pagecomponents/Portfolio";
import ModifyAccount from "./pagecomponents/ModifyAccount";
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
  const [home, setCoins] = useState(getApiData());
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [coinDescription, setDesc] = useState(getApiData());
  const [portfolio, addPortfolio] = useState([]);

  useEffect(() => {
    if (home.length > 0) return;
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
        setDesc(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    getApiData();
  }, []);

  console.log(portfolio);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              home={home}
              portfolio={portfolio}
              addPortfolio={addPortfolio}
            />
          }
        />
        <Route
          path="/coin-description/:coinName"
          element={<CoinDescription coinDescription={coinDescription} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/portfolio"
          element={<Portfolio portfolio={portfolio} />}
        />
        <Route path="/modify-account" element={<ModifyAccount />} />
      </Routes>
    </>
  );
}

export default App;
