var Modal = {
    /**
     * 
     * 
     * @param {Function} Vue 
     * @param {{name?: string, id?: string, modals: object, style?: object}} options 
     */
    install: function (Vue, options) {

        var defaultOptions = Object.assign({
            name: '$modal',
            id: 'modal',
            modals: null,
            style: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1000
            }
        }, options)

        // set z-index value
        this.zIndex = defaultOptions.style.zIndex;

        // if no modals
        if (this.isEmpty(defaultOptions.modals)) {
            throw new Error('vuejs-modal plugin have a modals params')
        }

        // page init a modal element
        this.init(defaultOptions.id);

        // modals space
        let modals = Vue.prototype[defaultOptions.name] = {};

        // bind modals
        Object.keys(defaultOptions.modals).forEach(v => {

            /**
             * 
             * 
             * @param {object} options 
             * @returns 
             */
            modals[v] = options => {
                return new Promise((resolve, reject) => {
                    try {
                        new Vue({
                            render: h => h(defaultOptions.modals[v], {
                                props: options,
                                style: Object.assign(defaultOptions.style, {
                                    zIndex: this.zIndex
                                }),
                                on: {
                                    $ok: function ($el, info) {
                                        $el.remove()
                                        resolve(info)
                                    },
                                    $cancel: function ($el, info) {
                                        $el.remove()
                                        reject(info)
                                    }
                                }
                            })
                        }).$mount('#' + defaultOptions.id)
                        this.zIndex += 5;
                        this.init(defaultOptions.id);
                    } catch (error) {
                        console.error('vuejs-modal', error)
                    }

                })
            }

        })
    },
    /**
     * init a modal box
     * 
     * @param {string} name 
     */
    init: name => {
        const div = document.createElement('div');
        div.setAttribute('id', name || 'modal');
        document.getElementsByTagName('body')[0].appendChild(div)
    },
    zIndex: 1000,
    isEmpty: function (object) {
        if (object === null || object === undefined) {
            return true;
        }
        for (var i in object) {
            return false;
        }
        return true;
    }
}

// if vue in window
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Modal)
}

module.exports = Modal;