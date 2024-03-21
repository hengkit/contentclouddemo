import { NextSeo } from "next-seo";
import Image from "next/image";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { ArticleGrid } from "../components/article-grid";
import { getAllArticles } from "../lib/Articles";
import { pdsConfig } from "../pds.config";

export default function Home({ articles }) {
  return (
    <Layout>
      <NextSeo
        title={pdsConfig.siteName}
        description="Generated by Pantheon Content Cloud"
      />
      <PageHeader title={pdsConfig.homePageHeading} />
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
