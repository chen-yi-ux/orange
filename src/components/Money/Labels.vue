<template>
  <div>
    <div class="labels">
      <Icon name="label" class="labelIcon"/>
      <span class="content">分类</span>
    </div>
    <div class="scrollArea">
      <ul class="icons">
        <li>
          <div class="item selected">
            <Icon name="food" class="itemIcon"/>
          </div>
          <span>吃饭</span>
        </li>
        <li>
          <div class="item">
            <Icon name="cloth" class="itemIcon"/>
          </div>
          <span>衣服</span>
        </li>
        <li>
          <div class="item">
            <Icon name="travel" class="itemIcon"/>
          </div>
          <span class="itemContent">出行</span>
        </li>
        <li>
          <div class="item">
            <Icon name="sport" class="itemIcon"/>
          </div>
          <span class="itemContent">运动</span>
        </li>
        <li>
          <div class="item">
            <Icon name="pet" class="itemIcon"/>
          </div>
          <span class="itemContent">宠物</span>
        </li>
        <li>
          <div class="item">
            <Icon name="medical" class="itemIcon"/>
          </div>
          <span class="itemContent">医疗</span>
        </li>
        <li>
          <div class="item">
            <Icon name="study" class="itemIcon"/>
          </div>
          <span class="itemContent">学习</span>
        </li>
        <li>
          <div class="item">
            <Icon name="setting" class="itemIcon"/>
          </div>
          <span class="itemContent">编辑</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Labels extends Vue {

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

.scrollArea{
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
      flex-direction: column;
      font-size: 16px;
      > .item {
        display: flex;
        justify-content: center;
        align-items: center;
        &.selected{
          border: 1px solid #FF983B;
        }
        > .itemIcon {
          width: 55px;
          height: 55px;
        }
      }
    }
  }
}
</style>