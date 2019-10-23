<template>
  <div id="login-detail" class="login-detail">
    <div class="ld-box">
      <div class="ld-img"><img src="../../../static/img/logo.svg" alt=""></div>
      <div>
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                { rules: [{ required: true, message: '请输入用户名' }] },
              ]"
              placeholder="用户名"
              style="width: 350px;"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: '请输入密码' }] },
              ]"
              type="password"
              placeholder="密码"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" class="login-form-button">
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeCreate () { // 初始化表单
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          if (values.userName === 'admin' && values.password === '000') {
            this.$router.replace('/')
          } else {
            this.$message.error('请填写正确的用户名和密码')
          }
        } else {
          this.$message.error('请填写正确的用户名和密码')
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15%;
  .ld-box {
    .ld-img {
      text-align: center;
    }
  }
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
