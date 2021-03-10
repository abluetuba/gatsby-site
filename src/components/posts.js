import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";

const Posts = styled.div`
  div {
    padding: 0.5rem;
  }

  ul {
    list-style: square;
    li {
      padding-bottom: 0.5rem;
    }
  }
  .date {
    color: gray;
    font-style: italic;
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MM.DD.YY")
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Posts>
      <ul>
        {data.allMdx.edges.map((post) => (
          <li>
            <Link to={`/blog/${post.node.frontmatter.slug}`}>
              {post.node.frontmatter.title}
            </Link>
            <span className="date"> {post.node.frontmatter.date}</span>
          </li>
        ))}
      </ul>
    </Posts>
  );
};
