<template>
  <div class="money">
    <header>
      <Title/>
      <Type/>
    </header>
    <main>
      <div class="body">
        <Input/>
        <div class="block">
          <Time/>
          <Notes/>
          <Labels :data-source="labels"/>
        </div>
        <div class="save">
          <Save/>
        </div>
        <div class="number">
          <NumberPad/>
        </div>
      </div>
    </main>
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
import NumberPad from '@/components/Money/NumberPad.vue';

@Component({
  components: {NumberPad, Save, Labels, Notes, Time, Input, Type, Title}
})
export default class Money extends Vue {
  labels = ['衣服', '吃饭', '住房', '出行'];
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.money {
  height: 100%;
  padding-bottom: 5px;
}

header {
  height: 110px;
}

main {
  height: calc(100% - 110px);

  > .body {
    height: 100%;
    position: relative;
    > .block {
      padding: 0 14px;
      height: 88%;
      display: none;

    }

    > .save {
      height: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
      display: none;
    }

    > .number{
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
}


</style>