var modal = {
    install: function (Vue, options) {

        var defaultOptions = Object.assgin({
            name: '$modal'
        },options)
        Vue.prototype[defaultOptions.name] = function () {

        }
    }
}

module.exports = modal;