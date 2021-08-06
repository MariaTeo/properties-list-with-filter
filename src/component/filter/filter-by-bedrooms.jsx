import { TextField } from '@material-ui/core';
import React from 'react';

const FilterBedrooms = ({ bedroom, setBedroom }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setBedroom(value);
  };

  return (
    <div>
      <TextField
        min={0}
        max={10}
        id="number-bedrooms"
        label="Number of bedrooms"
        type="number"
        value={bedroom}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterBedrooms;
