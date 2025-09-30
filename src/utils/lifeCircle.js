/**
 * 生命周期方法
 * 
 * 包括初始化页面布局，初始化路由，初始化数据等
 * 同时也包括页面的销毁，数据的销毁等
 * 路由拦截，数据拦截等也可以放在这里边
 * 
 */
import { rootFontSize, figmaWidth, figmaHeight, mobileFigmaWidth, minWidth, minHeight } from '@/utils/config';
import { isMobile } from "@/utils/commonUtils";

export const initPageLayout = () => {
  // 初始化页面布局
  const width = isMobile()? mobileFigmaWidth: figmaWidth;
  const height = isMobile()? document.documentElement.clientHeight: figmaHeight;

  const scaleWidth = Math.max(document.documentElement.clientWidth, minWidth) / width;
  const scaleHeight = Math.max(document.documentElement.clientHeight, minHeight) / height ;
  const scale = Math.min(scaleWidth, scaleHeight); // 取最小的缩放比例
  document.documentElement.style.fontSize = rootFontSize * scale + 'px'; // 1rem = 16px
  document.documentElement.style.minWidth = minWidth + 'px'; // 设置最小宽度为设计稿宽度
  document.documentElement.style.minHeight = minHeight + 'px'; // 移动端页面高度
}