<template>
  <div class="numberPad">
    <div class="buttons clearfix">
      <div class="downMove">
        <button class="down">
          <Icon class="icon" name="down"/>
        </button>
      </div>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="clear">清空</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="ok">确定</button>
      <button>.</button>
      <button>0</button>
      <button class="remove">
        <Icon class="del" name="delete"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad{
  .downMove{
    display: flex;
    flex-direction: row-reverse;
    > .down {
      display: flex;
      width: 10%;
      height: 30px;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to bottom right, #e3e3e9, white);
      border: 1px solid white;
      > .icon {
        width: 18px;
        height: 18px;
      }
    }
  }
  .buttons {
    @extend %clearFix;
    flex-wrap: wrap;
    padding-top: 2px;
    padding-bottom: 10px;
    box-shadow: 0 0 3px rgba(0,0,0,0.2);

    > button {
      width: 25%;
      height: 50px;
      float: left;
      background: linear-gradient(to bottom right, #E3E3E9, white);
      border: 1px solid white;
      font-size: 18px;

      &.clear {
        height: 100px;
        float: right;
      }

      &.ok {
        height: 100px;
        float: right;
        background: linear-gradient(to bottom right, $color-highlight, #F3B858);
        color: white;
      }

      &.remove {
        .del {
          width: 19px;
          height: 19px;
        }
      }

    }
  }
}

</style>