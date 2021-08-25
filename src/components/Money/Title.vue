<template>
  <div class="title">
    <Icon class="leftIcon" name="left" @click="goBack"/>
    <span class="content">记一笔</span>
    <span class="rightIcon"></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Title extends Vue {
  goBack(){
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-size: 24px;
  text-align: center;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .content{
  }
  > .leftIcon{
    width: 24px;
    height: 24px;
  }
  > .rightIcon{
    width: 24px;
    height: 24px;
  }
}

</style>