<template>
  <div class="blank">
    <div class="icon">
      <Icon name="无数据"/>
    </div>
    <div>什么都没有哦，快去记一笔吧</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Blank extends Vue {

}
</script>

<style lang="scss" scoped>
.blank{
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #8a96a3;
  > .icon{
    width: 80px;
    height: 80px;
    > svg{
      width: 70px;
      height: 70px;
    }
  }
}
</style>