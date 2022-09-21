// Must start with a "use" word for it to be a hook.

// This is more so making a reusable function. Like if you had a counter for example that you would 
// want to reuse accross the website. Maybe a countdown timer on the home page for urgency, 
// and then the same one  on the checkout page to get the customer to checkout. Its just reusing the 
// function in other location. D.R.Y.

import React, { useState, useEffect } from "react";

// We can pass the hook a custom input to change it based on where we need to use the hook in the app
// Here, we are setting the input variable as true. 
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
            setCounter((prevCounter) => prevCounter + 1);
      } else {
            setCounter((prevCounter) => prevCounter - 1)
      }
    }, 1000);

    return () => clearInterval(interval);
    // Not sure why we want to set forwards as a dependancy.....
  }, [forwards]);

  // This is where we can return anything we want from our custom hook
  return counter;
};
export default useCounter;
