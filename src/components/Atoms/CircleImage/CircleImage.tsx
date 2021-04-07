import React from "react";
import styled from "styled-components";

const Image = styled.img<CircleImageProps>`
  border-radius: 100%;
  max-height: ${({ width }) => width};
  max-width: ${({ width }) => width};
  object-fit: cover;
`;

interface CircleImageProps {
  src: string;
  alt: string;
  width: number;
}

export const CircleImage = ({ src, alt, width }: CircleImageProps) => {
  return <Image src={src} alt={alt} width={width} height={width} />;
};
