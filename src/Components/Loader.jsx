import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';
import React from 'react';

const Spinner = styled.div`
  display: grid;
  place-content: center;
`;

const Loader = () => (
  <Spinner>
    <TailSpin color="#00BFFF" height={80} width={80} />
  </Spinner>
);

export default Loader;

