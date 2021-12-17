<template>
  <div id="app">
    <router-view class="router-view"/>
  </div>
</template>

<style lang="scss">
@import '~@/assets/style/reset.scss';
@import '~@/assets/style/helper.scss';

body {
  max-width: 500px;
  margin: 0 auto;
}
#app{
  line-height: 1.5;
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  border-radius: 4px;
}
.router-view{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
