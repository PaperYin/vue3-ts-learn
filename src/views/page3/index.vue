<template>
  <div>
    <button @click="changeMsg">改变数据</button>
    <button @click="changepage">强制更新视图</button>
    <div>{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, shallowRef, triggerRef } from "vue";
type obj = {
  name: String;
};
let message: Ref<obj> = shallowRef({ name: "paper" });
const changeMsg = () => {
  message.value.name = "paperimg";
  console.log(message.value);
};
const changepage = () => {
  triggerRef(message);
};
</script>

<style scoped></style>
