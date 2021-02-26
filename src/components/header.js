import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
  a {
    margin-right: 0.5rem;
  }
`;

export default function header() {
  return (
    <Nav>
      <Link to="/">tuba.dev</Link>
      <Link to="/blog">blog</Link>
      <Link to="/projects">projects</Link>
    </Nav>
  );
}
