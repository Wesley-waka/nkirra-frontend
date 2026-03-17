// pages/index.tsx
import React from 'react';

type Page = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
};

type Props = {
  page: Page | null;
};

export default function Home({ page }: Props) {
  if (!page) return <p>Page not found</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
}

// Fetch WordPress page at build time
export async function getStaticProps() {
  const res = await fetch('https://abiriohq.com/wp-json/wp/v2/pages?slug=sample-page');
  const pages = await res.json();

  const page = pages[0] || null;

  return {
    props: { page },
    revalidate: 60, // Optional: regenerate at most every 60s
  };
}