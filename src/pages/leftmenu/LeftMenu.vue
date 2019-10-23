<template>
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-sub-menu v-for="(item) in leftMenu.row" :key="item.id">
          <span slot="title"><a-icon :type="item.icon" /><span>{{item.label}}</span></span>
          <a-menu-item v-for="son in item.childrenList" :key="son.id">{{son.label}}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
</template>
<script>
import { getLeftMenu } from '../../api/index'
export default { // 左边的菜单显示
  name: 'LeftMenu',
  data () {
    return {
      collapsed: false,
      leftMenu: []
    }
  },
  mounted () {
    getLeftMenu().then(res => {
      console.log(res)
      this.leftMenu = res.result
    })
  }
}
</script>
