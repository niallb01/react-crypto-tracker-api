// App line 102

// useEffect(() => {
//   if (coins.length > 0) return;
//   console.log("no data found. getting new data");
//   async function getApiData() {
//     try {
//       const res = await axios.get(
//         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=5&page=${page}&sparkline=true`
//       );
//       const now = Math.round(Date.now() / 1000);
//       const sevenDaysAgo = Math.round(now - 86400);
//       for (let index = 0; index < res.data.length; index++) {
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
//   // dispatch(getApiData());
//   getApiData();
// }, []);
