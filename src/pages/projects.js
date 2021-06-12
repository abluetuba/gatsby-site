import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

import styled from "styled-components";

export default function projects({ data }) {
  return (
    <Layout>
      <SEO title="tuba's projects" />
      <h1>projects</h1>
      <Main>
        <Card
          title="unoXdue"
          links={[
            "https://unoxdue.netlify.app",
            "https://github.com/abluetuba/unoxdue",
          ]}
          description="PWA that displays the results and the table of the Serie A (Italian football league)."
          image={data.unoxdue.childImageSharp.gatsbyImageData}
        />
        <Card
          title="unoXdue - flutter"
          links={[
            "https://unoxdue-flutter.netlify.app",
            "https://github.com/abluetuba/unoxdue-flutter",
          ]}
          description="Flutter version of unoXdue"
          image={data.scores.childImageSharp.gatsbyImageData}
        />
      </Main>
    </Layout>
  );
}
const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const imageQuery = graphql`
  query ImageQuery {
    unoxdue: file(relativePath: { eq: "unoxdue.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 300)
      }
    }
    scores: file(relativePath: { eq: "scores.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 400)
      }
    }
  }
`;
