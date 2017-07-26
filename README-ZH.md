# vuejs-modal ![travis-ci](https://travis-ci.org/shaodahong/vuejs-modal.svg?branch=master)

一个简洁，高度可定制的vue modal插件。

## 介绍

一个文件就是一个modal，并且注册到vue全局，所以我们可以通过`this`来使用它，它是一个`promise`，所以我们可以获取到它的状态。

## 安装

```bash
$ npm i vuejs-modal -S
```

## 用法

```javascript
import Modal from 'vuejs-modal'

// 如果你想使用默认的模板：
import confirm from 'vuejs-modal/lib/confirm.vue'

Vue.use(Modal, {
     modals: {
         confirm //默认的模板
     }  //你的modals，它是个对象
})
```

在组件中使用:

```js
<template>
    //html
</template>

<script>
export default {
    methods: {
        show: function () {
            this.$modal.confirm().then( res => {
                // 我点击了确定
            }).catch( rej => {
                // 我点击了取消
            })
        }
    }
}
</script>
```

## 参数

```js
Vue.use(Modal, {
    // 在组件中使用this调用的名字，默认是$modal
    name: '$modal',

    // modal div的id名，默认是modal
    id: 'modal',

    // 你的modals,是一个对象，默认是null
    // 这个对象的key就是你要调用的modal名字，value就是一个组件
    modals: {
        confirm: confirm.component
    },

    // modal的默认的样式，z-index是递增的
    style: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1000
    }
})
```

## 事件
```js
// 如果你点击确定按钮，会使promise resolve, params可以在then中获取到
this.$emit('$ok', this.$el, params)

// 如果你点击取消按钮，会使promise reject，params可以在catch中获取到
this.$emit('$cancel', this.$el, params)
```