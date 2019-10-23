<template>
  <a-layout-header style="background: #fff; padding: 0">
    <div class="header">
      <div>12313</div>
      <div class="disflex">
        <div class="ml20 tip-icon message-position showhead">
          <a-icon type="bell" />
          <span class="message-red">{{information | opermation }}</span>
        </div>
        <div class="ml20 tip-icon">
          <a-icon type="user" />
        </div>
      </div>
    </div>
  </a-layout-header>
</template>
<script>
export default { // 顶部的title显示
  name: 'header',
  data () {
    return {
      information: 6
    }
  },
  filters: {
    opermation (num) {
      if (num > 99) {
        return '99+'
      } else {
        return num
      }
    }
  }
}
</script>
<style scoped lang='less'>
  @import '../../style/view.css';
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    .message-position {
      position: relative;
      margin-right: 40px;
    }
    .message-red {
      position: absolute;
      display: inline-block;
      width: 24px;
      height: 24px;
      background-color: red;
      border-radius: 50%;
      text-align: center;
      line-height: 24px;
      color: #fff;
      font-size: 12px;
      top: 8px;
      right: -13px;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .tip-icon {
    font-size: 24px;
  }
</style>
