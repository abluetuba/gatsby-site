import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { graphql } from "gatsby";

const Card = styled.div`
  h3 {
    margin-bottom: 0;
    margin-top: 0;
  }
  div {
    padding: 0.5rem;
  }
  img {
    border: 4px solid black;
  }
`;

export default ({ title, image, link }) => {
  return (
    <Card>
      <div>
        <h3>{title}</h3>
        {link && <a href={link}>https://unoxdue.netlify.app</a>}
      </div>
      {image && <Img fixed={image} />}
    </Card>
  );
};
