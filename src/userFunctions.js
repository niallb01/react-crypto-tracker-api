import { useState, useEffect } from "react";

const useForm = () => {
  const [input, setInput] = useState({
    loginPassword: "",
    loginEmail: "",
    modifyName: "",
    modifyPassword: "",
    modifyEmail: "",
  });

  const [errors, setErrors] = useState({});

  //target name of each input and spread state
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  return { handleInputs, input };
};

export default useForm;

//controlled component is always stateful
// const handleInputs = (e) => {
//   // console.log(e.target.value, e.target.name);
//   //put what user has typed into the state
//   //name of event is key - use value as value
//   // setInput({ [e.target.name]: e.target.value });
//   //add data to state
//   if (e.target.name === "loginEmail") {
//     setInput({
//       loginEmail: e.target.value,
//       loginPassword: input.loginPassword,
//     });
//   }
//   if (e.target.name === "loginPassword") {
//     setInput({
//       loginEmail: input.loginEmail,
//       loginPassword: e.target.value,
//     });
//   }
//   //empty search input
//   // setInput("");
//   console.log(input);
// };
