import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Posts from "../components/posts";

const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <SEO title="tuba's site" />
        <h1>Hi, I'm Alberto!</h1>

        <p>I am a computer engineering student from Italy.</p>
        <h3>posts</h3>
        <Posts />
      </Main>
    </Layout>
  );
};

const Main = styled.main`
  .links a {
    margin-right: 0.5rem;
  }
  h3 {
    margin-bottom: 0;
  }
  ul {
    margin-top: 0.5rem;
  }
`;

export default IndexPage;
