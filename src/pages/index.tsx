import React from 'react';
import Head from 'next/head';
import PageContent from '../styles/pages/Home.style';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aluracord | Login</title>
      </Head>

      <PageContent>
        <h1>Hello, World!</h1>
      </PageContent>
    </>
  );
}
