import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '@/components/home-page/hero';
import FeaturedPosts from '@/components/home-page/featured-posts';

import { getFeaturedPosts } from '@/lib/posts-util';

function HomePage(props) {
  // 1) Hero
  // 2) Featured Posts
  return (
    <Fragment>
      <Head>
        <title>Sam&apos;s Blog</title>
        <meta
          name='description'
          content='I post about programming and web application development'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    //revalidate: 600,
  };
}

export default HomePage;
