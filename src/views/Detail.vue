<template>
  <div>
    <Layout>
      <div class="title">
        <div class="title-up">
          <Icon name="orange"/>
          <span class="title-wrapper">橙子记账本</span>
        </div>
        <div class="title-down">
          <a-month-picker show-time placeholder="选择日期"
                         :defaultValue="moment(getCurrentDate(), 'YYYY-MM')"
                         @change="changeDate"/>
          <div class="money">
            <div class="income">
              <div class="income-content">收入</div>
              <div class="income-amount">
                <span>{{ this.incomeAmount || 0 }}</span>
              </div>
            </div>
            <div class="expenses">
              <div class="expenses-content">支出</div>
              <div class="expenses-amount">
                <span>{{ this.expensesAmount || 0 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content" v-if="recordList.length > 0">
        <ol>
          <li v-for="(group, index) in result" :key="index">
            <div class="item1">
              <span class="date">{{ beautify(group.title) }}</span>
              <span class="amount1">{{ groupAmount(group) }}</span>
            </div>
            <ol>
              <router-link class="record" v-for="item in group.items" :key="item.id" :to="`/detail/edit/${item.id}`">
                <div class="item2">
                  <div class="name">
                    <Icon :name="item.labels.svg"/>
                    <span class="name-wrapper">{{ item.labels.name }}</span>
                  </div>
                  <span class="amount2">{{ itemAmount(item) }}</span>
                </div>
              </router-link>
            </ol>
          </li>
        </ol>
      </div>
      <div class="content1" v-else>
        <Blank/>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {RecordItem, RootState} from '@/custom';
import moment, {Moment} from 'moment';
import clone from '@/lib/clone';
import Blank from '@/components/Blank.vue';

type GroupedList = { title: string, items: RecordItem[] };
@Component({
  components: {Blank}
})
export default class Detail extends Vue {
  moment = moment;
  newDate = moment();
  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  getCurrentDate(){
    const now = moment().format('YYYY-MM');
    this.$emit('update:value', now);
    return now;
  }
  changeDate(moment: Moment) {
    const date = moment.format('YYYY-MM');
    this.newDate = moment;
    this.$emit('update:value', date);
  }

  get recordList() {
    return (this.$store.state as RootState).recordList.filter(record => moment(record.date).isSame(this.newDate, 'month'));
  }

  get result() {
    const {recordList} = this;
    if (recordList.length === 0) { return [];}
    const newList = clone(recordList).sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf());
    const groupedList = [{title: moment(newList[0].date).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = groupedList[groupedList.length - 1];
      if (moment(last.title).isSame(moment(current.date), 'day')) {
        last.items.push(current);
      } else {
        groupedList.push({title: moment(current.date).format('YYYY-MM-DD'), items: [current]});
      }
    }
    return groupedList;
  }

  beautify(time: string) {
    const now = moment();
    const day = moment(time);
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('ll');
    }
  }


  get incomeAmount() {
    let income = 0;
    let group: GroupedList;
    for (group of this.result) {
      let item: RecordItem;
      for (item of group.items) {
        if (item.type === '+') {
          income += item.amount;
        }
      }
    }
    return income;
  }

  get expensesAmount() {
    let expenses = 0;
    let group: GroupedList;
    for (group of this.result) {
      let item: RecordItem;
      for (item of group.items) {
        if (item.type === '-') {
          expenses += item.amount;
        }
      }
    }
    return expenses;
  }

  groupAmount(group: GroupedList) {
    let total = 0;
    let item: RecordItem;
    for (item of group.items) {
      if (item.type === '+') {
        total += item.amount;
      } else if (item.type === '-') {
        total -= item.amount;
      }
    }
    if (total >= 0) {
      return ('+' + total);
    } else if (total < 0) {
      return total;
    }
  }

  itemAmount(item: RecordItem) {
    if (item.type === '+') {
      return ('+' + item.amount);
    } else if (item.type === '-') {
      return ('-' + item.amount);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.title {
  background: $color-highlight;
  height: 120px;

  > .title-up {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    > .icon {
      width: 50px;
      height: 50px;
      margin-bottom: -6px;
    }

    > .title-wrapper {
      font-size: 32px;
      color: white;
    }
  }

  > .title-down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 60px;
    color: #FCF8E8;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    .ant-calendar-picker,.ant-input{
      width: 100px;
      background-color: transparent;
    }
    > .money {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .income {
        width: 48%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        flex-wrap: wrap;
        padding-left: 10px;

        > .income-content {
          margin-right: 10px;
        }

        > .income-amount {
        }
      }

      > .expenses {
        width: 48%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        flex-wrap: wrap;
        padding-right: 10px;

        > .expenses-content {
          margin-right: 10px;
        }

        > .expenses-amount {

        }
      }
    }
  }
}

.content {
  height: calc(100% - 120px);
  overflow: auto;

  > ol > li {
    border-bottom: 1px solid #e3e3e3;

    > .item1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #F9F9F9;
      padding: 4px 10px;
      color: #B0ACAC;
      font-size: 14px;
    }

    > ol > .record > .item2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      font-size: 18px;
      color: black;

      > .name {
        display: flex;
        justify-content: center;
        align-items: center;

        > .icon {
          width: 30px;
          height: 30px;
        }

        > .name-wrapper {
          padding-left: 10px;
        }
      }

      > .amount2 {
        color: #306ECC;
      }
    }
  }
}
.content1{
  margin-top: 22vh;
}
</style>