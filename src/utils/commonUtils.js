export const px2rem = (px) => {
  return px / 16 + 'rem';
}

/**
 * 判断移动端还是PC端
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}