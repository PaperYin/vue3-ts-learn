<template>
  <div @click="changeMsg">{{ message }}</div>
</template>

<script setup lang="ts">
import { Ref, shallowRef, triggerRef, customRef } from "vue";
let message = Myref("paper");
function Myref<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal: T) {
        console.log("set");
        value = newVal;
        trigger();
      },
    };
  });
}

const changeMsg = () => {
  message.value = "papering";
  console.log(message.value);
};
</script>

<style scoped></style>
