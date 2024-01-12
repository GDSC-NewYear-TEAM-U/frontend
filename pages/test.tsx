import { useState } from "react";

export default function test() {
  const [input, setInput] = useState("");
  function search() {
    console.log(input);
  }
  function reset() {
    setInput("");
  }
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={search}>검색</button>
      <button onClick={reset}>초기화</button>
    </>
  );
}
