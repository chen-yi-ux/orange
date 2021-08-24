<template>
<div>
  <Title/>
  <Type/>
  <Input/>
  <Time/>
  <Notes/>
  <Labels/>
  <Save/>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Title from '@/components/Money/Title.vue';
import Type from '@/components/Money/Type.vue';
import Input from '@/components/Money/Input.vue';
import Time from '@/components/Money/Time.vue';
import Notes from '@/components/Money/Notes.vue';
import Labels from '@/components/Money/Labels.vue';
import Save from '@/components/Money/Save.vue';
@Component({
  components: {Save, Labels, Notes, Time, Input, Type, Title}
})
export default class Money extends Vue {

}
</script>

<style lang="scss" scoped>

</style>