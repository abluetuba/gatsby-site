import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

export default function projects({ data }) {
  return (
    <Layout>
      <SEO title="tuba's projects" />
      <h1>projects</h1>
      <Card
        title="unoXdue"
        links={[
          "https://unoxdue.netlify.app",
          "https://github.com/abluetuba/unoxdue",
        ]}
        description="PWA that displays the results and the table of the Serie A (Italian football league)."
        image={data.unoxdue.childImageSharp.gatsbyImageData}
      />
    </Layout>
  );
}

export const imageQuery = graphql`
  query ImageQuery {
    unoxdue: file(relativePath: { eq: "unoxdue.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 300)
      }
    }
  }
`;
