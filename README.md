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
---

## 组件列表

### GoTop

| Props       | Type   | Default | Description                                                 |
| ----------- | ------ | ------- | ----------------------------------------------------------- |
| scrollY     | Number | 1000    | 控制滚动到距离视口上方多少显示组件，如果设置为0，则永久显示 |
| scrollSpeed | Number | 100     | 滚动到上方的速度                                            |
| color       | String | #000    | 内置图标的颜色                                              |
| right       | Number | 30      | 距离视口右边的距离                                          |
| bottom      | Number | 50      | 距离视口下边的距离                                          |
| width       | Number | 50      | 图标的宽度                                                  |
| height      | Number | 50      | 图标的高度                                                  |
| zIndex      | Number | 1000    | 层级                                                        |

> 最好在项目的布局组件里引入，如果有布局组件的话

### Loading

> 参考了[vue-element-loading](<https://github.com/biigpongsatorn/vue-element-loading/blob/master/README.md>)，所以配置项差不多

| Props            | Type    | Default                 | Description                                                  |
| ---------------- | ------- | ----------------------- | ------------------------------------------------------------ |
| active           | Boolean | false                   | 控制是否显示                                                 |
| spinner          | String  | loop                    | 加载的内置图型样式：bounce，double-bounce，double-cube，double-dot，loop，rotate-plane，scale-out，shrink-rect |
| color            | String  | #000                    | 加载的内置图型样式的颜色                                     |
| background-color | String  | rgba(255, 255, 255, .9) | 加载蒙板的背景色                                             |
| size             | Number  | 40                    | 加载的内置图型样式的大小（对自定义的加载图型无效）           |
| is-full-screen   | Boolean | false                   | 控制加载动画是否全屏展示                                     |
| text             | String  |                         | 自定义文本，显示在加载图标下方                               |
| text-style       | Object  | {}                      | 自定义文本的样式，接收一个js样式对象                         |

#### 加载样式

![加载样式](https://raw.githubusercontent.com/0wlism/our-ui/master/static/loaders.png)

#### 例子

直接使用

```html
<template>
  <div class='parent'>
    <OurLoading spinner='double-cube' isFullScreen active text="loading..." />
  </div>
</template>
```

自定义加载动画

```html
<template>
  <div class='parent'>
      <our-loading active >
          <img  src="../static/loader.gif" />
      </our-loading>
  </div>
</template>
```

> 注意要给父元素设置一个宽高

