import React from 'react';
import Logo from './logo';
import Link from 'next/link';

const MainNav = () => {
  return (
    <header>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Post</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
