<template>
  <div>{{ state.a }}</div>
  <div>{{ state.first.b }}</div>
  <div>{{ state.first.secound.c }}</div>
  <button @click="change1">改变a</button>
  <button @click="change2">改变b</button>
  <button @click="change3">改变c</button>
</template>

<script setup lang="ts">
import { shallowReactive } from "vue";
let obj = { a: 1, first: { b: 2, secound: { c: 3 } } };
let state = shallowReactive(obj);
let change1 = () => {
  state.a = 11;
  console.log(state.a);
};
let change2 = () => {
  state.first.b = 12;
  console.log(state.first.b);
};
let change3 = () => {
  state.first.secound.c = 13;
  console.log(state.first.secound.c);
};
</script>
