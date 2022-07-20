<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { triggerRef, reactive } from "vue";
let message = reactive<Number[]>([1]);
setTimeout(() => {
  message.push(...[1, 2, 3, 4]);
  console.log(message);
}, 3000);
</script>

<style scoped></style>
