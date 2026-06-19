# 🎙️ 语音实时下单系统

**AI驱动的实时语音下单助手**

基于 FastAPI + LangGraph + WebRTC 的完整解决方案。

## ✨ 特性
- 实时语音交互 (STT + TTS)
- 智能对话引导 + 槽位填充
- 订单信息实时展示
- 用户确认后自动下单

## 🚀 快速启动

```bash
# 1. 克隆仓库
git clone https://github.com/qzybj/VoiceAssistantK.git
cd VoiceAssistantK

# 2. 使用 Docker 一键启动
docker-compose up --build
```

前端访问: http://localhost:3000
后端API: http://localhost:8000

## 项目结构
- `frontend/` - React + Vite 语音界面
- `backend/` - FastAPI + LangGraph Agent
- `PRD/` - 产品需求文档

## 技术栈
- 前端: React, Tailwind, Web Speech API, WebSocket
- 后端: FastAPI, LangGraph, Pydantic
- 语音: 浏览器原生 STT/TTS

Made with ❤️ by Grok