//portfolio line 121

<Coin
  id={coin.id}
  rank={coin.market_cap_rank}
  image={coin.image}
  name={coin.name}
  symbol={coin.symbol.toUpperCase()}
  marketCap={coin.market_cap.toLocaleString()}
  coinPrice={coin.current_price.toLocaleString()}
  twentyFourHour={coin.price_change_percentage_24h.toFixed(1)}
  volume={coin.total_volume.toLocaleString()}
  fdv={coin.fully_diluted_valuation.toLocaleString()}
/>;


{editModal && (
  <div className="modal">
    <div onClick={toggleEditModal} className="overlay"></div>
    <div className="modal-content">
      <h4 className="modal-header">Edit Coin</h4>
      
    </div>
    
  </div>

  //home line 20

    // const handlePortfolioItem = (name) => {
  //   const portfolioCopy = [...props.portfolio];
  //   //where item is in array - is it in array?
  //   const indexOf = portfolioCopy.indexOf(name);
  //   console.log(name, indexOf);
  //   if (indexOf > -1) {
  //     portfolioCopy.splice(indexOf, 1);
  //     props.addPortfolio(portfolioCopy);
  //     return;
  //   }
  //   portfolioCopy.push(name);
  //   props.addPortfolio(portfolioCopy);
  //   console.log("hi, from portfoliocopy", props.portfolio);
  //   toast.success("Coin Added To Portfolio", {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: 1000,
  //   });
  // };