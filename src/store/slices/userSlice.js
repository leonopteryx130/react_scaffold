import { createSlice } from '@reduxjs/toolkit';

// 初始状态
const initialState = {
  user: null,
  accessId: null,
  accessToken: null,
  isAuthenticated: false,
};

// 创建slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 登录成功
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.accessId = action.payload.accessId;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
      // 保存到本地存储，使用X-ACCESS-ID和X-ACCESS-TOKEN作为key
      localStorage.setItem('X-ACCESS-ID', action.payload.accessId);
      localStorage.setItem('X-ACCESS-TOKEN', action.payload.accessToken);
    },
    // 登出
    logout: (state) => {
      state.user = null;
      state.accessId = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      // 清除本地存储
      localStorage.removeItem('X-ACCESS-ID');
      localStorage.removeItem('X-ACCESS-TOKEN');
    },
    // 设置用户信息
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // 设置accessId和accessToken
    setAccessCredentials: (state, action) => {
      state.accessId = action.payload.accessId;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('X-ACCESS-ID', action.payload.accessId);
      localStorage.setItem('X-ACCESS-TOKEN', action.payload.accessToken);
    },
    // 从本地存储恢复登录状态
    restoreAuth: (state) => {
      const accessId = localStorage.getItem('X-ACCESS-ID');
      const accessToken = localStorage.getItem('X-ACCESS-TOKEN');
      if (accessId && accessToken) {
        state.accessId = accessId;
        state.accessToken = accessToken;
        state.isAuthenticated = true;
        // 注意：user 信息需要重新从服务器获取
      }
    },
  },
});

// 导出actions
export const { loginSuccess, logout, setUser, setAccessCredentials, restoreAuth } = userSlice.actions;

// 导出reducer
export default userSlice.reducer;

// 选择器
export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectAccessId = (state) => state.user.accessId;
export const selectAccessToken = (state) => state.user.accessToken;
