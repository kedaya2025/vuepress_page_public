# VuePress 静态网站

这是一个使用 VuePress 构建的静态网站，自动部署到 GitHub Pages。

🎉 **网站已成功配置！** 权限设置完成，准备部署...

## 🚀 特性

- 📝 使用 Markdown 编写内容
- ⚡ 基于 Vue.js 的快速静态网站生成器
- 🎨 现代化的默认主题
- 📱 响应式设计，移动端友好
- 🔍 内置搜索功能
- 🚀 自动部署到 GitHub Pages

## 📁 项目结构

```
├── docs/                    # 文档源文件
│   ├── .vuepress/          # VuePress 配置
│   │   └── config.js       # 网站配置文件
│   ├── guide/              # 指南页面
│   ├── about/              # 关于页面
│   └── README.md           # 首页
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── package.json            # 项目依赖
└── README.md              # 项目说明
```

## 🛠️ 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:8080` 查看网站。

### 构建生产版本

```bash
npm run build
```

构建文件将生成在 `docs/.vuepress/dist/` 目录中。

## 🚀 部署

项目配置了 GitHub Actions 自动部署：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建并部署到 GitHub Pages
3. 访问网站：`https://kedaya2025.github.io/vuepress_page_public/`

## 📝 内容编辑

- 编辑 `docs/README.md` 修改首页内容
- 在 `docs/` 目录下添加新的 Markdown 文件创建新页面
- 修改 `docs/.vuepress/config.js` 配置导航和侧边栏

## 🔧 配置

主要配置文件：`docs/.vuepress/config.js`

- 网站标题和描述
- 导航栏配置
- 侧边栏配置
- 主题设置

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！
