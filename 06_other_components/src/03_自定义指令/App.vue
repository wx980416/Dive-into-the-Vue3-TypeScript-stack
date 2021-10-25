<template>
  <div>
    <!-- <input type="text" ref="input" /> -->
    <input type="text" v-focus.aaa="'1212'" v-if="isShow" />
    <button @click="show">隐藏</button>
    <h1 v-format-time="'YYYY/MM/DD'">{{ timer }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  // 自定义局部指令
  directives: {
    focus: {
      created() {
        console.log('created');
      },
      beforeMount() {
        console.log('beforeMount');
      },
      mounted(el, bindings) {
        console.log('focus mounted');
        console.log(el);
        // 传入的参数
        console.log(bindings);
        console.log(bindings.value);
        console.log(bindings.modifiers);
        el.focus();
      },
      beforeUpdate() {
        console.log('beforeUpdate');
      },
      update() {
        console.log('update');
      },
      beforeUnmount() {
        console.log('beforeUnmount');
      },
      unmounted() {
        console.log('unmounted');
      },
    },
  },
  setup() {
    // const input = ref(null);
    const isShow = ref(true);

    const timer = Math.round(new Date());

    // onMounted(() => {
    //   console.log(input.value);
    //   input.value.focus();
    // });
    const show = () => {
      isShow.value = !isShow.value;
    };
    return {
      // input,
      isShow,
      show,
      timer,
    };
  },
};
</script>

<style lang="scss" scoped></style>
