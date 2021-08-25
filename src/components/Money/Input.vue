<template>
  <div class="input">
    <span>{{input}}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  input: string = '0.00';
}
</script>

<style lang="scss" scoped>
.input {
  height: 90px;
  padding-left: 4px;
  padding-top: 20px;
  font-size: 48px;
  color: #306ECC;
  border-bottom: 1px solid #306ECC;
  font-family: Consolas, monospace;
  > .content {
  }
}
</style>