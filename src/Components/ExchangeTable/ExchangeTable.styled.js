import styled from 'styled-components';

export const Text = styled.p`
  width: 100%;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.FontFamily.montserrat};
  font-size: ${({ theme }) => theme.FontSize.xl};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.grey};
  text-align: center;
`;

export const ExchangeWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${({ theme }) => theme.Mq.bigPhone} {
    justify-content: flex-start;
  }
`;

export const ExchangeItem = styled.div`
  width: 110px;
  height: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const ExchangeText = styled.p`
  width: 100%;
  font-family: ${({ theme }) => theme.FontFamily.montserrat};
  font-size: ${({ theme }) => theme.FontSize.l};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme, isTitle }) =>
    isTitle ? theme.Colors.white : theme.Colors.grey};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.Colors.grey};
  background-color: ${({ theme, isTitle }) =>
    isTitle ? theme.Colors.green : 'none'};
`;
