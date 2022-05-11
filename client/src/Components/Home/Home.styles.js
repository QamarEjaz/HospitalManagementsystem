import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: 'flex';

  padding-top: 20px;
  margin-top: 0;
  margin-bottom: 0px;
  padding-bottom: 30px;
  background-color: #242526;
  color: 'white';
`;
const HomeItem = styled.div`
  flex: 1;
`;
const HomeBody = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
const HomeCard = styled.div`
  border-right: 5px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: '1';
`;
export { HomeContainer, HomeItem, HomeBody, HomeCard };
