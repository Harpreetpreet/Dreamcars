import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

const Section = styled.div`
  background-image: url(/images/hero-bg.jpg);
  background-position: top;
  height: 40rem;
  h2 {
    margin-top: 12rem;
    font-family: initial;
  }
  h1 {
    font-family: initial;
  }
  h4 {
    position: relative;
    font-size: 13px;
    color: #323232;
    font-weight: 700;
    display: inline-block;
    padding: 6px 14px;
    background: #ffffff;
    border-radius: 2px;
    margin-top: 2rem;
  }
  .text-price {
    font-size: 50px;
    color: #ffffff;
    font-weight: 700;
    line-height: 45px;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Section className="section">
          <div>
            <h2 className="is-size-4 has-text-white has-text-weight-bold column is-3 is-offset-1 is-size-5-mobile">
              FIND YOUR DREAM CAR
            </h2>
            <h1 className="is-size-1 has-text-white has-text-weight-semibold column is-5 is-offset-1 is-size-3-mobile">
              Porsche Cayenne S
            </h1>
            <h4 className="column is-1 is-offset-1">Model 2019</h4>
            <h2 className="text-price column is-1 is-offset-2">
              $399<span>/Month</span>
            </h2>
          </div>
        </Section>
        <Banner />
      </Layout>
    );
  }
}
