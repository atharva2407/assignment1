'use client'

import React, { useState } from "react";

const Settergetter = () => {
  const [isAdded, setIsAdded] = useState(2);

  const handleClick = () => {
    setIsAdded(isAdded + 1);
  };

  return (
    <div>
      <p>We can increase the value: {isAdded}</p>
      <button onClick={handleClick}>Click to add</button>
    </div>
  );
};

export default Settergetter;
