<template>
  <div>
      <div class="title">
        <div class="left" @click="goBack">
          <Icon name="left"/>
        </div>
        <div class="middle">
          <span>{{ typeName }}</span>
          <Icon name="down" class="icon" @click="changeType"></Icon>
        </div>
        <div class="right"></div>
      </div>
      <div class="main">
        <div class="chooseMonth">
          <Icon name="Arrow-left" class="icon-left" @click="Before"/>
          <span class="month">{{ month }}</span>
          <Icon name="Arrow-right" class="icon-right" @click="After"/>
        </div>
        <Echarts :option="option"/>
        <div class="total">
          <div>总{{ typeName }}</div>
          <div class="number">{{ Amount }}元</div>
        </div>
        <hr/>
        <div class="base" v-if="records.length > 0">
          <div class="item" v-for="item in chartList" :key="item.name">
            <div class="block">
              <span class="item-icon">
                <Icon :name="item.svg"/>
              </span>
              <span class="item-name">{{ item.name }}</span>
              <span class="item-per">{{item.per}}%</span>
            </div>
            <div class="item-amount">{{ item.value }}</div>
          </div>
        </div>
        <div class="base1" v-else>
          <Blank/>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Echarts from 'vue-echarts';
import {use} from 'echarts/core';
import {LegendComponent, TitleComponent, TooltipComponent} from 'echarts/components';
import {PieChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
import {RecordItem, RootState} from '@/custom';
import moment from 'moment';
import Blank from '@/components/Blank.vue';

use(
    [TooltipComponent, PieChart, CanvasRenderer, LegendComponent, TitleComponent]
);

type Data = { value: number, name: string }

@Component({
  components: {Blank, Echarts},
})
export default class Chart extends Vue {
  type: string = '-';
  time = moment();
  month = this.time.format('M月');

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  changeType() {
    if (this.type === '-') {
      this.type = '+';
    } else if (this.type === '+') {
      this.type = '-';
    }
  }

  get records() {
    console.log(this.month);
    return (this.$store.state as RootState).recordList.filter((record: RecordItem) => record.type === this.type && moment(record.date).isSame(this.time, 'month'));
  }

  goBack(){
    this.$router.replace('/detail');
  }

  get typeName() {
    if (this.type === '-') {
      return '支出';
    } else if (this.type === '+') {
      return '收入';
    }
    return '支出';
  }

  get Month() {
    if (this.time.year() === moment().year()) {
      return this.time.format('M月');
    } else {
      return this.time.format('YYYY年M月');
    }
  }

  Before() {
    this.time = this.time.subtract(1, 'month');
    if (this.time.year() === moment().year()) {
      this.month = this.time.format('M月');
    } else {
      this.month = this.time.format('YYYY年M月');
    }
  }

  After() {
    this.time = this.time.add(1, 'month');
    if (this.time.year() === moment().year()) {
      this.month = this.time.format('M月');
    } else {
      this.month = this.time.format('YYYY年M月');
    }
  }

  get Amount() {
    if (this.records.length === 0) {return 0;}
    let amount: number = 0;
    let item: RecordItem;
    for (item of this.records) {
      amount += item.amount;
    }
    return amount;
  }

  get chartList() {
    if (this.records.length === 0) {return [];}
    let chartList = [{name: this.records[0].labels.name, value: this.records[0].amount, svg: this.records[0].labels.svg, per: 0}];
    let flag: boolean = false;
    for (let i = 1; i < this.records.length; i++) {
      flag = false;
      for (let j = 0; j < chartList.length; j++) {
        if (chartList[j].name === this.records[i].labels.name) {
          chartList[j].value += this.records[i].amount;
          flag = true;
        }
      }
      if (!flag) {
        chartList.push({name: this.records[i].labels.name, value: this.records[i].amount, svg: this.records[i].labels.svg, per: 0});
      }
    }
    for(let i=0; i<chartList.length; i++){
      chartList[i].per = parseFloat((chartList[i].value * 100 / this.Amount).toFixed(2));
      chartList[i].value = parseFloat(chartList[i].value.toFixed(2));
      // 解决 js 的浮点运算 bug
    }
    chartList = chartList.sort((b, a) => a.per - b.per);
    return chartList;
  }

  get option() {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      color: ['#ea635c', '#ffbd99', '#f5c05f', '#89acf7', '#c2db63', '#83d995', '#DEECFC'],
      series: [
        {
          name: '',
          type: 'pie',
          radius: '60%',
          center: ['50%', '40%'],
          itemStyle: {
            borderRadius: 8,
            borderColor: '#fff',
            borderWidth: 1
          },
          data: this.chartList,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.title {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  color: white;
  //box-shadow: inset 0 0 50px 5px #FF983B;
  background: #FF983B;
  //position: fixed;
  //left: 0;
  //top: 0;
  width: 100%;
  > .left{
    padding-left: 10px;
    width: 32px;
    height: 32px;
    > .icon {
      width: 28px;
      height: 28px;
    }
  }
  > .middle{
    > .icon {
      width: 28px;
      height: 28px;
      margin-left: 10px;
    }
  }
  > .right{
    width: 32px;
    height: 32px;
  }
}

.main {
  height: calc(100% - 70px);
  //position: fixed;
  //left: 0;
  top: 70px;
  width: 100%;

  > .chooseMonth {
    height: 60px;
    padding: 20px;
    flex-wrap: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;

    > .month {
      font-size: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #915931;
      width: 180px;
    }

    > .icon-left {
      width: 30px;
      height: 30px;
    }

    > .icon-right {
      width: 30px;
      height: 30px;
    }
  }

  > .echarts {
    width: 100%;
    height: 250px;
  }

  > .total {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #144a74;
    font-size: 22px;
    padding: 0 10px;
    padding-bottom: 5px;
    height: 38px;
    > .number {
      padding-left: 10px;
    }
  }

  > .base {
    height: calc(100% - 350px);
    overflow: auto;
    box-shadow: 3px 0 5px #e3e3e3;
    > .item {
      border-bottom: 1px solid #e3e3e3;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      height: 50px;
      padding: 0 5px;
      font-size: 18px;
      > .block{
        display: flex;
        align-items: center;
        justify-content: center;
        > .item-icon {
          > .icon {
            width: 30px;
            height: 30px;
          }
        }

        > .item-name {
          padding-left: 5px;
          color: black;
        }

        > .item-per {
          padding-left: 10px;
          color: #6e6e6e;
        }
      }
      > .item-amount {
          color: black;
      }
    }
  }
  > .base1{
    margin-top: 5vh;
  }
}

</style>