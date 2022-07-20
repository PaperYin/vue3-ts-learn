<template>
  <!-- <div>{{ n }}</div>
  <div>{{ state }}</div>
  <button @click="change">change</button> -->
</template>

<script setup lang="ts">
import { reactive, toRaw } from "vue";

const obj = reactive({
  foo: 1,
  bar: 1,
});

const state = toRaw(obj);
// 响应式对象转化为普通对象

const change = () => {
  console.log(obj, state);
};
</script>

<style scoped></style>
