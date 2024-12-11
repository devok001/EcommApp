import { useState, createContext } from "react";
import "./App.css";
import Timer from "./components/Timer.jsx";
import UserStateExample from "./components/UseStateExample.jsx";
import UserEffectExample from "./components/UseEffectExample.jsx";
import UseContextExample from "./components/UseContextExample.jsx";
import UserRefExample from "./components/UseRefExample.jsx";
import UseCallBackExample from "./components/UseCallBackExample.jsx";
import ErrorComponent from "./components/ErrorBoundary/ErrorComponant.jsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import ContactForm from './components/ContactForm.jsx'

export const LoginContext = createContext();

function App() {

  // return (
  //   <>
  //     <LoginContext.Provider value={true}>
  //       <div>
  //         <UseContextExample />
  //       </div>
  //     </LoginContext.Provider>
  //   </>
  // );

  // return (
  //   <>
  //   <UserStateExample/>
  //   </>);

  // return (
  //   <>
  //   <UserEffectExample/>
  //   </>
  // );


  // return (
  //   <>
  //   <UserStateExample/>
  //   </>);

  // return (
  //   <>
  //   <UseCallBackExample />
  //   </>);
    



  // return (
  //   <>
  //   <h1>Voter eligibility: </h1>
  //       <ErrorComponent />
  //   </>
  // );  if we dont use error boundary

  return (
    <>
    <h1>Voter eligibility: </h1>

      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>


    </>
  ); // Error boundary exampel

  // return (
  //   <>
  //   <ContactForm/>
  //   </>
  // );


  return(<>
  <UserRefExample/></>)
}

export default App;
