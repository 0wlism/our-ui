# Our UI

这是一款基于tailwind 和 vue 的 UI 组件库

---
## 使用步骤

### 安装

```
npm install our-ui
```
### 引入样式

在全局引入样式 `our-ui-min.css`，例如：

```javascript
import Vue from 'vue'
import App from './App.vue'

import 'our-ui/lib/our-ui.min.css' // 引入

new Vue({
  el: '#app',
  render: h => h(App)
})
```
### 引入组件

#### 1，全局引入

以插件的方式在全局注册所有组件

```javascript
import Vue from 'vue'
import App from './App.vue'

import 'our-ui/lib/our-ui.min.css'
import OurUi from 'our-ui'

Vue.use(OurUi)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
在全局注册部分组件

```javascript
import Vue from 'vue'
import App from './App.vue'

import 'our-ui/lib/our-ui.min.css'
import { OurLoading } from 'our-ui'

Vue.component(OurLoading.name, OurLoading);

new Vue({
  el: '#app',
  render: h => h(App)
})
```

#### 2，局部引入

```javascript
import { OurLoading } from 'our-ui'

export default {
  components: { OurLoading }
}
```
