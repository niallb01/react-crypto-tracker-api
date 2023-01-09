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
