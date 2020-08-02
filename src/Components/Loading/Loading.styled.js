import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.Colors.white};
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.p`
  width: 100%;
  height: auto;
  font-family: ${({ theme }) => theme.FontFamily.century};
  font-size: ${({ theme }) => theme.FontSize.xxl};
  font-weight: ${({ theme }) => theme.FontWeight.regular};
  color: ${({ theme }) => theme.Colors.black};
  text-align: center;
`;
