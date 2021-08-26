<template>
<div class="add">
  <div class="title">
    <Icon name="left-white" @click="goBack"/>
    <span class="content">添加收入类别</span>
    <span class="finish" @click="goBack">完成</span>
  </div>
  <div class="name">
    <span>类别名称</span>
    <input type="text" placeholder="<输入名称>">
  </div>
  <div class="icons">
    <span>图标</span>
    <ul>
      <li>图1</li>
      <li>图2</li>
      <li>图3</li>
      <li>图4</li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class LabelAddIncome extends Vue {
  goBack(){
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.add{
  height: 100%;
  > .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $color-highlight;
    height: 60px;
    padding: 0 10px;
    padding-top: 10px;
    color: white;
    > .icon{
      width: 12%;
      padding-right: 15px;
    }
    > .content{
      font-size: 22px;
    }
    > .finish{
      font-size: 16px;
      width: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  > .name{
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #e3e3e3;
    font-size: 18px;
  }

  > .icons{
    font-size: 18px;
    height: calc(100% - 105px);
    overflow: auto;

    > ul{
      border: 1px solid red;
    }
  }
}

</style>