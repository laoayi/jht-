<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">权限</el-breadcrumb-item>
      <el-breadcrumb-item>员工列表</el-breadcrumb-item>
      <el-breadcrumb-item>部门类列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!--card卡片区域-->
    <el-card class="box-card">
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="handleclick">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
</style>
