import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Main>
        <SEO title="home" />
        <h1>Hi, I'm Alberto!</h1>
        <div className="links">
          <a href="https://twitter.com/tubaalb">twitter</a>
          <a href="https://github.com/abluetuba">github</a>
        </div>

        <p>
          I am a <b>web developer</b> from <b>Italy</b> trying to make this
          internet thing a little bit better, one <b>&lt;tag /&gt; </b> at a
          time.
        </p>
        <h3>blog | digital garden</h3>
        <ul>
          {data.allMdx.edges.map((post) => (
            <li>
              <Link to={`blog/${post.node.frontmatter.slug}`}>
                {post.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Main>
    </Layout>
  );
};

const Main = styled.main`
  .links a {
    margin-right: 0.5rem;
  }
`;

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
