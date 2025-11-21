
import React from 'react';
import Layout from './components/Layout';
import ThumbnailGrabberTool from './components/ThumbnailGrabberTool';
import { SeoArticle, JsonLdSchemas } from './constants/seo';

const App: React.FC = () => {
  return (
    <>
      <JsonLdSchemas />
      <Layout>
        <div className="container mx-auto px-4 py-8 md:py-16">
          <ThumbnailGrabberTool />
          <SeoArticle />
        </div>
      </Layout>
    </>
  );
};

export default App;
