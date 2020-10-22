import React, { FC, useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import { RootState, Store, wrapper } from '../../stores';
import Link from 'next/link';
type IProps = {};

const MyPage: NextPage<IProps> = () => {
  return (
    <div>
      <h1>MY PAGE</h1>
      <Link href="/">Home Page</Link>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(({ store, req, res }) => {
  console.log('MYPAGEMYPAGEMYPAGE');
  //store.dispatch(login({ email: 'email', password: 'password' }) as any);
});

export default MyPage;
