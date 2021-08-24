<template>
  <nav>
    <router-link to="/detail" class="item">
      <Icon name="detail"/>
      明细
    </router-link>
    <router-link to="/money" class="item">
      <span class="item2">
        记一笔
      </span>
    </router-link>
    <router-link to="/chart" class="item">
      <Icon name="chart"/>
      图表
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';


@Component
export default class Nav extends Vue {

}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  flex-direction: row;
  font-size: 12px;
  > .item{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.33333%;
    flex-direction: column;
    padding: 4px 0;
    > .item2{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #FF983B;
      border-radius: 35px;
      font-size: 18px;
      color: white;
    }
  }

  .icon{
    width: 28px;
    height: 28px;
  }

}


</style>