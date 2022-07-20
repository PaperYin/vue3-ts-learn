<template>
  <div>{{ obj.foo }}</div>
  <div>{{ obj.bar }}</div>
  <button @click="change">change</button>
</template>

<script setup lang="ts">
import { reactive, toRefs } from "vue";

let obj = reactive({ foo: 1, bar: 2 });
//toRef 主要是为了解构赋值用，因为结构后的值一般不能响应
let { foo, bar } = toRefs(obj);
let change = () => {
  foo.value++;
  bar.value++;
};
</script>

<style scoped></style>
