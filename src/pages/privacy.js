import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '../styles.css';

const Privacy = ({ data }) => {
    const { wpPage } = data;
    const { title, content } = wpPage;
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const newContent = content.replace("+++url+++", "<a href='" + url + "'>" + url + "</a>")
    return (
        <Layout>
            <div className="privacyPagBox">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: newContent }} />
            </div>
        </Layout>
    );
};

export const query = graphql`
query {
    wpPage(slug: {eq: "privacy-policy"}) {
      title
      content
    }
  }
`;

export default Privacy;
  