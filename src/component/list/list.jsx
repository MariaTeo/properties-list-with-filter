import React, { useState } from 'react';
import Card from '../card/card';
import * as S from '../card/card.style';
import FilterBathrooms from '../filter-by-bathrooms/filter-by-bathrooms';
import FilterBedrooms from '../filter/filter-by-bedrooms';

const List = ({ list }) => {
  const [filter, setFilter] = useState('0');
  const [filterBathrooms, setFilterBathrooms] = useState('0');

  console.log(list, filter);

  return (
    <div>
      <h1>List of properties</h1>
      <div>
        <h3>
          Please use the filter to search for a property by the number of
          bedrooms:
        </h3>
        <FilterBedrooms filter={filter} setFilter={setFilter} />
      </div>
      <div>
        <h3>
          Please use the filter to search for a property by the number of
          bathrooms:
        </h3>
         <FilterBathrooms
          filterBathrooms={filterBathrooms}
          setFilterBathrooms={setFilterBathrooms}
        /> 
      </div>
      <S.Wrapper>
        {list
          .filter((data) => {
            String(data.bedrooms) === filter;
            String(data.bathrooms) === filterBathrooms;
          })
          .map((data) => {
            return <Card data={data} />;
          })}
      </S.Wrapper>
      {/*<td>{data.property_id}</td>
        <td>{data.postcode}</td>
        <td>{data.searchable_keyword}</td>
        <td>{data.tenure}</td>
        <td>{data.primary_channel}</td>
        <td>{data.contact_telephone}</td>
        <td>{data.lat}</td>
        <td>{data.lng}</td>
        <td>{data.bedrooms}</td>
        <td>{data.bathrooms}</td>
        <td>{data.reception_rooms}</td>
        <td>{data.price}</td> 
        <td>{data.pppw_price}</td>
        <td>{data.available_on}</td>
        <td>{data.tags}</td>
        <td>{data.status}</td>
        <td>{data.short_description}</td>
        <td>{data.display_address}</td>
        <td>{data.town}</td>
        <td>{data.features}</td>
        <td>{data.created_at}</td>
        <td>{data.agency.branch.branch_name}</td>
        <td>{data.agency.agency_name}</td> */}
    </div>
  );
};

export default List;
