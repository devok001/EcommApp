import React, { useEffect, useState } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []); 

    return (
      <>
       <div>Time: {seconds} seconds</div>
       </>
    );


}

export default Timer;
