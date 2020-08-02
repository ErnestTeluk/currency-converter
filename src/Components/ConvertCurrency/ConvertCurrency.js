import React from 'react';
import { useSelector } from 'react-redux';

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
  const Rates = useSelector((state) => state.Rates.currency);

  return (
    <>
      {(() => {
        if (Rates.rates !== undefined) {
          return (
            <SectionWrapper>
              <Text>
                Enter the data and check how much you will receive in another
                currency
              </Text>
              <ConverterWrapper>
                <ConverterBox>
                  <ConvertItem>
                    <ConvertSelect defaultValue="PLN">
                      {Object.keys(Rates.rates).map((key) => (
                        <option key={key} value={key}>
                          {key}
                        </option>
                      ))}
                    </ConvertSelect>
                    <ConvertInput id="currency" name="currency" />
                  </ConvertItem>
                  <ConvertItem>
                    <ConvertSelect defaultValue="EUR">
                      {Object.keys(Rates.rates).map((key) => (
                        <option key={key} value={key}>
                          {key}
                        </option>
                      ))}
                    </ConvertSelect>
                    <ConvertOutput />
                  </ConvertItem>
                  <ButtonWrapper>
                    <StyledButton>Change Currency</StyledButton>
                  </ButtonWrapper>
                </ConverterBox>
              </ConverterWrapper>
            </SectionWrapper>
          );
        }
        return null;
      })()}
    </>
  );
};

export default ConvertCurrency;
