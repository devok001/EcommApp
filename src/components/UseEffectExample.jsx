import React, { useEffect,useState } from "react";

function UserEffectExample() {
  const [counter, setCounter] = useState("My Ecomerce");

  useEffect(() => {
    document.title = `${counter}`; //call back
  }, [counter] );  // dependancies

  const setTitle = (title)=>{setCounter(title);}

  return (
    <>
    <input type="text" value={counter} onChange={(event)=>{
      setCounter(event.target.value);
    }}/>
      <button
        style={{
          backgroundColor: "GrayText",
          marginLeft: 10,
        }}
      >  Set Title  </button>
    </>
  );
}

export default UserEffectExample;
