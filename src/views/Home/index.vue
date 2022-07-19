<template>
  <div class="main">
    <main>
      <div class="list">
        <div
          class="nav"
          @click="routeGo(index)"
          v-for="(item, index) in list"
          :key="index"
        >
          {{ index + 1 }}.{{ item }}
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
import list from "./list/list";
export default defineComponent({
  setup() {
    const $router = useRouter();
    return { list: list };
  },
  methods: {
    routeGo(index: number | string) {
      console.log(index);
      this.$router.push(`/${index}`);
    },
  },
});
</script>

<style scoped lang="scss">
main {
  // background: pink;
  min-height: 300px;
  width: 1000px;
  margin: 100px auto;
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .nav {
      height: 50px;
      min-width: 120px;
      border-radius: 24px;
      text-align: center;
      line-height: 50px;
      background: #d1f0ff;
      box-shadow: 13px 13px 26px #bababa, -10px -13px 16px #ffffff4a;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      letter-spacing: 2px;
      caret-color: rgba(0, 0, 0, 0);
      margin: 10px;
    }
  }
}
</style>
