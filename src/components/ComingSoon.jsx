import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LogoImage from '../assets/images/dp-logo.png';

import '../assets/styles/coming-soon.scss';

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          slogan
        }
      }
    }
  `);

  return (
    <div className="coming-soon">
      <div className="box">
        <img
          width="34"
          height="31"
          src={LogoImage}
          alt={data.site.siteMetadata.title}
        />
        <p className="logo">
          <span className="title">{data.site.siteMetadata.title}</span>
          <span className="slogan">{data.site.siteMetadata.slogan}</span>
        </p>
      </div>

      <p className="message">In construction. Coming soon.</p>
    </div>
  );
};

const ComingSoon = () => <Logo />;

export default ComingSoon;
