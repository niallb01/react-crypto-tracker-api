const Image = (props) => {
  return (
    <>
      <div style={{ width: "10px" }}>
        <img className="crypto-icon" src={props.image} alt="crypto" />
      </div>
    </>
  );
};

export default Image;
