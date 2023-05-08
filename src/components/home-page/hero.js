import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/sam.png'
          alt='An image showing Sam'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Sam</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
