<template>
  <div>
    <div class="labels">
      <Icon name="label" class="labelIcon"/>
      <span class="content">分类</span>
    </div>
    <div class="scrollArea">
      <ul class="icons">
        <li v-for="(item, index) in dataSource" :key="index">
          <div class="item"
               :class="selectedLabels.indexOf(item)>=0 && 'selected'"
               @click="select(item)">
            <Icon :name="item.svg" class="itemIcon"/>
            <span>{{ item.name }}</span>
          </div>
        </li>
        <li @click="goEdit">
          <div class="item">
            <Icon name="设置" class="itemIcon"/>
            <span>设置</span>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Label} from '@/custom';

@Component
export default class Labels extends Vue {
  @Prop(Array) dataSource: Label | undefined;
  selectedLabels: Label = [];

  select(item: Label) {
    const index = this.selectedLabels.indexOf(item);
    if (index >= 0) {
      this.selectedLabels.splice(index, 1);
    } else {
      this.selectedLabels.push(item);
    }
  }

  goEdit() {
    this.$router.push('/money/edit');
  }
}
</script>

<style lang="scss" scoped>
.labels {
  font-size: 18px;
  padding-top: 13px;
  display: flex;
  align-items: center;
  > .labelIcon {
    width: 30px;
    height: 30px;
  }
  > .content {
    padding-left: 5px;
    color: #636363;
  }
}

.scrollArea {
  height: 35vh;
  overflow: auto;
  .icons {
    display: flex;
    flex-wrap: wrap;
    padding: 12px 0;
    > li {
      width: 33.33333%;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      > .item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 16px;
        width: 90%;
        height: 85px;
        border-radius: 20px;
        &.selected {
          background: lavenderblush;
          svg {
            animation: shake 0.3s linear;
          }
        }
        > .itemIcon {
          width: 55px;
          height: 55px;
        }
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
</style>