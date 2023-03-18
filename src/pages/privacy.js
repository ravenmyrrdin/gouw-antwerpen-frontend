import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '../styles.css';

const Privacy = ({ data }) => {
    const { wpPage } = data;
    const { title, content } = wpPage;
    return (
        <Layout>
            <div className="privacyPagBox">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }} />
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
  