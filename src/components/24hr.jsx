const TwentyFourHour = (props) => {
  return (
    <>
      {TwentyFourHour < "0" ? (
        <p className="twenty-four-hours-red">{props.twentyfourhour}%</p>
      ) : (
        <p className="twenty-four-hours-green">{props.twentyfourhour}%</p>
      )}
    </>
  );
};

export default TwentyFourHour;
