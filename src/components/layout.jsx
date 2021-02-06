import React from 'react';
import '../assets/styles/styles.scss';
import ComingSoon from '../components/ComingSoon';

const Layout = ({ children }) => {
  return (
    <main>
      <ComingSoon />
    </main>
  );
};

export default Layout;
