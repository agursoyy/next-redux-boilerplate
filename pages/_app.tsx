import React, { FC, useState } from 'react';
import { NextPage } from 'next';
import App, { Container, AppInitialProps, AppContext, AppProps } from 'next/app';
import getConfig from 'next/config';

import '../styles/index.scss';

import { Store, wrapper, RootState } from '../stores';
import { Provider, useSelector } from 'react-redux';
import { login } from '../stores/auth/actions';
import { success } from '../stores/alert/actions';

const { publicRuntimeConfig } = getConfig();

interface IAppContext extends AppContext {
  store?: Store;
}

interface IProps extends AppInitialProps {
  pageConfig: any;
}

class MyApp extends App<IProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    // ctx.store.dispatch(login({ email: 'email', password: 'password' }) as any); // store! -> we are sure it exists.
    let pageConfig = publicRuntimeConfig.pageConfig; // get page config from next.config
    if ((Component as any).pageConfig) {
      pageConfig = {
        // merge page configs with child component.
        ...pageConfig,
        ...(Component as any).pageConfig,
      };
    }
    if (true) {
      console.log(true);
    }

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
      pageConfig,
    };
  };

  public render() {
    const { Component, pageProps, pageConfig } = this.props;
    console.log(pageConfig);
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default wrapper.withRedux(MyApp);
