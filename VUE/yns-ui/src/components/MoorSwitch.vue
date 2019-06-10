<template>
    <div class="moor-switch">
        <span>
            <slot></slot>
        </span>
        <!-- :有多个类名返回数组 左边类名右边truefalse 取非 动态类名写法 冒号内部全是js-->
        <div :class="[{closed: !checked} ,'switch-box']" @click="handleChange(value)">
            <span :class="{closed: !checked}"></span>
        </div>
        <!-- :动态绑定 -->
        <input type="checkbox" @change="handleChange" :value="value">
    </div>
</template>
<script>
export default {
    props: {
        // 谁家的们
        value: {
            type: [Boolean, String, Number],
            default: false
        },
        // 打开时的value
        activeValue: {
            type: [Boolean, String, Number],
            default: true
        },
        // 关闭时
        inactiveValue: {
            type: [Boolean, String, Number],
            default: false
        },
        // 是否能用
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        checked () {
            return this.value === this.activeValue
        }
    },
    methods: {
        handleChange(value) {
            // 子组建通知父组件input专门去修改v-mode的值  emit向外告知发生了什么事情
            // 点击value变true false，告诉绑定的value改变了。 input事件加上closed类
            this.$emit('input', !this.checked? this.activeValue: this.inactiveValue);
        }
    }
}
</script>
<style scoped>
.moor-switch {
    display: inline-block;
}
</style>
