<template>
  <div>{{ obj }}</div>
  <div>{{ state }}</div>
  <button @click="change">change</button>
</template>

<script setup lang="ts">
import { reactive, toRef } from "vue";

let obj = reactive({
  foo: 1,
  bar: 2,
});
let state = toRef(obj, "bar");
let change = () => {
  state.value++;
  console.log(obj, state);
};
</script>
