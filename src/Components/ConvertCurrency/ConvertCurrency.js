import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  SetBaseValue,
  SetSymbolsValue,
  FetchConvertRates,
} from 'State/Actions/Rates';
import {
  SectionWrapper,
  Text,
  ConverterWrapper,
  ConverterBox,
  ConvertItem,
  ConvertSelect,
  ConvertInput,
  ConvertOutput,
  ButtonWrapper,
  StyledButton,
} from './ConvertCurrency.styled';

const ConvertCurrency = () => {
  const dispatch = useDispatch();
  const Rates = useSelector((state) => state.Rates.currency);
  const base = useSelector((state) => state.Rates.baseValue);
  const symbols = useSelector((state) => state.Rates.symbolsValue);
  const convertRates = useSelector((state) => state.Rates.convert);

  const [inputValue, setInputValue] = useState(0);
  const [convertedNumber, setConvertedNumber] = useState();

  const BaseValue = (e) => {
    dispatch(SetBaseValue(e.target.value));
    dispatch(FetchConvertRates({ base: e.target.value, symbols }));
  };

  const SymbolsValue = (e) => {
    dispatch(SetSymbolsValue(e.target.value));
    dispatch(FetchConvertRates({ base, symbols: e.target.value }));
  };

  const ClickHandler = () => {
    const value = Number(inputValue) * Object.values(convertRates.rates)[0];
    if (typeof value === 'number') {
      setConvertedNumber(value.toFixed(2));
    }
    if (isNaN(value)) {
      setConvertedNumber(`please enter a number`);
    }
    return null;
  };

  return (
    <>
      {Rates.rates !== undefined ? (
        <SectionWrapper>
          <Text>
            Enter the data and check how much you will receive in another
            currency
          </Text>
          <ConverterWrapper>
            <ConverterBox>
              <ConvertItem>
                <ConvertSelect defaultValue="PLN" onChange={BaseValue}>
                  {Object.keys(Rates.rates).map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </ConvertSelect>
                <ConvertInput
                  id="currency"
                  name="currency"
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </ConvertItem>
              <ConvertItem>
                <ConvertSelect defaultValue="EUR" onChange={SymbolsValue}>
                  {Object.keys(Rates.rates).map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </ConvertSelect>
                <ConvertOutput>{convertedNumber}</ConvertOutput>
              </ConvertItem>
              <ButtonWrapper>
                <StyledButton onClick={ClickHandler}>
                  Change Currency
                </StyledButton>
              </ButtonWrapper>
            </ConverterBox>
          </ConverterWrapper>
        </SectionWrapper>
      ) : null}
    </>
  );
};

export default ConvertCurrency;
