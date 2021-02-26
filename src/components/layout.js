/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Header from "./header";

import { createGlobalStyle } from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  a {
      color: black;
  }

  html {
    font-family: 'sans-serif';
  }

  html,
  body {
    margin: 1rem;
 
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
