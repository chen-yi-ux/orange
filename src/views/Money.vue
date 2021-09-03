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
          <Notes @update:value="record.notes = $event"/>
          <Labels :type="record.type"
                  :selected-labels.sync="record.labels"
          />
        </div>
        <div class="save">
          <button @click="saveRecord">
            保存
          </button>
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
import {RecordItem} from '@/custom';
import createId from '@/lib/createId';

@Component({
  components: {Labels, Notes, Time, Input, Type, Title}
})
export default class Money extends Vue {
  record: RecordItem = {type: '-', amount: 0, date: '', notes: '', labels: {name: '三餐', svg: '三餐', type: '-'}};

  get recordList(){
    return this.$store.state.recordList;
  }

  saveRecord() {
    this.record.id = createId();
    this.$store.commit('createRecord', this.record);
    this.$router.push('/detail');
  }

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

      > button {
        width: 35%;
        height: 80%;
        background: $color-highlight;
        color: white;
        font-size: 24px;
        border-radius: 35px;
        border: none;
      }
    }
  }
}


</style>