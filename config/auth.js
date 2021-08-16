import React from 'react';

const Auth = props => {
  const { children } = props;
  const isAuth = false;
  return isAuth ? children : <div>没有登录</div>;
};
export default Auth;
