<template>
<div class="notes">
  <Icon name="note" class="noteIcon"/>
  <span class="content">备注</span>
  <input type="text" placeholder="...">
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {

}
</script>

<style lang="scss" scoped>
.notes{
  font-size: 18px;
  padding: 13px 0;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  > .noteIcon{
    width: 30px;
    height: 30px;
  }
  > .content{
    padding-left: 5px;
    padding-right: 18px;
    color: #636363;
  }
  input{
    background:none;
    outline:none;
    border:0;
    color: black;
    font-size: 20px;
  }
}
</style>