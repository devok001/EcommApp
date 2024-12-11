import React from 'react';

function ErrorComponent() {
  const age=22;
  if (age>=18){
    return <h1>Congratulations You are eligible for voting</h1>
  }
  throw new Error("You are not eligible for Voting!");
}

export default ErrorComponent;