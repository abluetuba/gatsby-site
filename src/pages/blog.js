import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Posts from "../components/posts";

export default function blog({ data }) {
  return (
    <Layout>
      <SEO title="blog" />
      <h1>blog</h1>
      <Posts />
    </Layout>
  );
}

export const blogQuery = graphql`
  query blogQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            excerpt
            slug
            date(formatString: "DD MMM YY")
          }
        }
      }
    }
  }
`;
