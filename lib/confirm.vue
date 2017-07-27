<template>
    <div>
        <div class="confirm-main">
            <div class="confirm-title">
                 <h1 class="confirm-text">{{title || '确认'}}</h1> 
                <i class="confirm-cancel" @click="cancelFn">x</i>
            </div>
            <p class="confirm-content">{{content || '是否确定该选择'}}</p>
            <div class="confirm-footer">
                <button class="confirm-footer-success" @click="okFn">{{ok || '确定'}}</button>
                <button class="confirm-footer-default" @click="cancelFn">{{cancel || '取消'}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'content', 'ok', 'cancel'],
        data() {
            return {
            }
        },
        methods: {
            okFn: function () {
                this.$emit('$ok', this.$el)
            },
            cancelFn: function () {
                this.$emit('$cancel', this.$el)
            }
        }
    }
</script>

<style scoped>
    .confirm-main {
        width: 60%;
        max-width: 600px;
        margin: 50px auto;
        background-color: #fff;
        opacity: 1;
        border-radius: 5px;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
        min-width: 300px;
    }

    .confirm-title {
        height: 40px;
        border-bottom: 1px solid #f2f3f5;
        line-height: 40px;
        padding: 0 20px;
        color: #999;
        position: relative;
    }

    .confirm-text {
        font-weight: 300;
        font-size: 16px;
    }

    .confirm-cancel {
        font-style: normal;
        position: absolute;
        top: 0;
        right: 20px;
        cursor: pointer;
        font-size: 20px;
        font-weight: 300;
        opacity: 0.5;
    }

    .confirm-content {
        min-height: 40px;
        padding: 20px 20px;
        font-size: 14px;
        color: #333;
    }

    .confirm-cancel:hover {
        color: #333;
    }

    .confirm-footer {
        padding: 10px 20px;
        border-top: 1px solid #f2f3f5;
    }

    .confirm-footer:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: "";
        clear: both;
        height: 0;
    }

    .confirm-footer button {
        border: none;
        color: #fff;
        min-width: 60px;
        height: 30px;
        border-radius: 3px;
        font-size: 13px;
        cursor: pointer;
        float: right;
        margin-left: 10px;
    }

    .confirm-footer button.confirm-footer-success {
        background-color: #549BEB;
    }

    .confirm-footer button.confirm-footer-success:hover {
        background-color: #2680e6;
    }

    .confirm-footer button.confirm-footer-default {
        background-color: #f7f7f7;
        color: #333;
        border: 1px solid #ddd;
    }

    .confirm-footer button.confirm-footer-default:hover {
        background-color: #dedede;
        border-color: #bebebe;
    }
</style>