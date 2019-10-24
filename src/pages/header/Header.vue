<template>
  <a-layout-header style="background: #fff; padding: 0">
    <div class="header">
      <div>系统数据监控系统</div>
      <div class="disflex">
        <div>{{time}}</div>
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
      information: 6,
      time: ''
    }
  },
  created () {
    this.updateTime()
  },
  filters: {
    opermation (num) {
      if (num > 99) {
        return '99+'
      } else {
        return num
      }
    }
  },
  methods: {
    updateTime () {
      this.timer = setInterval(() => {
        let date = new Date(new Date().getTime())
        let year = date.getFullYear() + '-'
        let month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        let dates = date.getDate() + ' '
        let hour = (date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`) + ':'
        let min = (date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`) + ':'
        let second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
        this.time = year + month + dates + hour + min + second
      }, 1000)
    }
  },
  beforeDestroy () {
    this.timer && clearInterval(this.timer)
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
