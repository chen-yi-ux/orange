<template>
<div>哈哈哈</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class RecordEdit extends Vue {
  created(){
    const id = this.$route.params.id;

  }
}
</script>

<style lang="scss" scoped>

</style>