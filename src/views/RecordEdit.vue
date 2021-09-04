<template>
  <div class="edit">
    <div class="title">
      <Icon name="left" class="titleIcon"/>
      <span class="title-wrapper">编辑支出</span>
    </div>
    <div class="content">
      <div class="money">
        <div class="label">
          <Icon name="三餐" class="labelIcon"/>
          <span class="label-wrapper">三餐</span>
        </div>
        <span class="amount">￥0.00</span>
      </div>
      <div class="xxx">
        <div class="list">
          <div class="content-wrapper">
            <div class="main">
              <Icon name="time" class="icon"/>
              <span class="wrapper">时间</span>
            </div>
            <div class="input">2021年9月4日</div>
          </div>
          <div class="content-wrapper">
            <div class="main">
              <Icon name="note" class="icon"/>
              <span class="wrapper">备注</span>
            </div>
            <div class="input">hhhh</div>
          </div>
        </div>
        <div class="footer">
          <div class="save">保存</div>
          <div class="delete">删除</div>
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

@Component({
  components: {Notes, Time}
})
export default class RecordEdit extends Vue {
  created() {
    const id = this.$route.params.id;

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