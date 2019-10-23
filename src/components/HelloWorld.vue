<template>
  <div class="hello">
    <a-row :gutter="10">
      <a-col :span="24" class="mt20">
        <a-card size="small" title="项目1">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="24" class="mt20">
        <a-card size="small" title="项目2">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="24" class="mt20">
        <a-card size="small" title="项目3">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="24" class="mt20">
        <a-card size="small" title="项目4">
          <a href="#" slot="extra">more</a>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../style/view.css';
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
