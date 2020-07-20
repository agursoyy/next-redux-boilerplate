import React from 'react';
import App, { Container, AppInitialProps, AppContext } from 'next/app';
import '../styles/index.scss';

import withReduxStore from '../stores/with-redux-store';
import { Store } from '../stores';
import { Provider } from 'react-redux';
import { login } from '../stores/auth/actions';
import { success } from '../stores/alert/actions';


interface IAppContext extends AppContext {
  store?: Store;
}

interface IProps extends AppInitialProps {
  store: Store;
}


export default withReduxStore(
  class MyApp extends App<IProps> {
    static async getInitialProps({ Component, ctx, store }: IAppContext) {
      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      store!.dispatch(login({ email: 'email', password: 'password' })); // store! -> we are sure it exists.

      return { pageProps };
    }
    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }

);