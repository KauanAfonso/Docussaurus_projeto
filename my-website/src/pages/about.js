import React from 'react';
import Layout from '@theme/Layout';
import MDXContent from '../../about/index.md';
import { MDXProvider } from '@mdx-js/react';

export default function AboutPage() {
  return (
    <Layout>
      <MDXProvider>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <MDXContent />
            </div>
          </div>
        </div>
      </MDXProvider>
    </Layout>
  );
}