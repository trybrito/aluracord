import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Home() {
  return <Title>Hello, World!</Title>;
}
