<template>
  <div class="money">
    <header>
      <Title/>
      <Type :value.sync="record.type"/>
    </header>
    <main>
      <div class="body">
        <div class="block">
          <Input :value.sync="record.amount"/>
          <Time @update:value="record.date = $event"/>
          <Notes :value.sync="record.notes"/>
          <Labels :type="record.type"
                  :selected-labels.sync="record.labels"
                  />
        </div>
        <div class="save">
          <Save/>
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
import {Label} from '@/custom';

type Record = {
  type: string,
  amount: string,
  date: string,
  notes: string,
  labels: Label
}

@Component({
  components: {Save, Labels, Notes, Time, Input, Type, Title}
})
export default class Money extends Vue {
  record: Record = {type: '-', amount: '0.00', date: '', notes: '', labels: {name: '三餐', svg: '三餐', type: '-'}};

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

    > .block {
      padding: 0 14px;
      height: 88%;
    }

    > .save {
      height: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}


</style>