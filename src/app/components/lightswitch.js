'use client';
import React, { useState } from "react";

function LightSwitch() {
  const [isOn, setIsOn] = useState("");

  const handleToggle = () => {
    setIsOn(isOn === "ON" ? "OFF" : "ON");
  };

  return (
    <div>
      <p>the light is {isOn}</p>
      <button onClick={handleToggle}>Toggle button</button>
    </div>
  );
}

export default LightSwitch;
