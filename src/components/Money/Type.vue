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
  box-shadow: 0 2px 2px #e3e3e3;
  > li{
    width: 50%;
    height: 46px;
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
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid $color-highlight;
    }
  }


}
</style>