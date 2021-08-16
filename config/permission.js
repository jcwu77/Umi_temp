import React from 'react';

const Permission = props => {
  const { children } = props;
  const isAuth = false;
  return isAuth ? children : <div>没有权限</div>;
};
export default Permission;
