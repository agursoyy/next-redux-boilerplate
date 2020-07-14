import React, { FC } from 'react';
import { RootState } from '../stores';
import { connect, ConnectedProps } from 'react-redux';

const mapState = (state: RootState) => ({
  auth: state.auth
});

const mapDispatch = {
  login: () => ({ type: 'TOGGLE_IS_ON' })
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  backgroundColor: string
}

const Home: FC<Props> = ({ backgroundColor, auth }) => (
  <div>
    <h2>Home Page</h2>
    <h3>{auth.message}</h3>

    <i className="icon icon-times"></i>
  </div>
);


export default connector(Home);