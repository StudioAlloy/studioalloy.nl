<template>
  <div id="default-HeaderBackground">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1680 935">
      <path fill="#0C162D" fill-rule="evenodd" d="M1680,522.923369 C1323.3007,786.448747 1121.53479,923.188714 1074.70228,933.143271 C997.778052,949.494021 296.588935,821.595309 226.200356,775.884431 C196.686725,756.718055 121.286607,655.832134 -1.42108547e-13,473.226666 L-1.42108547e-13,0 L1680,0 L1680,522.923369 L1680,522.923369 Z" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
#default-HeaderBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  svg {
    width: 100%;
  }
}
</style>
