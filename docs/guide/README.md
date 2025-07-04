# 指南

欢迎来到 VuePress 网站指南！这里将为您介绍如何使用和定制这个网站。

## 什么是 VuePress？

VuePress 是一个基于 Vue.js 的静态网站生成器，专门为技术文档而优化。它具有以下特点：

- **简单易用**: 使用 Markdown 编写内容
- **Vue 驱动**: 享受 Vue.js 的开发体验
- **高性能**: 预渲染生成静态 HTML
- **主题系统**: 丰富的主题和插件生态

## 主要功能

### 📝 Markdown 支持

VuePress 完全支持 Markdown 语法，您可以使用：

- **粗体文本**
- *斜体文本*
- `行内代码`
- [链接](https://vuepress.vuejs.org/)

### 代码高亮

```javascript
// JavaScript 代码示例
function hello() {
  console.log('Hello VuePress!')
}
```

```python
# Python 代码示例
def hello():
    print("Hello VuePress!")
```

### 自定义容器

::: tip 提示
这是一个提示容器
:::

::: warning 警告
这是一个警告容器
:::

::: danger 危险
这是一个危险警告容器
:::

## 网站结构

```
docs/
├── .vuepress/
│   └── config.js          # 配置文件
├── guide/
│   ├── README.md          # 指南首页
│   └── getting-started.md # 快速开始
├── about/
│   └── README.md          # 关于页面
└── README.md              # 网站首页
```

## 下一步

- 查看[快速开始](./getting-started.md)了解如何编辑内容
- 访问[关于页面](/about/)了解更多信息
