# vuejs-modal ![travis-ci](https://travis-ci.org/shaodahong/vuejs-modal.svg?branch=master)

A simple、highly customizable vue modal plugin.

[中文]('README-ZH.md')

## Introduction

A file corresponds to a modal, and registered to vue prototype, so I can use it through `this`, it gives me a state of a `promise`, so I can get this modal state.

## Installation

```bash
$ npm i vuejs-modal -S
```

## Usage

```javascript
import Modal from 'vuejs-modal'

// If you can use default template, you should be:
import confirm from 'vuejs-modal/lib/confirm.vue'

Vue.use(Modal, {
     modals: {
         confirm //default template
     }  //your modals, is a object 
})
```

Use in component:

```js
<template>
    //html
</template>

<script>
export default {
    methods: {
        show: function () {
            this.$modal.confirm().then( res => {
                // I click ok button
            }).catch( rej => {
                // I click cancel button
            })
        }
    }
}
</script>
```

## options

```js
Vue.use(Modal, {
    // Use this in the component modal called the name, the default is $modal.
    name: '$modal',

    // modal div id name,  the default is modal.
    id: 'modal',

    // your modals, is a object, the default is null
    // this object key is called the modal name, value is a vue component. 
    modals: {
        confirm: confirm.component
    },

    // modal default style,  the default hava a z-index, it will be increment
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

## Event
```js
// If you can click ok button, it can be resolve promise, and you can get params in then:
this.$emit('$ok', this.$el, params)

// If you can click cancel button, it can be reject promise, and you can get params in catch:
this.$emit('$cancel', this.$el, params)
```