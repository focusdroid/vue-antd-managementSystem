<template>
    <a-layout-sider collapsible v-model="collapsed" defaultCollapsed>
      <div class="logo" />
      <a-menu theme="dark" :defaultOpenKeys="[$store.state.defaultOpenKeys]" :defaultSelectedKeys="[$store.state.listDefaultSelectKeys]" mode="inline" :style="{ lineHeight: '64px' }">
        <a-sub-menu v-for="(item) in leftMenu.row" :key="item.id" @click="setOpenKeys(item.id)">
          <span slot="title"><a-icon :type="item.icon" /><span>{{item.label}}</span></span>
          <a-menu-item v-for="son in item.childrenList" :key="son.id" @click="setSelectKeys(son.id)">{{son.label}}</a-menu-item>
        </a-sub-menu>
          <!--<a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" /><span>User</span></span>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="team" /><span>Team</span></span>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <a-icon type="file" />
            <span>File</span>
          </a-menu-item>-->
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
    this.getListMenuSource()
  },
  methods: {
    setOpenKeys (parentId) { // 点击设置默认选中，可以做记住上次上次操作位置的功能(父菜单)
      this.$store.dispatch('setOpenKeys', parentId)
    },
    setSelectKeys (id) { // 点击设置默认选中，可以做记住上次上次操作位置的功能(子菜单)
      this.$store.dispatch('setSelectKeys', id)
    },
    getListMenuSource () {
      getLeftMenu().then(res => {
        console.log(res)
        this.leftMenu = res.result
      })
    }
  }
}
</script>
