import React, { useEffect } from 'react';

import HomeSvg from '@/assets/icons/home.svg';
import { initPageLayout } from '@/utils/lifeCircle';
import style from './App.scss'

function App() {

  useEffect(() => {
    initPageLayout()
    window.addEventListener('resize', () => {
      // 监听屏幕宽度变化，动态设置根字体大小，以适配不同屏幕。但是最小宽度为设计稿宽度
      initPageLayout()

      return () => {
        window.removeEventListener('resize');
      }
    })
  }, []);

  return (
    <div className={style.App}>
      <HomeSvg width="100px" height="100px" />
      测试APP
    </div>
  );
}

export default App;