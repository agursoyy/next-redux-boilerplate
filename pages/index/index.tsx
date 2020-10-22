import React, { FC, useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import { RootState, Store, wrapper } from '../../stores';
import { success } from '../../stores/alert/actions';
import { useSelector, useDispatch } from 'react-redux';
import getConfig from 'next/config';
import { login } from '../../stores/auth/actions';
import IPageConfig from '../../interfaces/PageConfig';

const { publicRuntimeConfig } = getConfig();

type IProps = {
  custom: string;
};

type INextPage<P> = NextPage<P> & {
  pageConfig?: IPageConfig;
};

const Home: INextPage<IProps> = ({ custom }) => {
  const { news, auth } = useSelector((state: RootState) => state);
  console.log(auth);
  const dispatch = useDispatch();
  /* useEffect(() => {
    dispatch(login({ email: 'alp@gmail.com', password: '******' }));
  }, []); */
  return (
    <div>
      <div>Prop from Redux {auth.message}</div>
      <div>Prop from getInitialProps {custom} </div>
    </div>
  );
};

Home.pageConfig = {
  auth: true,
  footer: false,
};

/*
Home.getInitialProps = async ({
  store,
  pathname,
  query,
}: NextPageContext): Promise<Props> => {
  store.dispatch({ type: 'FOO', payload: 'foo' }); // The component can read from the store's state when rendered
  const { auth } = store.getState();
  return { custom: auth.message }; // You can pass some custom props to the component from here
};
//export default connect(Home); */

export const getServerSideProps = wrapper.getServerSideProps(({ store, req, res }) => {
  console.log('2. Page.getServerSideProps uses the store to dispatch things');
  store.dispatch(login({ email: 'email', password: 'password' }) as any);
  return { props: { custom: 'alptekin' } };
});

export default Home;
