import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

export default function projects({ data }) {
  return (
    <Layout>
      <SEO title="projects" />
      <h1>projects</h1>
      <Card
        title="unoXdue"
        link="https://unoxdue.netlify.app"
        image={data.file.childImageSharp.fixed}
      />
    </Layout>
  );
}

export const imageQuery = graphql`
  query ImageQuery {
    file(relativePath: { eq: "unoxdue.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
