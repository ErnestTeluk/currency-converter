import styled from 'styled-components';

export const SelectWrapper = styled.div`
  width: 324px;
  height: auto;
  display: flex;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.Colors.green};
  border-radius: 10px;

  ${({ theme }) => theme.Mq.bigPhone} {
    margin: 20px 0;
  }
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.FontFamily.montserrat};
  font-size: ${({ theme }) => theme.FontSize.l};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.white};
  margin-right: 10px;
  padding: 10px;
`;

export const StyledSelect = styled.select`
  width: 60px;
  height: 43px;
  padding: 10 0px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.Colors.green};
  font-family: ${({ theme }) => theme.FontFamily.montserrat};
  font-size: ${({ theme }) => theme.FontSize.xs};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
`;
