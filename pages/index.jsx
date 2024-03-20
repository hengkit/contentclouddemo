import { NextSeo } from "next-seo";
import Image from "next/image";
import Layout from "../components/layout";
import { ArticleGrid } from "../components/article-grid";
import { getAllArticles } from "../lib/Articles";
import { pdsConfig } from "../pds.config";

export default function Home({ articles }) {
  const HomepageHeader = () => (
    <div className="pds-spacing-mar-block-end-2xl pds-spacing-pad-block-start-4xl">
      <h1 className="pds-ts-5xl text-center">Welcome</h1>
    </div>
  );

  return (
    <Layout>
      <NextSeo
        title={pdsConfig.siteName}
        description="Generated by Pantheon Content Cloud"
      />
      <HomepageHeader />
      <section>
        <ArticleGrid articles={articles} headingLevel="h2" />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const articles = await getAllArticles();

  return {
    props: {
      articles,
    },
  };
}
