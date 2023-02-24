import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <h1>This is the first post!</h1>
    </Layout>
  );
}
