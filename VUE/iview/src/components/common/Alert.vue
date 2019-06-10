<template>
<!-- 组件化，降低耦合度 -->
    <div class="alert">
        {{msg}}
        </br>
        <Button type="success" @click="hidden">OK</Button>
    </div>
</template>

<script>
export default {
    name: 'Alert',
    // 从外接受的数据
    props: ['msg'],
    data() {
        return {

        }
    },
    methods: {
        hidden () {
            // 发送数据，可以两个参数：自己取得参数,认为是方法 
            this.$emit('fromChild', false)
        }
    },
}
</script>

<style scoped>
.alert {
    background-color: rgba(248, 194, 18, 0.952);
    font-size: 30px;
    text-align: center;
    width: 300px;
    height: 200px;
    border: 1px solid #aaa;
    border-radius: 5px;
    /* 居于正中间 */
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* 不会受影响 */
    z-index: 999;

}
</style>