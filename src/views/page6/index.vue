<template>
  <div @click="change">{{ onlyperson }}</div>
</template>

<script setup lang="ts">
import { reactive, readonly } from "vue";
let person = reactive({ count: 1 });
let onlyperson = readonly(person);
onlyperson;
let change = () => {
  //   person.count++;
  //   onlyperson.count++;
};
</script>

<style scoped></style>
