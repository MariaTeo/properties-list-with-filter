import React from 'react';
import * as S from '../card/card.style';

const SeeMore = ({ data }) => {
  return (
    <S.Body>
      <p>{data.features}</p>
      <p>{data.short_description}</p>
    </S.Body>
  );
};

export default SeeMore;
