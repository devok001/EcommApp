import { useContext } from "react";
import { LoginContext } from "../App";

function UseContextExample() {
  const loginContext = useContext(LoginContext);
  console.log(loginContext);
  const result = loginContext ? "succesful":"unsuccessful";
  return (
    <>
     <h1>{result}</h1>
    </>
  );
}
export default UseContextExample;