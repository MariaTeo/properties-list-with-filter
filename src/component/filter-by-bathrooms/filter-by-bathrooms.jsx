import { TextField } from '@material-ui/core';
import React from 'react';

const FilterBathrooms = ({ bathroom, setBathroom }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setBathroom(value);
  };

  return (
      <TextField
        min={0}
        max={10}
        id="number-bathrooms"
        label="Number of bathrooms"
        type="number"
        value={bathroom}
        onChange={handleChange}
      />
  );
};

export default FilterBathrooms;
