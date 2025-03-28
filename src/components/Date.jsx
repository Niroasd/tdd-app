import React from 'react';

const today = new Date().toLocaleString();

const CurrentDate = () => {
  return (
    <h1>Today is: {today}</h1>
  );
}

export default CurrentDate;
