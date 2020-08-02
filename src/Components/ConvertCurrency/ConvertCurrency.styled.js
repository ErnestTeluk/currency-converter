import styled from 'styled-components';

export const SectionWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.FontFamily.montserrat};
  font-size: ${({ theme }) => theme.FontSize.xl};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.grey};
  text-align: center;
  margin-bottom: 20px;
`;

export const ConverterWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConverterBox = styled.div`
  width: 345px;
  height: auto;
  padding: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const ConvertItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const ConvertSelect = styled.select`
  width: 25%;
  height: 43px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-right: none;
  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-family: ${({ theme }) => theme.FontFamily.montserrat};
  font-size: ${({ theme }) => theme.FontSize.xs};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.grey};
`;

export const ConvertInput = styled.input`
  width: 75%;
  height: 43px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-family: ${({ theme }) => theme.FontFamily.montserrat};
  font-size: ${({ theme }) => theme.FontSize.m};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.grey};
`;

export const ConvertOutput = styled.div`
  width: 75%;
  height: 43px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-family: ${({ theme }) => theme.FontFamily.montserrat};
  font-size: ${({ theme }) => theme.FontSize.m};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.grey};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.Colors.white};
  background-color: ${({ theme }) => theme.Colors.green};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.FontFamily.montserrat};
  font-size: ${({ theme }) => theme.FontSize.l};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.white};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.Colors.white};
    border: 1px solid ${({ theme }) => theme.Colors.green};
    color: ${({ theme }) => theme.Colors.green};
  }
`;
