import React from 'react';

import Layout from '../components/layout';
import ComingSoon from '../components/ComingSoon';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ComingSoon />
  </Layout>
);

export default IndexPage;
