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
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "b0d0f1f3e9954c7883d2b82c0702fe40"}'
      ></script>
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

  html,
  body {
    margin: 1rem;
    font-family: sans-serif;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
