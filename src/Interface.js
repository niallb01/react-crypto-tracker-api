import React from "react";
import Coins from "./components/Coins";
import Desc from "./components/Desc";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import getApiData from "./App";

const Interface = (props) => {
  const [coins, setCoins] = useState(getApiData());
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [desc, setDesc] = useState(getApiData());
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin-description" element={<Desc desc={desc} />} />
      </Routes> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin-description" element={<Desc desc={desc} />} />
      </Routes>
    </>
  );
};

export default Interface;
