<template>
  <button>
    保存
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Save extends Vue {

}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

button {
  width: 35%;
  height: 80%;
  background: $color-highlight;
  color: white;
  font-size: 24px;
  border-radius: 35px;
  border: none;
}
</style>