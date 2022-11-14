import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <Container fluid className={styles.home}>
      <Head>
        <html lang="en-US" />
        <meta charSet="utf-8" />
        <title>Grace Fashion - Glow with Confidence</title>

        {/* Primary meta tags */}
        <meta name="title" content="Grace Fashion - Glow with Confidence" />
        <meta
          name="description"
          content="Bring glow and confidence in your life with the vibrant style of Grace Fashion."
        />
        <meta
          name="image"
          content="https://gracefashion.eaflores.com/og-image-1200w630h.jpg"
        />
        <meta
          name="description"
          content="Bring glow and confidence in your life with the vibrant style of Grace Fashion."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </Container>
  );
};

export default Home;
