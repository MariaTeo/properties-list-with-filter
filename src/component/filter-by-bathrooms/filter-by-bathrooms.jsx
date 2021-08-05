import React from 'react';

const FilterBathrooms = ({ filterBathrooms, setFilterBathrooms }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setFilterBathrooms(value);
  };

  return (
    <div>
      <input
        size="3"
        type="number"
        min="0"
        max="10"
        value={filterBathrooms}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterBathrooms;
