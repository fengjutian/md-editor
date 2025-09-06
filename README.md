# Markdown 编辑器

一个基于 Nest.js + React + TypeScript 开发的现代化 Markdown 编辑器项目。

## 项目简介

该项目是一个完整的全栈应用，分为服务端和客户端两部分：
- **服务端**：使用 NestJS 框架构建的 Node.js 后端服务
- **客户端**：使用 React 19 + TypeScript + Vite 构建的前端应用，集成了 Markdown 渲染功能

## 技术栈

### 服务端
- **框架**：NestJS ^11.0.1
- **运行时**：Node.js
- **HTTP 服务**：Express
- **语言**：TypeScript
- **包管理**：pnpm

### 客户端
- **框架**：React ^19.1.1
- **构建工具**：Vite ^7.1.2
- **语言**：TypeScript
- **Markdown 渲染**：react-markdown ^10.1.0
- **包管理**：pnpm

## 项目结构

```
├── README.md              # 项目主README
├── server/                # 服务端代码
│   ├── src/               # 服务端源代码
│   ├── package.json       # 服务端依赖配置
│   └── README.md          # 服务端README
└── web/                   # 客户端代码
    ├── src/               # 客户端源代码
    ├── package.json       # 客户端依赖配置
    └── README.md          # 客户端README
```

## 快速开始

### 前置要求
- 安装 Node.js（推荐 v18+）
- 安装 pnpm：`npm install -g pnpm`

### 服务端安装与运行

```bash
# 进入服务端目录
cd server

# 安装依赖
pnpm install

# 开发模式运行
pnpm run start:dev

# 构建生产版本
pnpm run build

# 生产模式运行
pnpm run start:prod
```

服务端默认运行在 http://localhost:3000

### 客户端安装与运行

```bash
# 进入客户端目录
cd web

# 安装依赖
pnpm install

# 开发模式运行
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产构建
pnpm run preview
```

客户端默认运行在 http://localhost:5173

## 功能说明

### 目前已实现功能
- 客户端基础 Markdown 渲染功能
- 服务端基础 API 架构

### 计划实现功能
- Markdown 编辑器完整功能（编辑、预览、语法高亮等）
- 文档保存与管理功能
- 用户认证系统
- 云存储集成

## 开发指南

### 代码规范
- 使用 ESLint 和 Prettier 进行代码风格检查和格式化
- 遵循 TypeScript 最佳实践

### 测试

```bash
# 服务端测试
cd server
pnpm run test          # 运行单元测试
pnpm run test:e2e      # 运行端到端测试
pnpm run test:cov      # 生成测试覆盖率报告

# 客户端测试
cd web
pnpm run lint          # 运行 ESLint 检查
```

## License

MIT

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！
        