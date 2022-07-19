<template>
  <div>
    <div class="main">
      <header>
        <p>vue3 - ts</p>
        <p>好好学习，天天向上</p>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.main {
  background: #e0e0e0;
  height: 100vh;
  width: 100vw;
  header {
    width: 100vw;
    color: black;
    text-align: center;
    p:nth-child(1) {
      font-size: 38px;
      font-weight: bold;
    }
    p:nth-child(2) {
      font-size: 16px;
    }
  }
}
</style>
