import React from 'react';

const Greeting = ({name , age}) => {
  return (
    <>
      <p>Hello, {name} , what is your {age}!</p>
      <button className="bg-sky-500 hover:bg-sky-700">Save changes</button>
    </>
  );
};

export default Greeting;