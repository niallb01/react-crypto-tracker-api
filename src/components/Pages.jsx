import { useState } from "react";

const Pages = (props) => {
  const [page, setPage] = useState(1);
  return (
    <>
      <button
        onClick={() => {
          setPage(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setPage(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setPage(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setPage(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          setPage(5);
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          setPage(6);
        }}
      >
        6
      </button>
    </>
  );
};

export default Pages;
