<template>
  <div class="nav">
    <router-link to="/detail">
      <Icon name="detail"/>
      明细
    </router-link>
    |
    <router-link to="/money">记一笔</router-link>
    |
    <router-link to="/chart">
      <Icon name="chart"/>
      图表
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';


@Component
export default class Nav extends Vue {

}
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>