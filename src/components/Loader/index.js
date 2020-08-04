import React from 'react';
import styled from 'styled-components';
import './Loader.css';

const LoadingWrapper = styled.div`
    border: 5px solid var(--white);
    border-top: 5px solid var(--primary);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

function Loader() {
  return (
    <div className="center">
      <LoadingWrapper className="center" />
      <br />
      <br />
      <h5>Carregando...</h5>
    </div>
  );
}

export default Loader;
