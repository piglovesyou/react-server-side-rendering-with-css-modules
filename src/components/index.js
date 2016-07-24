import React from 'react';
import Layout from './layout';
import Application from './application';

export default function index(props) {
  return (
    <Layout {...props}>
      <Application {...props}></Application>
    </Layout>
  );
};
