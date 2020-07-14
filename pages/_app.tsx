import React from 'react';
import { NextPageContext } from 'next';
import App, { AppInitialProps, AppContext, Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { Store, RootState, wrapper } from '../stores';
import { login } from '../stores/auth/actions';

interface IProps extends AppInitialProps {
  store: any;
}

class MyApp extends App<IProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const { store } = ctx;
    store.dispatch(login({ email: 'email', password: 'password' }));
    console.log(store.getState());
    return { pageProps: {} };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    console.log(store);
    return (
      <Component {...pageProps} />
    );
  }
}

export default wrapper.withRedux(MyApp);
