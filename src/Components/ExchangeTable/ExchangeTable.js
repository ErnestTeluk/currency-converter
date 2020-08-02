import React from 'react';
import { useSelector } from 'react-redux';

const ExchangeTable = () => {
  const Rates = useSelector((state) => state.Rates.currency);

  return (
    <div>
      {(() => {
        if (Rates.length === 0) {
          return <div>ładowanie</div>;
        }
        return (
          <>
            {Object.entries(Rates.rates).map((rate) => (
              <div key={rate[0]}>
                <div>{rate[0]}</div>
                <div>{rate[1].toFixed(2)}</div>
              </div>
            ))}
          </>
        );
      })()}
    </div>
  );
};

export default ExchangeTable;
