<template>
<div class="time">
  <Icon name="time" class="timeIcon"/>
  <span class="content">时间</span>
  <input type="text" placeholder="记录时间">
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Time extends Vue {

}
</script>

<style lang="scss" scoped>
.time{
  font-size: 18px;
  padding: 13px 0;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  > .timeIcon{
    width: 30px;
    height: 30px;
  }
  > .content{
    padding-left: 5px;
    padding-right: 18px;
  }
  input{

    //background:none;
    //outline:none;
    //border:0;
  }
}
</style>