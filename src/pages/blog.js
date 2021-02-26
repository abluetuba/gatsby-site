import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function blog({ data }) {
  return (
    <Layout>
      <SEO title="blog" />
      <h1>blog</h1>
      <ul>
        {data.allMdx.edges.map((post) => (
          <li>
            <Link to={post.node.frontmatter.slug}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
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
