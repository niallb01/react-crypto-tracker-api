import Name from "../components/Name";
import Image from "../inputcomponents/Image";

const Placeholder = (props) => {
  return (
    <>
      <Image image={props.image} />
      <Name name={props.name} />
    </>
  );
};

export default Placeholder;
