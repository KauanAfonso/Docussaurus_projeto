import React from 'react';
import Layout from '@theme/Layout';
import MDXContent from '../../about/index.md';
import { MDXProvider } from '@mdx-js/react';
import { Card_participant } from '@site/src/components/HomepageFeatures/about.jsx';
import estilos from './about.module.css';

export default function AboutPage() {
  return (
    <Layout>
      <MDXProvider>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <MDXContent />

              <div className={estilos.div_main}>
                <Card_participant/>
              </div>
             
            </div>
          </div>
        </div>
      </MDXProvider>
    </Layout>
  );
}