<template>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button>默认按钮</el-button>
    </el-row>
    <el-input placeholder="请输入内容" v-model="input3">
      <template slot="prepend">商品名称</template>
    </el-input>
    <el-input placeholder="请输入内容" v-model="input3">
      <template slot="prepend">门店地区</template>
    </el-input>
    <el-input placeholder="请输入内容" v-model="input3">
      <template slot="prepend">发布人</template>
    </el-input>
    <el-select v-model="region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="广告编码" width="180"></el-table-column>
      <el-table-column prop="name" label="缩略图" width="180"></el-table-column>
      <el-table-column prop="address" label="广告名称"></el-table-column>
      <el-table-column prop="aaa" label="广告名称"></el-table-column>
      <el-table-column prop="bbb" label="广告名称"></el-table-column>
      <el-table-column prop="ccc" label="广告名称"></el-table-column>
      <el-table-column prop="ddd" label="广告名称"></el-table-column>
      <el-table-column prop="eee" label="广告名称"></el-table-column>
      <el-table-column prop="fff" label="广告名称"></el-table-column>
      <el-table-column prop="ggg" label="广告名称"></el-table-column>
      <el-table-column prop="vvv" label="广告名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          aaa: '哈哈a',
          bbb: '哈哈d',
          ccc: '哈哈c',
          ddd: '哈哈d',
          eee: '哈哈e',
          fff: '哈哈f',
          ggg: '哈哈g',
          vvv: '哈哈v'
        }
      ],
      region: ''
    }
  }
}
</script>

<style lang="less" scoped>
    .el-input{
        width: 300PX;
    }
</style>
