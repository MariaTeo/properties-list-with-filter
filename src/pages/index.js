import Head from 'next/head';
import List from '../component/list';

export default function Home({data}) {
  const list = data.result.properties.elements
  const id = data.result.properties.elements.id
  return (
    <div>
      <Head>
          <title>List of properties</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <List list={list} key={id}/>
      </main>

      <footer></footer>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch('http://localhost:3100/api/properties');

  const data = await res.json();

  if (!data) {
    return {
      error: 'error, not found',
    };
  }

  return {
    props: { data },
  };
};