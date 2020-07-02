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
          </div>
        </Section>
        <Banner />
      </Layout>
    );
  }
}
