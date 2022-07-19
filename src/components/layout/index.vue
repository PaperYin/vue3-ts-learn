<template>
  <div>
    <div class="main">
      <header>
        <p>vue3 - ts</p>
        <p>好好学习，天天向上</p>
        <div class="goback" @click="goback">首页</div>
      </header>
      <router-view class="view_main"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    $router: useRouter();
    return {};
  },
  methods: {
    goback() {
      this.$router.push("home");
    },
  },
});
</script>

<style scoped lang="scss">
.main {
  background: #d1e3ff;
  height: 100vh;
  width: 100vw;
  header {
    position: relative;
    width: 100vw;
    height: 80px;
    line-height: 40px;
    color: black;
    text-align: center;
    p:nth-child(1) {
      font-size: 38px;
      font-weight: bold;
    }
    p:nth-child(2) {
      font-size: 16px;
    }
    .goback {
      position: absolute;
      top: 50%;
      right: 50px;
      transform: translateY(-50%);
      height: 50px;
      min-width: 120px;
      border-radius: 50px;
      background: #d1e3ff;
      box-shadow: 20px 20px 60px #b5bec8, -20px -20px 60px #f5ffff;
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
      line-height: 50px;
    }
  }
  .view_main {
    height: 500px;
    width: 1000px;
    margin: 10px auto;
  }
}
</style>
