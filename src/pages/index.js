import { Fragment } from 'react';
import Hero from '@/components/home-page/hero';
import FeaturedPosts from '@/components/home-page/featured-posts';

function HomePage() {
  // 1) Hero
  // 2) Featured Posts
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;
