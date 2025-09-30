import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-20px">
      <div className="max-w-1200px w-full">
        {/* 导航栏 */}
        <nav className="flex justify-between items-center mb-40px p-20px bg-white rounded-8px shadow-sm">
          <div className="flex items-center gap-12px">
            <img src="/assets/icons/home.svg" alt="Home" className="w-24px h-24px" />
            <h1 className="text-24px font-bold text-gray-800">React Scaffold</h1>
          </div>
          <div className="flex gap-16px">
            <Link to="/" className="px-16px py-8px bg-primary text-white rounded-4px hover:opacity-80 transition-opacity">
              首页
            </Link>
            <Link to="/about" className="px-16px py-8px text-gray-600 hover:text-gray-800 transition-colors">
              关于
            </Link>
            <Link to="/login" className="px-16px py-8px text-gray-600 hover:text-gray-800 transition-colors">
              登录
            </Link>
          </div>
        </nav>

        {/* 主要内容 */}
        <div className="bg-white rounded-8px p-40px text-center shadow-sm">
          <img 
            src="/assets/images/homePage/reactionTestImage.png" 
            alt="Reaction Test" 
            className="w-200px h-200px mx-auto mb-24px rounded-8px"
          />
          <h2 className="text-32px font-bold text-gray-800 mb-16px">欢迎来到首页</h2>
          <p className="text-16px text-gray-600 mb-24px">这是一个最小化的首页组件，集成了路由切换和资源引用功能</p>
          
          <div className="flex gap-16px justify-center">
            <Link to="/about" className="px-24px py-12px bg-primary text-white rounded-6px hover:opacity-80 transition-opacity">
              了解更多
            </Link>
            <Link to="/login" className="px-24px py-12px border border-gray-300 text-gray-700 rounded-6px hover:bg-gray-50 transition-colors">
              立即登录
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
