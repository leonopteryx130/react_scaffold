import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initPageLayout } from '@/utils/lifeCircle';
import ReduxProvider from './store/Provider';
import RouterView from './router';
import './index.css';
import './utilities.scss';

// 初始化自适应缩放
initPageLayout();
window.addEventListener('resize', initPageLayout);


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <RouterView />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
