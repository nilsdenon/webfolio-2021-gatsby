import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { mainStyles } from '../theme/webfolio';

const GlobalStyles = createGlobalStyle`
  ${mainStyles}
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />

      <Main>{children}</Main>
    </>
  );
};

export default Layout;
