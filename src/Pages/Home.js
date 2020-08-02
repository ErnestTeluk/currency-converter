import React from 'react';

import GetCurrencyRates from 'Hoc/GetCurrencyRates';
import ExchangeTable from 'Components/ExchangeTable/ExchangeTable';

const Home = () => (
  <div>
    <ExchangeTable />
  </div>
);

export default GetCurrencyRates(Home);
