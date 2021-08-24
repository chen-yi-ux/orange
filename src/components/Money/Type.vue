<template>
<div>
  <ul class="types">
    <li :class="type === '+' && 'selected'"
        @click="selectType('+')">收入</li>
    <li :class="type === '-' && 'selected'"
        @click="selectType('-')">支出</li>
  </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Type extends Vue {
  type = '-';
  selectType(type: string){
    if(type !== '-' && type !== '+'){
      throw new Error('type is unknown')
    }
    this.type = type;
  }

}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.types{
  display: flex;
  font-size: 24px;
  > li{
    width: 50%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected{
      color: $color-highlight;
    }
    &.selected::after{
      content: '';
      position: absolute;
      margin: auto;
      bottom: 0;
      right: 0;
      left: 0;         // 左右居中
      //width: 60%;
      //height: 2px;
      //background: $color-highlight;    //直线
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid $color-highlight;
    }
  }


}
</style>