import React, { Fragment } from 'react';
import MainNav from './main-nav';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
