import React from 'react';
import { useSelector } from 'react-redux';

import { LoadingWrapper, TextWrapper, TextBox } from './Loading.styled';

const Loading = () => {
  const isLoading = useSelector((state) => state.Loading.isLoading);

  return (
    <>
      {(() => {
        if (isLoading === true) {
          return (
            <LoadingWrapper>
              <TextWrapper>
                <TextBox>Loading...</TextBox>
              </TextWrapper>
            </LoadingWrapper>
          );
        }
        return null;
      })()}
    </>
  );
};

export default Loading;
