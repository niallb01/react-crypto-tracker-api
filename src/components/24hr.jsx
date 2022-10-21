const TwentyFourHour = (props) => {
  return (
    <>
      {props.twentyFourHour < 0 ? (
        <p className="twenty-four-hours-red">-{props.twentyFourHour}%</p>
      ) : (
        <p className="twenty-four-hours-green">{props.twentyFourHour}%</p>
      )}
    </>
  );
};

export default TwentyFourHour;
