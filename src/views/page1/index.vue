<template>
  <div @click="changeMsg">{{ message }}</div>
</template>

<script setup lang="ts">
import { ref, Ref, isRef } from "vue";
let message = ref<number | string>("我是paper");
let notRef: number = 123;
const changeMsg = () => {
  message.value = "现在进行时 papering";
  console.log(isRef(message));
  console.log(isRef(notRef));
};
</script>

<style scoped></style>
