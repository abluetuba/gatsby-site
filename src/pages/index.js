import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Hi, I'm Alberto</h1>
      <h2>Blog</h2>
      <ul>
        {data.allMdx.edges.map((post) => (
          <li>
            <Link to={`/${post.node.frontmatter.slug}`}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
