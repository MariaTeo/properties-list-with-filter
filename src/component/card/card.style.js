import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  padding: 20px;
  margin: 10px;
  border-radius: 15px;
  background-color: #9a6584;
  border: 2px solid grey;
  box-shadow: 10px 10px 15px #6d9192;
`;

export const Body = styled.div`
  height: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
  color: #f7eaea;
`;

export const Icon = styled.div`
  background-color: #f7eaea;
  border-radius: 13px;
  width: 115px;
  padding: 8px;
  margin-left: auto;
  margin-right: 0;
  border: 3px solid #6b8394;
`;

export const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #f7eaea;
  text-shadow: 2px 2px #6d9192;
`;

export const Agency = styled.div`
  color: #f7eaea;
`;

export const Contact = styled.div`
  color: #f7eaea;
`;

export const Property = styled.div`
  margin-top: 10px;
`;

export const ContentCard = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: #f7eaea;
  text-shadow: 2px 2px #6d9192;
`;

export const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: #181714;
`;

export const ContentTitle = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 18px;
  letter-spacing: 3px;
  text-shadow: 2px 2px #6d9192;
  color: #f7eaea;
`;

export const Created = styled.div`
  margin-left: auto;
  margin-right: 0;
  font-size: 13px;
  letter-spacing: 3px;
  text-shadow: 2px 2px #6d9192;
  color: #f7eaea;
`;
