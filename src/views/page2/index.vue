<template>
  <div>
    <button @click="changeMsg">按钮</button>
    <div>{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, shallowRef } from "vue";
type obj = {
  name: String;
};
let message: Ref<obj> = shallowRef({ name: "paper" });
const changeMsg = () => {
  message.value.name = "paperimg";
  console.log(message.value);
};
</script>

<style scoped></style>
