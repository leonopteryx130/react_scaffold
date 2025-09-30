import React, { useEffect } from 'react';

// 使用 public 下的静态资源，不再通过模块导入 svg
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
      <img src="/assets/icons/home.svg" alt="home" width="100" height="100" />
      测试APP
    </div>
  );
}

export default App;