import { configureStore } from '@reduxjs/toolkit';
import userSlice, { restoreAuth } from './slices/userSlice';
// 配置store
export const store = configureStore({
  reducer: {
    user: userSlice,
    // 在这里添加更多的slice
  },
  // 开发环境下启用Redux DevTools
  devTools: process.env.NODE_ENV !== 'production',
});

// 应用启动时恢复登录状态
store.dispatch(restoreAuth());

