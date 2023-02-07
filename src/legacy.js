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

// const coins = useSelector((state) => state.currency.coins); // selects data we want from the store
// // console.log("line 25", coins);
// // pulling in state from store, global tree, small obj created is coins has value + actions - how we manipulate
// // description
// const coinDescription = useSelector(
//   (state) => state.currencyDescription.coinDescription // selects data we want from the store
// );
// console.log("line 30", coinDescription);

//portfolio
// const portfolio = useSelector((state) => state.portfolioItem.portfolio); // selects data we want from the store

//inputs
// const input = useSelector((state) => state.userInput.input); // selects data we want from the store

// const dispatch = useDispatch(); //we create an instance of useDispatch- returns function - dispatches action - sends message to store
//

// coins - The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect(() => {
//   const coins = getApiData();
//   dispatch(setCoins(coins));
// }, []);

// // description
// useEffect(() => {
//   const coinDescription = getApiData();
//   dispatch(setDescription(coinDescription));
// }, []);

//add portfolio item
// useEffect(() => {
//   const addPortfolio = handlePortfolioItem();
//   console.log("line 62", portfolio);
//   dispatch(addPortfolio(portfolio));
// });

//inputs
// useEffect(() => {
//   const input = handleInputs();
//   dispatch(setInput(input));
// });
