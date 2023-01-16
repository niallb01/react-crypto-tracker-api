import DOMPurify from "dompurify";

const DescText = (props) => {
  return (
    <>
      <p
        className="description-text"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.descText) }}
      />
      {/* <p className="description-text">{props.descText}</p> */}
    </>
  );
};

export default DescText;
