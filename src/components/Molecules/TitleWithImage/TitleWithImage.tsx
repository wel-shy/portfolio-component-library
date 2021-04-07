import React from "react";
import styled from "styled-components";
import { ITheme } from "../../../theme/theme";

import { H1, H2 } from "../../Atoms/Headers";

interface TitleWithImageProps {
  image: JSX.Element;
  titleText: string;
  subtitleText: string;
  children?: any;
}

const TitleWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => (theme as ITheme).sizes.screen.m}px) {
    display: block;
  }
`;

const TextWrapper = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    color: ${({ theme }) => (theme as ITheme).colors.textAccent};
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  margin-right: 2em;

  @media (max-width: ${({ theme }) => (theme as ITheme).sizes.screen.m}px) {
    align-content: center;
    display: flex;
    margin: 0 0 1rem 0;

    img {
      margin: 0 auto;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleWithImage = ({
  image,
  titleText,
  subtitleText,
  children,
}: TitleWithImageProps) => {
  return (
    <TitleWrapper>
      <ImageWrapper>{image}</ImageWrapper>
      <ContentWrapper>
        <TextWrapper>
          <H1>{titleText}</H1>
          <H2>{subtitleText}</H2>
        </TextWrapper>
        <div>{children}</div>
      </ContentWrapper>
    </TitleWrapper>
  );
};
