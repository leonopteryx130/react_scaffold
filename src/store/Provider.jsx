import React from 'react';
import { Provider } from 'react-redux';
import { store } from './index';

// Redux Provider组件
const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
