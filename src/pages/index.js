import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <h1>👋️ Hi, I'm Alberto!</h1>
        <p>
          I'm a <b>web developer</b> from <b>Italy</b> who's trying to make this
          internet thing a little bit better, one <b>&lt;tag /&gt; </b> at a
          time.
        </p>
        <h3>📑️ Blog / 🌱️ Digital Garden</h3>
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
    </Layout>
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
