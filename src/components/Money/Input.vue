<template>
  <div class="input">
    <input type="text" value="0.00"
           onfocus="if(value==='0.00') {value=''}"
           onblur="if (value==='') {value='0.00'}"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Input extends Vue {
}
</script>

<style lang="scss" scoped>
.input {
  height: 90px;
  padding-left: 4px;
  padding-top: 30px;
  border-bottom: 1px solid #306ECC;

  > input {
    width: 100%;
    font-size: 48px;
    font-family: Consolas, monospace;
    color: #306ECC;
    background: none;
    outline:none;
    border:0;
  }
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #306ECC;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #306ECC;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #306ECC ;
}

</style>