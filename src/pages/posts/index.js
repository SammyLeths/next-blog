import { Fragment } from 'react';
import Head from 'next/head';
import { getAllPosts } from '@/lib/posts-util';
import AllPosts from '../../components/posts/all-posts';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='A list of all programming posts' />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    //revalidate: 1000,
  };
}

export default AllPostsPage;
