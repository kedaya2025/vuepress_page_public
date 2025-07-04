import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // 指定 bundler
  bundler: viteBundler(),
  // 网站的基本信息
  title: '我的 VuePress 网站',
  description: '使用 VuePress 构建的静态网站',
  
  // GitHub Pages 部署配置
  base: '/vuepress_page_public/',
  
  // 主题配置
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '关于',
        link: '/about/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com',
      },
    ],
    
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
          ],
        },
      ],
    },
    
    // 仓库配置
    repo: 'kedaya2025/vuepress_page_public',
    repoLabel: 'GitHub',
    
    // 编辑链接
    editLink: false,
    
    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '最后更新',
    
    // 贡献者
    contributors: true,
    contributorsText: '贡献者',
  }),
  
  // 语言配置
  lang: 'zh-CN',
  
  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
})
