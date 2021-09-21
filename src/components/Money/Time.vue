<template>
  <div class="time">
    <Icon name="time" class="timeIcon"/>
    <span class="content">时间</span>
    <a-date-picker show-time placeholder="选择日期"
                   :defaultValue="moment(getCurrentDate(), 'YYYY-MM-DD HH:mm')"
                   @change="changeDate"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import moment, {Moment} from 'moment';

@Component
export default class Time extends Vue {
  moment = moment;

  getCurrentDate(){
    const now = moment().format('YYYY-MM-DD HH:mm');
    this.$emit('update:value', now);
    console.log(now);
    return now;
  }

  changeDate(moment: Moment) {
    const date = moment.format('YYYY-MM-DD HH:mm');
    this.$emit('update:value', date);
  }
}
</script>

<style lang="scss" scoped>
.time {
  height: 60px;
  font-size: 18px;
  padding: 13px 0;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;

  > .timeIcon {
    width: 27px;
    height: 27px;
  }

  > .content {
    padding-left: 5px;
    padding-right: 18px;
    color: #636363;
  }

}
</style>