import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";

const PostsDiv = styled.div`
  div {
    padding: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding-bottom: 0.5rem;
    }
  }
  .date {
    color: gray;
    font-style: italic;
  }
  .excerpt {
    margin-top: 0.5rem;
  }
`;

const Posts = ({ excertps }) => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MM.DD.YY")
              slug
              excerpt
            }
          }
        }
      }
    }
  `);

  return (
    <PostsDiv>
      <ul>
        {data.allMdx.edges.map((post) => (
          <li>
            <Link to={`/blog/${post.node.frontmatter.slug}`}>
              {post.node.frontmatter.title}
            </Link>
            <span className="date"> {post.node.frontmatter.date}</span>
            {excertps && (
              <p className="excerpt">{post.node.frontmatter.excerpt}</p>
            )}
          </li>
        ))}
      </ul>
    </PostsDiv>
  );
};

export default Posts;
