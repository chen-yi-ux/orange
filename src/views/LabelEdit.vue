<template>
  <div class="edit">
    <div class="title">
      <Icon name="left-white" class="icon" @click="goBack"/>
      <ul>
        <li class="income"
            :class="type === '+' && 'selected'"
            @click="select('+')">收入
        </li>
        <li class="expenses"
            :class="type === '-' && 'selected'"
            @click="select('-')">支出
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="labels">
        <ul>
          <li v-for="item in dataSource" :key="item.name">
            <div class="wrapper">
              <Icon :name="item.svg"/>
              <span>{{ item.name }}</span>
            </div>
            <div class="icon-wrapper" @click="remove(item)">
              <Icon name="删除"/>
            </div>
          </li>
        </ul>
      </div>
      <div class="add" @click="goAdd">
        <Icon name="add"/>
        添加类别
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Label} from '@/custom';
import store from '@/store/index2';

@Component
export default class LabelEdit extends Vue {
  type = '-';

  goBack() {
    this.$router.back();
  }

  get dataSource() {
    return store.labelList.filter((item) => item.type === this.type);
  }

  select(type: string) {
    this.type = type;
  }

  goAdd() {
    this.$router.push(`/money/edit/add/${this.type}`);
  }

  remove(item: Label) {
    store.removeLabel(item);
    this.$forceUpdate();
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.edit {
  height: 100%;

  > .title {
    height: 110px;
    background: $color-highlight;
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 10px;

    > .icon {
      width: 24px;
      height: 24px;
    }

    > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 10px;

      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        font-size: 20px;
        height: 2.2em;
        border: 1px solid black;

        &.income {
          border-radius: 15px 0 0 15px;
        }

        &.expenses {
          border-radius: 0 15px 15px 0;
        }

        &.selected {
          background: white;
          color: $color-highlight;
          border: 1px solid white;
        }
      }
    }
  }

  > .content {
    height: calc(100% - 110px);

    > .labels {
      height: 85%;
      overflow: auto;

      > ul > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 45px;
        padding: 0 15px;
        border-bottom: 1px solid #e3e3e3;

        > .wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;

          > .icon {
            margin-right: 8px;
            width: 30px;
            height: 30px;
          }
        }

        > .icon-wrapper > .icon {
          margin-top: 8px;
          width: 20px;
          height: 20px;
        }
      }
    }

    .add {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
      height: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      font-size: 18px;
      flex-direction: column;

      > .icon {
        width: 23px;
        height: 23px;
      }
    }
  }
}


</style>