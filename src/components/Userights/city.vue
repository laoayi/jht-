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
      <!--搜索框 和 添加用户按钮-->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入搜索内容">
            <el-button slot="append" icon="el-icon-search" @click="querySearch()"></el-button>
          </el-input>
        </el-col>
        <el-col :span="7">
          <el-button type="primary" @click="addDialogVisible=true">添加部门</el-button>
          <el-button type="warning" @click="queryAdd()">修改部门</el-button>
          <el-button type="danger" @click="queryAdd()">删除部门</el-button>
        </el-col>
      </el-row>

      <!--表格展示数据列表-->
      <el-table :data="rightsInfos" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="cityId" label="城市ID "></el-table-column>
        <el-table-column prop="cityName" label="城市名 "></el-table-column>
        <el-table-column prop="cityLevel" label="城市级别 " width="110"></el-table-column>
        <el-table-column prop="cityParentId" label="上一级城市ID " width="120"></el-table-column>
        <el-table-column prop="citySpelling" label="城市拼音 " width="160"></el-table-column>
        <!-- <el-table-column prop="departmentName" label="部门名称" width="160"></el-table-column>
        <el-table-column prop="departmentStatus" label="状态" width="70"></el-table-column>-->
      </el-table>
      <!-- 添加用户对话框 -->
      <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%" @close="addDialogClose">
        <!-- :rules="addFormRules" -->
        <el-form ref="addFormRef" :model="addForm" label-width="80px">
          <el-form-item label="城市ID" prop>
            <el-input v-model="addForm.cityId"></el-input>
          </el-form-item>
          <el-form-item label="城市名" prop>
            <el-input v-model="addForm.cityName"></el-input>
          </el-form-item>
          <el-form-item label="城市级别" prop="cityLevel">
            <el-input v-model="addForm.cityLevel"></el-input>
          </el-form-item>
          <el-form-item label="上一级城市ID" prop="cityParentId">
            <el-input v-model="addForm.cityParentId"></el-input>
          </el-form-item>
          <el-form-item label="城市拼音" prop="citySpelling">
            <el-input v-model="addForm.citySpelling"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  // 生命周期函数
  created() {
    this.getRightsInfos();
  },
  methods: {
    checkMobile() {},
    // 添加数据
    addUser() {
    //   this.$refs.addFormRef.validate(async valid => {
    //     if (valid) {
    //       const { data: res } = await this.$http.post(
    //         "/static/city",
    //         this.addForm
    //       );
    //       if (res.code !== 200) {
    //         return this.$message.error(res.msg);
    //       }
    //       this.addDialogVisible = false;
    //       this.$message.success("添加成功");
    //       this.getRightsInfos();
    //     }
    //   });
    },
    // 查询数据
    querySearch() {},
    // 初始化列表数据
    async getRightsInfos() {
      const { data: res } = await this.$http.get("/static/city");
      if (res.code !== 200) {
        return this.$message.error(res.msg);
      }
      this.rightsInfos = res.response;
      console.log(res);
    },
    addDialogClose() {
      this.$refs.addFormRef.resetFields();
    }
  },
  data() {
    // 为校验手机号码生成一个函数
    // var checkMobile = (rule, value被校验数据, callback回调方法)=>{}
    var checkMobile = (rule, value, callback) => {
      // 手机号码规则：1开始,后接3|5|8|9|7,再后边跟9位数字
      // 正则表达式校验
      if (!/^1[35789]\d{9}$/.test(value)) {
        // 校验失败(请给页面提示错误信息)
        return callback(new Error("手机号码格式不正确"));
      }
    };

    return {
      // 添加用户接收数据绑定
      addForm: {
        cityId: "",
        cityName: "",
        cityLevel: "",
        cityParentId: "",
        citySpelling: ""
      },
      // 控制添加弹框显示或隐藏
      addDialogVisible: false,
      // 渲染表格接收数据
      rightsInfos: [],
      /** 分配角色相关1 */
      // 对话框是否显示开关
      fenpeiDialogVisible: false,
      // 接收供选取的角色信息
      roleInfos: [],
      // 校验规则制定
      fenpeiFormRules: {
        rid: [{ required: true, message: "角色必选", trigger: "change" }]
      },
      // 表单数据对象
      fenpeiForm: {
        id: 0, // 当前被修改用户的id
        username: "",
        rid: 0 //角色的id
      },
      // form表单需要的数据
      editForm: {
        username: "",
        email: "",
        mobile: ""
      }
    };
  }
};
</script>

<style lang="less" scoped>
</style>
