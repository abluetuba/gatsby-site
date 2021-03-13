import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Posts from "../components/posts";

export default function blog({ data }) {
  return (
    <Layout>
      <SEO title="tuba's blog" />
      <h1>blog</h1>
      <Posts excertps />
    </Layout>
  );
}
