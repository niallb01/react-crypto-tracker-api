import DOMPurify from "dompurify";

const DescText = (props) => {
  return (
    <>
      <p
        className="description-text"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.descText) }}
      />
    </>
  );
};

export default DescText;
