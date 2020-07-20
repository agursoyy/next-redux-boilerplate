import React, { FC } from 'react';
import { NextPage } from 'next';
import { RootState } from '../../stores';
import { connect, ConnectedProps } from 'react-redux';
import { success } from '../../stores/alert/actions';
import { useSelector, useDispatch } from 'react-redux';

import { fetchNews } from '../../stores/news/actions';

/*
const mapState = (state: RootState) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: () => dispatch(fetchNews())
  }
}

const connector = connect(mapState, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  backgroundColor: string
} */
type Props = {
  backgroundColor: string
}

const Home: NextPage<Props> = ({ }) => {
  const { news, auth } = useSelector((state: RootState) => state);
  const dispatch = useDispatch()
  const login = () => {
    dispatch(fetchNews());
  }
  return (
    <div>
      <h2>Home Page</h2>
      <h3>{auth.message}</h3>
      <i className="icon icon-times"></i>
      <button className="btn btn-red" onClick={login} >Press</button>
    </div >
  )

};


//export default connect(Home);
export default Home;