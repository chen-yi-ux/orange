<template>
  <div class="edit">
    <div class="title">
      <Icon name="left" class="titleIcon" @click="goBack"/>
      <span class="title-wrapper">编辑支出</span>
    </div>
    <div class="content">
      <div class="money">
        <div class="label">
          <Icon :name="recordItem.labels.svg" class="labelIcon"/>
          <span class="label-wrapper">{{ recordItem.labels.name }}</span>
        </div>
        <span class="amount">￥{{recordItem.amount}}</span>
      </div>
      <div class="xxx">
        <div class="list">
          <div class="content-wrapper">
            <div class="main">
              <Icon name="time" class="icon"/>
              <span class="wrapper">时间</span>
            </div>
            <div class="input">{{recordItem.date}}</div>
          </div>
          <div class="content-wrapper">
            <div class="main">
              <Icon name="note" class="icon"/>
              <span class="wrapper">备注</span>
            </div>
            <div class="input">{{recordItem.notes}}</div>
          </div>
        </div>
        <div class="footer">
          <div class="save">保存</div>
          <div class="delete" @click="remove(record)">删除</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Time from '@/components/Money/Time.vue';
import Notes from '@/components/Money/Notes.vue';
import {Component} from 'vue-property-decorator';
import {RecordItem} from '@/custom';

@Component({
  components: {Notes, Time}
})
export default class RecordEdit extends Vue {
  id = parseInt(this.$route.params.id);
  record = this.$store.state.recordList.filter((item:RecordItem) => item.id === this.id)[0];

  get recordItem(){
    console.log(this.record);
    console.log(this.record.id);
    return this.record;
  }

  goBack(){
    this.$router.back();
  }

  remove(record: RecordItem){
    record = this.record;
    this.$store.commit('removeRecord', record);
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.edit {
  height: 100%;

  > .title {
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 6px;
    padding-top: 10px;
    border-bottom: 1px solid #e3e3e3;
    color: black;
    > .titleIcon {
      width: 25px;
      height: 25px;
    }

    > .title-wrapper {
      padding-left: 8px;
      font-size: 20px;
    }
  }

  > .content {
    height: calc(100% - 60px);
    background: #fbfbfc;
    > .money {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      height: 80px;
      border-bottom: 1px solid #306ECC;
      padding-right: 12px;
      padding-top: 18px;
      > .label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        padding-left: 10px;
        color: black;

        > .labelIcon {
          width: 40px;
          height: 40px;
        }

        > .label-wrapper {
          padding-left: 8px;
          font-size: 20px;
        }
      }
      > .amount {
        font-size: 30px;
        font-family: Consolas, monospace;
        color: #306ECC;
      }
    }

    > .xxx{
      height: calc(100% - 80px);
      position: relative;
      > .list{
        padding: 0 10px;
        flex-grow: 1;
        > .content-wrapper {
          height: 60px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          padding-top: 12px;
          border-bottom: 1px solid #e3e3e9;
          > .main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70px;
            > .icon {
              width: 24px;
              height: 24px;
            }
            > .wrapper {
              padding-right: 5px;
              font-size: 18px;
            }
          }
          > .input{
            color: black;
            padding-left: 10px;
            font-size: 20px;
          }
        }
      }
      > .footer {
        height: 10%;
        width: 100%;
        background: #fbfbfc;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        font-size: 24px;
        position: absolute;
        bottom: 10px;
        > .save{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 50px;
          margin-right: 5px;
          border-radius: 10px;
          background: #FF983B;
          color: white;
        }
        > .delete{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40%;
          height: 50px;
          margin-left: 5px;
          border-radius: 10px;
          background: #FAEEF0;
          color: #D94D68;
        }
      }
    }
  }
}
</style>