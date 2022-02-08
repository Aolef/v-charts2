<p align="center">
<img src="../../docs/.vuepress/public/favicon.ico" alt="mark text" width="100" height="100">
</p>

<h3 align="center">@v-chart/pie</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/@v-charts/pie" target="_blank"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@v-charts/pie"></a>
  <a href="https://www.npmjs.com/package/@v-charts/pie" target="_blank"><img alt="npm bundle size (scoped)" src="https://img.shields.io/bundlephobia/min/@v-charts/pie"></a>
  <a href="https://github.com/denaro-org/v-charts2/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/@v-charts/pie"></a>
  <a href="https://github.com/denaro-org/v-charts2/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.npmjs.com/package/@v-charts/pie" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/@v-charts/pie"></a>
  <a href="https://www.npmjs.com/package/@v-charts/pie" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dm/@v-charts/pie"></a>
  <a href="https://github.com/denaro-org/v-charts2/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@v-charts/pie"></a>
</p>

> :tada: 饼图

### 下载

```bash
yarn add @v-charts/pie
# or
npm install @v-charts/pie
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

> 传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts/pie/vue2` 或者 `@v-charts/pie/vue3` 的话, 可能会报错

```javascript
import Vue from "vue";
import VePie from "@v-charts/pie"; // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VePie);
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from "vue";
import VePie from "@v-charts/pie/vue2"; // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import "@v-charts/pie/v-charts.css"; // 需要手动引入样式
Vue.use(VePie);
```

- Vue 3.x

```javascript
import { createApp } from "vue";
const app = createApp();
import VePie from "@v-charts/pie/vue3"; // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import "@v-charts/pie/v-charts.css"; // 需要手动引入样式
app.use(VePie);
```