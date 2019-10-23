## 管理系统模板系统
### 目录设置
```
> 文件目录配置：
components: 放置主要容器组件， 
pages: 放置各个重要的目录和显示组件， 例如：左边的导航菜单组件
view： 放置公共的详情页面，例如： 相同的详情页面
plugins： 放置公共组件，比如：loading组件
api： 放置所有的请求
store： 放置vuex数据管理
style： 放置公共的样式文件(default.less指修改系统颜色文件， common指系统公共颜色配置)
```
### 文件说明
```
路由模式： history
vuex的使用：
  在你需要修改的视图中书写函数，例如：
    changName () {
      this.$store.dispatch('setName', 'tree')
    }
  其他的代码在
  
> 0. 首页（/）面包屑文件路径: src/pages/breadcrumb/Breadcrumb.vue
> 1. 顶部显示标题的路径：src/pages/header/Header.vue
> 2. 左侧菜单展示文件路径： src/pages/leftmenu/LeftMenu.vue
> 3.
> 4.
> 5.
> 6.
```
