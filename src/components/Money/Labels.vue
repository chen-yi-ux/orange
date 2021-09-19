<template>
  <div>
    <div class="labels">
      <Icon name="label" class="labelIcon"/>
      <span class="content">分类</span>
    </div>
    <div class="scrollArea">
      <ul class="icons">
        <li v-for="item in dataSource" :key="item.name">
          <div class="item"
               :class="{selected: item.name === selectedLabels.name}"
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
import {Component, Prop, Watch} from 'vue-property-decorator';
import {Label, RootState} from '@/custom';

@Component
export default class Labels extends Vue {
  @Prop(String) type!: string;
  @Prop() selectedLabels!: Label;

  beforeCreate(){
    this.$store.commit('fetchLabels');
  }

  get dataSource() {
    console.log((this.$store.state as RootState).labelList);
    return (this.$store.state as RootState).labelList.filter((item:Label) => item.type === this.type);
  }

  @Watch('type')
  updateLabel() {
    if (this.type === '-') {
      this.select({name: '三餐', svg: '三餐', type: '-'});
    } else {
      this.select({name: '工资', svg: '工资', type: '+'});
    }
  }

  select(item: Label) {
    this.$emit('update:selectedLabels', item);
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
    width: 27px;
    height: 27px;
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
      height: 85px;
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
        height: 75px;
        border-radius: 20px;

        &.selected {
          background: lavenderblush;

          svg {
            animation: shake 0.3s linear;
          }
        }

        > .itemIcon {
          width: 45px;
          height: 45px;
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