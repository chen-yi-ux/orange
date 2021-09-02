<template>
  <div>
    <Layout>
      <div class="title">
        <div class="title-up">
          <Icon name="orange"/>
          <span class="title-wrapper">橙子记账本</span>
        </div>
        <div class="title-down">
          <div class="month">9月</div>
          <div class="money">
            <div class="income">
              <span class="income-content">收入</span>
              <span class="income-amount">0.00</span>
            </div>
            <div class="expenses">
              <span class="expenses-content">支出</span>
              <span class="expenses-amount">0.00</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <ul>
          <li>
            <div class="item1">
              <span class="date">9月1日</span>
              <span class="amount1">-20</span>
            </div>
            <div class="item2">
              <div class="name">
                <Icon name="三餐"/>
                <span class="name-wrapper">吃饭</span>
              </div>
              <span class="amount2">-20</span>
            </div>
            <div class="item2">
              <div class="name">
                <Icon name="三餐"/>
                <span class="name-wrapper">吃饭</span>
              </div>
              <span class="amount2">-20</span>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Detail extends Vue {

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.title {
  background: $color-highlight;
  height: 120px;

  > .title-up {
    height: 70px;
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
    padding: 0 20px;
    height: 50px;
    color: #FFF2DD;
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);


    > .month {
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > .money{
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > .income {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        flex-wrap: wrap;
        > .income-content{
          margin-right: 10px;
        }
        > .income-amount{

        }
      }

      > .expenses {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        flex-wrap: wrap;
        padding-right: 10px;
        > .expenses-content{
          margin-right: 10px;
        }
        > .expenses-amount{

        }
      }
    }


  }

}
.content{
  height: calc(100% - 120px);
  overflow: auto;

  > ul > li{
    border-bottom: 1px solid #DADADA;
     > .item1{
       display: flex;
       justify-content: space-between;
       align-items: center;
       border-bottom: 1px solid #e3e3e3;
       padding: 4px 10px;
       color: #B0ACAC;
       font-size: 14px;
     }
    > .item2{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      font-size: 18px;
      > .name{
        display: flex;
        justify-content: center;
        align-items: center;
        > .icon{
          width: 30px;
          height: 30px;
        }
        > .name-wrapper{
          padding-left: 10px;
        }
      }
      > .amount2{
        color: #306ECC;
      }
    }
  }
}
</style>