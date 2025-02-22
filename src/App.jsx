import React, { useEffect } from 'react';

import { rootFontSize, figmaWidth } from './utils/config';
import style from './App.scss'

function App() {

  useEffect(() => {
    window.addEventListener('resize', () => {
      // 监听屏幕宽度变化，动态设置根字体大小，以适配不同屏幕。但是最小宽度为设计稿宽度
      const scale = Math.max(document.documentElement.clientWidth, figmaWidth) / figmaWidth; // 屏幕宽度 / 设计稿宽度 = 缩放比例，最小为1
      document.documentElement.style.fontSize = rootFontSize * scale + 'px'; // 1rem = 16px
      document.documentElement.style.minWidth = figmaWidth + 'px'; // 设置最小宽度为设计稿宽度

      return () => {
        window.removeEventListener('resize');
      }
    })
  }, []);

  return (
    <div className={style.App}>
      测试APP
    </div>
  );
}

export default App;