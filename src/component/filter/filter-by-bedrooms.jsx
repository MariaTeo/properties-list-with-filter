import React from 'react';

const FilterBedrooms = ({ filter
  , setFilter }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <div>
        <input
          size="3"
          type="number"
          min="0"
          max="10"
          value={filter}
          onChange={handleChange}
        />
    </div>
  );
};

export default FilterBedrooms;
