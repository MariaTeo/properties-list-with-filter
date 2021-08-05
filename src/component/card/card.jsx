import React, { useState } from 'react';
import SeeMore from '../see-more/see-more';
import * as S from './card.style';

const Card = ({ data }) => {
  const {
    property_id,
    property_type,
    available_on,
    branch_name,
    agency_name,
    created_at,
    short_description,
    contact_telephone,
    status,
    price,
    pppw_price,
    bedrooms,
    bathrooms,
    agency,
  } = data;

  return (
    <S.Card>
      <header>
        <S.Icon>ID: {property_id}</S.Icon>
        <S.MainTitle>
          <S.Property>
            {status} : {property_type}
            <h4>Available from: {available_on}</h4>
          </S.Property>
        </S.MainTitle>
        <h5>Branch: {agency.branch.branch_name}</h5>
        <h5>Agency name: {agency.agency_name}</h5>
      </header>
      <S.ContentCard>
        <S.ContentTitle>Main info:</S.ContentTitle>
        <p>Price: {price}</p>
        <p>Price per week: £{pppw_price}</p>
        <p>Number of bedrooms: {bedrooms}</p>
        <p>Number of bathrooms: {bathrooms}</p>
      </S.ContentCard>
      <S.Description>
        <S.ContentTitle>See description:</S.ContentTitle>
        <SeeMore data={data} show={show} />
      </S.Description>
      <footer>
        <h4>Contact us: {contact_telephone}</h4>
        <S.Created>Add created on: {created_at}</S.Created>
      </footer>
    </S.Card>
  );
};

export default Card;
