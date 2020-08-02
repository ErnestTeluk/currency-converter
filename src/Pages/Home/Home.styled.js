import styled from 'styled-components';

export const SectionWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const SectionContainer = styled.div`
  ${({ theme }) => theme.Container};
`;

export const Title = styled.h1`
  margin: 100px 0 50px 0;
  width: 100%;
  font-family: ${({ theme }) => theme.FontFamily.montserrat};
  font-size: ${({ theme }) => theme.FontSize.xxl};
  font-weight: ${({ theme }) => theme.FontWeight.bold};
  color: ${({ theme }) => theme.Colors.grey};
  text-align: center;
`;
