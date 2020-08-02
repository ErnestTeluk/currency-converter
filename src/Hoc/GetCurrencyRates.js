import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FetchRates } from 'State/Actions/Rates';

export default (ChildComponent) => {
  const ComposeComponent = () => {
    const dispatch = useDispatch();

    function GetCurrencyRates() {
      dispatch(FetchRates({ base: 'PLN' }));
    }

    useEffect(() => {
      GetCurrencyRates();
    });

    return <ChildComponent />;
  };

  return ComposeComponent;
};
