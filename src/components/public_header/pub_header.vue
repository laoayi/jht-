<template>
  <div>
    <!-- </div> -->
    <!-- tab切换 -->
    <!-- <div id="role_tab">
      <el-tag closable :class="{'active':role_flag}" @click="handleTag">角色管理</el-tag>
      <el-tag closable :class="{'active':!role_flag}" @click="handleTag">首页</el-tag>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      //判断角色管理和首页样式切换
      role_flag: true
    }
  },
  methods: {
    //判断角色管理和首页样式切换
    handleTag() {
      this.role_flag = !this.role_flag
    }
  }
}
</script>

<style lang="less" scoped>

//按钮:角色管理和首页
#role_tab {
  height: 30px;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
  box-shadow: 1px 1px 1px #ddd;
  .el-tag {
    color: #495060;
    background-color: #fff;
    cursor: pointer;
  }
  //活动样式
  .active {
    background-color: #42b983;
    color: #fff;
    border-color: #42b983;
    &::before {
      content: '';
      background: #fff;
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: relative;
      margin-right: 2px;
    }
  }
}
</style>
