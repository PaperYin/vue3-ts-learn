<template>
  <div @click="change">{{ message }}</div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
let message = ref<number | string>("我是paper");
const change = () => {
  message.value = "现在我是papering";
};
</script>

<style scoped></style>
