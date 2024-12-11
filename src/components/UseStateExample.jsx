import { useState } from "react";

function UserStateExample() {
  
  const [counter, setCounter] = useState(0);

  const increaseCounter = (event) => {
    setCounter(counter + 1);
  };


  const decreaseCounter = (event) => {
    if (counter == 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };


  return (
    <>
      <div
        style={{
          margin: 10,
          display: "flexbox",
          position: "relative",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <h1>Counter :{counter}</h1>
        <button
          style={{
            backgroundColor: "GrayText",
          }}
          onClick={increaseCounter}
        >Increase </button>
        <button
          style={{
            backgroundColor: "GrayText",
            marginLeft: 10,
          }}
          onClick={decreaseCounter}
        > Decrease </button>
      </div>
    </>
  );
}

export default UserStateExample;
