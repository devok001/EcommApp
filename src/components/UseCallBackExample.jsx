import { useState, useCallback, useEffect } from "react";
import List from "./List";
function UseCallBackExample({}) {
  const [num, setNum] = useState(1);
  const [dark, setDark] = useState(false);

  // const getItems = () => {
  //   if (!isNaN(num)) {
  //     return [num, num + 1, num + 2];
  //   }
  //   return [0, 1, 2];
  // }; // if we dont use useCallBack

  const getItems = useCallback(()=> {
    if (!isNaN(num)) {
       return [num, num + 1, num + 2];
     }
     return [0, 1, 2];
   },[num]);  // will return memoise function

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />

      <button
        onClick={() => {
          setDark((preDark) => !preDark);
        }}
      >
        Toggle Theme
      </button>
      <List getItems={getItems}></List>
    </div>
  );
}

export default UseCallBackExample;
