import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FetchRates } from 'State/Actions/Rates';
import { SelectWrapper, Text, StyledSelect } from './ChangeBaseCurrency.styled';

const ChangeBaseCurrency = () => {
  const dispatch = useDispatch();
  const Rates = useSelector((state) => state.Rates.currency);

  const handleChange = (e) => {
    dispatch(FetchRates({ base: e.target.value }));
  };

  return (
    <>
      {(() => {
        if (Rates.rates !== undefined) {
          return (
            <SelectWrapper>
              <Text>Change Base Currency:</Text>
              <StyledSelect onChange={handleChange} defaultValue="PLN">
                {Object.keys(Rates.rates).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </StyledSelect>
            </SelectWrapper>
          );
        }
        return null;
      })()}
    </>
  );
};

export default ChangeBaseCurrency;
