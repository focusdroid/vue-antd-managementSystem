<template>
  <div id="login">
    <div class="gutter-example">
      <a-row class="login-page">
        <a-col class="gutter-row gutter-row-one" :span="11">
          <div class="gutter-box">
            <div class="login-page-title">
              <div class="login-page-box">
                <div>{{$store.state.systemName}}</div>
                <div>{{$store.state.systemEnglishName}}</div>
              </div>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row gutter-row-two" :span="13">
          <div class="gutter-box">
            <LoginDetail />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.deleteNode()
  },
  components: {
    LoginDetail: () => import('./LoginDetail')
  },
  methods: {
    deleteNode () { // 移除框架自带的多余的标识，原因：影响视图
      window.onload = () => {
        let tooltip = document.querySelector('#trans-tooltip')
        console.log(tooltip.parentNode.remove())
      }
    }
  }
}
</script>
<style scoped lang="less">
@import '../../style/common.less';
#login .login-page-title {
  position: relative;
  left: 50%;
  top: 40%;
  transform: translate(-17%, -50%);
  .login-page-box {
    color: @colorWhite
  }
}
.login-page .gutter-row {
    height: @height100vh;
}
.login-page .gutter-box {
  height: @height100vh;
}
.gutter-row-one .gutter-box {
  background-color: @themeColor;
}
.gutter-row-two .gutter-box {
  background-color: @colorWhite;
}
</style>
