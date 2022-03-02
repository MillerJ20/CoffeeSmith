import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

const UserLoginContainter = () => {
  const dispatch = useDispatch();

  const userLoginAction = userToLogin => actions.loginUserActionCreator(userToLogin, dispatch);

  const loggedInUser = useSelector((state) => state.users.user);

  // useEffect(() => {
  //   userLoginAction();
  // }, [])

  return (
    // <p>Logged in user: {loggedInUser} </p>
    <p>UserContainer</p>
  )
}

export default connect(null, null)(UserLoginContainter);