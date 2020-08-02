import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FetchRates, FetchConvertRates } from 'State/Actions/Rates';

export default (ChildComponent) => {
  const ComposeComponent = () => {
    const dispatch = useDispatch();

    function GetCurrencyRates() {
      dispatch(FetchRates({ base: 'PLN' }));
      dispatch(FetchConvertRates({ base: 'PLN', symbols: 'EUR' }));
    }

    useEffect(() => {
      GetCurrencyRates();
    });

    return <ChildComponent />;
  };

  return ComposeComponent;
};
