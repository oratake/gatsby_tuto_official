import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <main>
      <title>home page</title>
      <Layout pageTitle="Home Page">
        <p>gatsby test site</p>
      </Layout>
    </main>
  );
};

export default IndexPage;
