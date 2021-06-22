import * as React from "react";
import { Link } from 'gatsby';

const IndexPage = () => {
  return(
    <main>
      <title>home page</title>
      <h1>Gatsby site</h1>
      <Link to="/about">About</Link>
      <p>gatsby test site</p>
    </main>
  );
};

export default IndexPage;
