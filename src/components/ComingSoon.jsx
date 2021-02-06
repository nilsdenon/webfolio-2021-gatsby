import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import LogoImage from '../assets/images/dp-logo.png';
import { fontStack, colors } from '../theme/webfolio';

const StyledComingSoon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  /* font-family: ${fontStack.default}; */
  color: ${colors.grays.darkGray};
`;

const Box = styled.div`
  display: flex;
`;

const Paragraph = styled.p`
  /* font-family: ${fontStack.default}; */
  color: ${colors.grays.darkGray};
`;

const Top = styled(Paragraph)`
  display: flex;
  margin: -5px 0 0 10px;
`;

const Bottom = styled(Paragraph)`
  margin: 20px 0 0;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Span)`
  font-weight: 700;
  position: relative;
  &::after {
    content: '';
    background: ${colors.grays.darkGray};
    display: inline-block;

    width: 1px;
    height: 30px;
    margin: 0 10px;
  }
`;
const Slogan = styled(Span)`
  font-weight: 300;
`;

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
    <StyledComingSoon>
      <Box>
        <img
          width="34"
          height="31"
          src={LogoImage}
          alt={data.site.siteMetadata.title}
        />
        <Top>
          <Title>{data.site.siteMetadata.title}</Title>
          <Slogan>{data.site.siteMetadata.slogan}</Slogan>
        </Top>
      </Box>

      <Bottom>In construction. Coming soon.</Bottom>
    </StyledComingSoon>
  );
};

const ComingSoon = () => <Logo />;

export default ComingSoon;
