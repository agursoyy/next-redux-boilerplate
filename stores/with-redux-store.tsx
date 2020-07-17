import React from 'react';

import { initializeStore } from '.';
import { Store } from './';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';
declare global {
  interface Window {
    __NEXT_REDUX_STORE__: Store;
  }
}

let x: Store;
function getOrCreateStore(initialState: any): Store {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];

}


type Props = { reduxStore: Store }

const withReduxStore = (Component: any) => { // (Component: React.ComponentClass<Props>)
  return class Redux extends React.Component<Props> {
    private store: Store

    static async getInitialProps(appContext: any) {
      const reduxStore = getOrCreateStore({});

      // Provide the store to getInitialProps of pages
      appContext.store = reduxStore;

      let appProps = {};
      if ((Component as any).getInitialProps) {
        appProps = await (Component as any).getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    constructor(props: any) {
      super(props);
      this.store = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return (
        < Component {...this.props} store={this.store} />
      );
    }
  };
};

export default withReduxStore;

export const mapDispatchToProps = (dispatch: any) => ({ dispatch });

export type Dispatchable<P> = P & ReturnType<typeof mapDispatchToProps>