import React, { Component } from 'react';
import './TodoFilter.scss';

const TodoFilter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Filter by Name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default TodoFilter;
