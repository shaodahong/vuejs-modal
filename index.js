import confirm from '../../components/modals/confirm.vue';

var modal = {
    install: function (Vue, options) {

        var defaultOptions = Object.assign({
            name: '$modal',
            id: 'modal'
        }, options)

        this.init(defaultOptions.id);

        console.log('defaultOptions', defaultOptions, Vue.prototype);

        var modals = Vue.prototype[defaultOptions.name] = {};

        console.log('confirm', confirm)
        confirm.methods.$ok = function () {
            console.log('osdjcopsjpojcpoj')
        }
        modals.confirm = options => {
            return new Promise((res, rej) => {
                console.log('options', options)
                new Vue({
                    render: h => h(confirm, {
                        props: options,
                        on: {
                            abc: function (v) {
                                console.log('abc')
                                res(v)
                            }
                        }
                    })
                }).$mount('#' + defaultOptions.id)

                this.init(defaultOptions.id)
            })


        }
    







        // Object.keys(defaultOptions.modals).forEach(function (v) {
        //     modals[v] = function (box) {
        //         Vue.component(v, defaultOptions.modals[v])
        //         console.log('box', box.content)
        //         console.log(v, defaultOptions.modals[v])

        //         // document.getElementsByTagName('body')[0].appendChild('<confirm></confirm>')
        //     }

        // })
    },
    init: name => {
        const div = document.createElement('div');
        div.setAttribute('id', name || 'modal');
        document.getElementsByTagName('body')[0].appendChild(div)
    }
}

module.exports = modal;