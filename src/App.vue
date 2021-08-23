<template>
  <div id="app">
    <router-view/>
    <div>
      <router-link to="/detail">明细</router-link>
      |
      <router-link to="/money">记一笔</router-link>
      |
      <router-link to="/chart">图表</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
