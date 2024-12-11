import { useEffect, useRef, useState } from "react";

function UserRefExample() {
  const [name, setName] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
      setCount((prev) => prev + 1);
    });
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h2>Name :{name}</h2>
        <h2>Count :{count}</h2>z
      </div>
    );   // why to use useRef

  // const inputEle = useRef();

  // const handleClick=()=>{
  //   inputEle.current.style.width = "300px";
  //   inputEle.current.focus();
  // }

  // return <>
  //   <input type="text" ref={inputEle}/>
  //   <button onClick={ha} >Click Here</button>
  // </>;
}
export default UserRefExample;
