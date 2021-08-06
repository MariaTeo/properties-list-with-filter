import React, { useState } from 'react';
import Card from '../card/card';
import * as S from '../card/card.style';
import * as L from './list.style';
import FilterBathrooms from '../filter-by-bathrooms/filter-by-bathrooms';
import FilterBedrooms from '../filter/filter-by-bedrooms';

const List = ({ list }) => {
  const [bedroom, setBedroom] = useState('0');
  const [bathroom, setBathroom] = useState('0');

  return (
    <div>
      <h1>List of properties:</h1>
      <h3>
        Please use the filter to search for a property by the number of bedrooms
        and bathrooms:
      </h3>
      <L.Filters>
        <FilterBedrooms bedroom={bedroom} setBedroom={setBedroom} />
        <FilterBathrooms bathroom={bathroom} setBathroom={setBathroom} />
      </L.Filters>
      <S.Wrapper>
        {list
          .filter(
            (data) =>
              String(data.bedrooms) === bedroom ||
              String(data.bathrooms) === bathroom
          )
          .map((data) => {
            return <Card data={data} key={data.property_id} />;
          })}
      </S.Wrapper>
    </div>
  );
};

export default List;
