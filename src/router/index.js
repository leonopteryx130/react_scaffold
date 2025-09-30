import React, { Suspense, lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

// 使用 Suspense 包裹懒加载组件，统一提供占位内容
function withSuspense(node) {
  return <Suspense fallback={<div>Loading...</div>}>{node}</Suspense>
}

// 基础鉴权函数（按需替换为你的真实逻辑）
function isAuthenticated() {
  return Boolean(localStorage.getItem('token'))
}

// 路由守卫：当路由需要鉴权且未登录时，跳转到登录页
function Guard({ children, requiresAuth, redirect = '/login' }) {
  if (requiresAuth && !isAuthenticated()) return <Navigate to={redirect} replace />
  return children
}

// 懒加载页面组件（提升首屏加载速度）
const Home = lazy(() => import('../pages/HomePage/index'))
const About = lazy(() => import('../pages/About'))
const Login = lazy(() => import('../pages/Login'))
const NotFound = lazy(() => import('../pages/NotFound'))

// 可扩展的路由配置：推荐使用 Component（更贴近 v7 写法）
export const routeConfig = [
  /*
  {
    path: '/',
    Component: BasicLayout,
    children: [
      { index: true, Component: Home, meta: { title: '首页' } },
      { path: 'about', Component: About, meta: { title: '关于' } }
    ]
  },
  */
  {
    path: '/',
    Component: Home,
    meta: { title: '首页' },
  },
  { path: '/login', Component: Login },
  { path: '*', Component: NotFound }
]

// 将配置中的 Component/element 统一增强为可渲染的 element，并挂载守卫
function enhanceRoutes(routes) {
  return routes.map(route => {
    const { meta, requiresAuth, children, Component, element, ...rest } = route
    // 优先使用 Component（v7 风格）；若仅提供 element，则直接复用
    const node = Component ? <Component /> : element
    const guarded = (
      <Guard requiresAuth={requiresAuth}>
        {withSuspense(node)}
      </Guard>
    )
    return {
      ...rest,
      element: guarded,
      children: children ? enhanceRoutes(children) : undefined
    }
  })
}

// 入口组件：基于 useRoutes 渲染路由树
export default function RouterView() {
  const routes = enhanceRoutes(routeConfig)
  const element = useRoutes(routes)
  return element
}


