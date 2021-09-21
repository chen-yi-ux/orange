<template>
  <div class="notes">
    <Icon name="note" class="noteIcon"/>
    <span class="content">备注</span>
    <input type="text"
           v-model="value"
           placeholder="...">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  height: 60px;
  font-size: 18px;
  padding: 13px 0;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;

  > .noteIcon {
    width: 27px;
    height: 27px;
  }

  > .content {
    padding-left: 5px;
    padding-right: 18px;
    color: #636363;
  }

  input {
    background: none;
    outline: none;
    border: 0;
    color: black;
    font-size: 20px;
  }
}
</style>