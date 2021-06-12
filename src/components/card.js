import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const CardDiv = styled.div`
  .gatsby-image {
    border: 1px solid black;
  }
`;

const Card = ({ title, description, image, links }) => {
  return (
    <CardDiv>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {links &&
          links.map((link) => (
            <p>
              <a href={link}>{link}</a>
            </p>
          ))}
      </div>
      {image && <GatsbyImage image={image} className="gatsby-image" />}
    </CardDiv>
  );
};

export default Card;
