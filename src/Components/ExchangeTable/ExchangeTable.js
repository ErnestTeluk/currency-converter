import React from 'react';
import { useSelector } from 'react-redux';

import ChangeBaseCurrency from 'Components/ChangeCurrency/ChangeBaseCurrency';
import {
  Text,
  ExchangeWrapper,
  ExchangeItem,
  ExchangeText,
} from './ExchangeTable.styled';

const ExchangeTable = () => {
  const Rates = useSelector((state) => state.Rates.currency);

  return (
    <>
      {(() => {
        if (Rates.length === 0) {
          return null;
        }
        if (Rates.rates !== undefined) {
          return (
            <>
              <Text>{`The current purchase rate of currencies for 1 ${Rates.base} is`}</Text>
              <ExchangeWrapper>
                {Object.entries(Rates.rates).map((rate) => (
                  <ExchangeItem key={rate[0]}>
                    <ExchangeText isTitle>{rate[0]}</ExchangeText>
                    <ExchangeText>{rate[1].toFixed(4)}</ExchangeText>
                  </ExchangeItem>
                ))}
              </ExchangeWrapper>
              <ChangeBaseCurrency />
            </>
          );
        }
        return <Text>{Rates.error}</Text>;
      })()}
    </>
  );
};

export default ExchangeTable;
