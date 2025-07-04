# 快速开始

本页面将指导您如何开始使用和定制这个 VuePress 网站。

## 本地开发

### 1. 克隆项目

```bash
git clone https://github.com/your-username/page.git
cd page
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:8080` 启动。

## 编辑内容

### 修改首页

编辑 `docs/README.md` 文件来修改首页内容：

```markdown
---
home: true
title: 首页
heroText: 您的网站标题
tagline: 您的网站描述
---
```

### 添加新页面

1. 在 `docs` 目录下创建新的 Markdown 文件
2. 在 `docs/.vuepress/config.js` 中添加导航链接

```javascript
navbar: [
  {
    text: '新页面',
    link: '/new-page/',
  },
]
```

### 配置侧边栏

在 `docs/.vuepress/config.js` 中配置侧边栏：

```javascript
sidebar: {
  '/guide/': [
    {
      text: '指南',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/new-section.md', // 添加新章节
      ],
    },
  ],
}
```

## 部署到 GitHub Pages

### 自动部署

项目已配置 GitHub Actions 自动部署：

1. 推送代码到 GitHub 仓库
2. GitHub Actions 会自动构建并部署到 GitHub Pages
3. 访问 `https://your-username.github.io/page/` 查看网站

### 手动部署

如果需要手动部署：

```bash
# 构建网站
npm run build

# 部署到 GitHub Pages
npm run deploy
```

## 自定义配置

### 修改网站信息

在 `docs/.vuepress/config.js` 中修改：

```javascript
export default defineUserConfig({
  title: '您的网站标题',
  description: '您的网站描述',
  base: '/your-repo-name/',
})
```

### 添加自定义样式

创建 `docs/.vuepress/styles/index.styl` 文件添加自定义 CSS。

### 添加插件

在配置文件中添加插件：

```javascript
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  plugins: [
    searchPlugin({
      // 搜索插件配置
    }),
  ],
})
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run deploy` | 部署到 GitHub Pages |

## 获取帮助

- [VuePress 官方文档](https://vuepress.vuejs.org/)
- [GitHub Issues](https://github.com/your-username/page/issues)

---

现在您已经了解了基本用法，可以开始创建您的内容了！
