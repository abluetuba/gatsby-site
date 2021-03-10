import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Card = styled.div`
  .gatsby-image {
    border: 2px solid black;
  }
`;

export default ({ title, description, image, links }) => {
  return (
    <Card>
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
    </Card>
  );
};
