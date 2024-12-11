import { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(getItems());
    console.log("Updating items");
  }, [getItems]); // will called if any any thing change in getItems

  return (
    <>
      {items.map((item) => (
        <div key={item}>
          <h1>{item}</h1>
        </div>
      ))}
    </>
  );
}