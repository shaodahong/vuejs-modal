# vuejs-modal ![travis-ci](https://travis-ci.org/shaodahong/vuejs-modal.svg?branch=master)

A simple、highly customizable vue modal plugin.

## Introduction

A file corresponds to a modal, and registered to vue prototype, so I can use it through `this`, it gives me a state of a `promise`, so I can get this modal state.

## Installation

```bash
$ npm i vuejs-modal -S
```

## Usage

```javascript
import Modal from 'vuejs-modal'

Vue.use(Modal, {
     modals  //your modals, is a object 
})
```

Use in component:

```js
<template>
    ……
</template>

<script>
export default {
    methods: {
        show: function () {
            this.$modal.confirm()
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

    // modal style,  the default hava a z-index
    style: {
        zIndex: 1000
    }
})
```