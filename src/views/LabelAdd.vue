<template>
  <div class="add">
    <div class="title">
      <Icon name="left-white" @click="goBack"/>
      <span class="content">
        添加{{ typeName }}类别
      </span>
      <span class="finish" @click="finish">完成</span>
    </div>
    <div class="name">
      <span>类别名称</span>
      <input type="text" placeholder="<输入名称>"
             v-model="name">
    </div>
    <div class="icons">
      <span>图标</span>
      <div class="scrollArea">
        <ul>
          <li v-for="item in dataSource" :key="item" @click="select(item)">
            <div class="icon-wrapper" :class="{selected: selectIcon === item}">
              <Icon :name="item"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import AllLabels from '@/constants/AllLabels';
import {moneyType} from '@/custom';
import labelListModel from '@/models/labelListModel';
import store from '@/store/index2';


@Component
export default class LabelAddExpenses extends Vue {
  dataSource = AllLabels;
  selectIcon: string = AllLabels[0];
  name = '';
  type = this.$route.params.type as moneyType;

  select(item: string) {
    this.selectIcon = item;
  }

  goBack() {
    this.$router.back();
  }

  get typeName() {
    const typeList = {
      '-': '支出',
      '+': '收入'
    };
    return typeList[this.$route.params.type as moneyType];
  }

  finish() {
    const labelList = store.labelList;
    const name = this.name;
    const nameList = labelList.map((item: { name: string; }) => item.name);
    if (name === '') {
      window.alert('请输入类别名称');
    } else if (nameList.indexOf(name) >= 0) {
      window.alert('该类别名称已存在');
    } else {
      labelListModel.create({id: '', name: this.name, svg: this.selectIcon, type: this.type})
      window.alert('已添加');
      this.$router.back();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.add {
  height: 100%;

  > .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $color-highlight;
    height: 60px;
    padding: 0 10px;
    padding-top: 10px;
    color: white;

    > .icon {
      width: 12%;
      padding-right: 15px;
    }

    > .content {
      font-size: 22px;
    }

    > .finish {
      font-size: 16px;
      width: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  > .name {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #e3e3e3;
    font-size: 18px;
    color: black;

    > input {
      background: none;
      outline: none;
      border: 0;
      text-align: right;
    }
  }

  > .icons {
    color: black;
    font-size: 18px;
    height: calc(100% - 105px);
    padding: 10px;

    > .scrollArea {
      overflow: auto;
      height: 95%;

      > ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 10px;

        > li {
          width: 25%;
          height: 30%;
          display: flex;
          align-items: center;
          justify-content: center;

          > .icon-wrapper {
            border: 1px solid #e3e3e3;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 30%;
            width: 80%;
            height: 71px;
            margin-bottom: 10px;

            &.selected {
              background: lavenderblush;

              svg {
                animation: shake 0.3s linear;
              }
            }

            > .icon {
              width: 45px;
              height: 45px;
            }

            @keyframes shake {
              0% {
                transform: rotate(0deg);
              }
              20% {
                transform: rotate(20deg);
              }
              40% {
                transform: rotate(0deg);
              }
              80% {
                transform: rotate(-20deg);
              }
              100% {
                transform: rotate(0deg);
              }
            }
          }
        }
      }
    }
  }
}

</style>