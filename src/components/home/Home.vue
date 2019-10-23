<template>
  <div id="home">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <LeftMenu />
      <a-layout>
        <Header />
        <a-layout-content style="margin: 0 16px">
          <Breadcrumb />
          <div :style="{ padding: '24px', background: '#fff', minHeight: '460px' }">
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    LeftMenu: () => import('../../pages/leftmenu/LeftMenu'),
    Header: () => import('../../pages/header/Header'),
    Breadcrumb: () => import('../../pages/breadcrumb/Breadcrumb')
  }
}
</script>

<style lang="less">
  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

</style>
