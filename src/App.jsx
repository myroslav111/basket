import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import React from 'react';

// const colorPickerOptions = [
//   { label: 'red', color: 'red' },
//   { label: 'black', color: 'black' },
//   { label: 'white', color: 'white' },
//   { label: 'blue', color: 'blue' },
//   { label: 'gree', color: 'gree' },
//   { label: 'orange', color: 'orange' },
// ];

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>component state</h1>
      {/* <Counter intialValue={10} /> */}
      <Dropdown />
    </div>
  );
};

// return (

// );
