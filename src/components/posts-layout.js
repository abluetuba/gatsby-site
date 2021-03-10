import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import SEO from "./seo";
import styled from "styled-components";

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;

  .date {
    font-style: italic;
  }
`;

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Article>
        <div>
          <p className="date">{mdx.frontmatter.date}</p>
          <h1 className="title">{mdx.frontmatter.title}</h1>
        </div>
        <MDXProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
