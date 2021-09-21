<template>
  <div>
    <Layout>
      <div class="title">
        <span>{{ typeName }}</span>
        <Icon name="down" class="icon" @click="changeType"></Icon>
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
          <div class="number">{{Amount}}元</div>
        </div>
      </div>
    </Layout>
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

use(
    [TooltipComponent, PieChart, CanvasRenderer, LegendComponent, TitleComponent]
);

type Data = {value: number ,name: string}

@Component({
  components: {Echarts},
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

  get records(){
    console.log(this.month);
    return (this.$store.state as RootState).recordList.filter((record:RecordItem) => record.type === this.type && moment(record.date).isSame(this.time, 'month'));
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

  get Amount(){
    if(this.records.length === 0){return 0;}
    let amount: number = 0;
    let item: RecordItem;
    for(item of this.records){
      amount += item.amount;
    }
    return amount;
  }

  get chartList(){
    if(this.records.length === 0){return [];}
    const chartList = [{name: this.records[0].labels.name, value: this.records[0].amount}];
    let flag:boolean = false;
    for(let i=1; i<this.records.length; i++){
      flag = false;
      for(let j=0; j<chartList.length; j++){
        if(chartList[j].name === this.records[i].labels.name){
          chartList[j].value += this.records[i].amount;
          flag = true;
        }
      }
      if(!flag){
        chartList.push({name: this.records[i].labels.name, value: this.records[i].amount});
      }
    }
    return chartList;
  }

  get option() {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      color: ['#DF7861', '#ECB390', '#D4E2D4', '#FCF8E8', '#86ABA1', '#F7DAD9', '#DEECFC'],
      series: [
        {
          name: '',
          type: 'pie',
          radius: '50%',
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
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: black;
  border: 2px solid #F69E7B;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

  > .icon {
    width: 28px;
    height: 28px;
    margin-left: 10px;
  }
}

.main {
  background: #fbfbfc;
  height: calc(100% - 70px);

  > .chooseMonth {
    height: 80px;
    padding: 20px;
    flex-wrap: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;

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
    //height: calc(100% - 80px);
    //padding-bottom: 100px;
    height: 350px;
  }

  > .total {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: #144a74;
    font-size: 22px;
    padding: 0 10px;
    > .number{
      padding-left: 10px;
    }
  }
}

</style>