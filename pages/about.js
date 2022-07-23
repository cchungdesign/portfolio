import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout.js';

export default function About() {
    return (
        <Layout>
        <Head>
            <title>About</title>
        </Head>

        <Link href="/">
            <a>Home</a>
        </Link>
        </Layout>
    );
}
  