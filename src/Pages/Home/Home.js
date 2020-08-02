import React from 'react';

import GetCurrencyRates from 'Hoc/GetCurrencyRates';
import ExchangeTable from 'Components/ExchangeTable/ExchangeTable';
import { SectionWrapper, SectionContainer, Title } from './Home.styled';

const Home = () => (
  <SectionWrapper>
    <SectionContainer>
      <Title>Welcome to the currency converter</Title>
      <ExchangeTable />
    </SectionContainer>
  </SectionWrapper>
);

export default GetCurrencyRates(Home);
