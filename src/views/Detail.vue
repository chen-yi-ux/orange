<template>
<div class="nav-wrapper">
  <div class="detail">
    <p>Detail.vue</p>
  </div>
  <Nav/>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class Detail extends Vue {

}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  display: flex;
  border: 1px solid green;
  flex-direction: column;
  height: 100vh;
}
.detail{
  border: 1px solid blue;
  flex-grow: 1;       // 尽量把所有高度都给 .detail
  overflow: auto;      // 当这个元素内容太大，显示滚动条
}
</style>