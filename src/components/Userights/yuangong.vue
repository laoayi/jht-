<template>
  <div>
    <!-- 头部按钮 -->
   
    <!--card卡片区域-->
    <el-card class="box-card">
       <header>
         <el-input class="input" placeholder="请输入搜索内容">
            <el-button slot="append" icon="el-icon-search" @click="querySearch()"></el-button>
          </el-input>
      <el-button type="primary"  @click="addDialogVisible=true">添加</el-button>
    </header>
      <el-table border :data="rightsInfos" style="width: 100%; margin-top:30px">
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="employeeAge" label="员工年龄 "></el-table-column>
        <el-table-column prop="employeeCreateTime" label="员工账号创建时间"></el-table-column>
        <el-table-column prop="employeeHeadPic" label="员工头像地址 "></el-table-column>
        <el-table-column prop="employeeId" label="员工主键 "></el-table-column>
        <el-table-column prop="employeeName" label="员工名"></el-table-column>
        <el-table-column prop="employeeNum" label="员工编号"></el-table-column>
        <el-table-column prop="employeePhone" label="员工手机号"></el-table-column>
        <el-table-column prop="employeeSex" label="员工性别"></el-table-column>
        <el-table-column prop="employeeStatus" label="员工账号状态"></el-table-column>
        <el-table-column align="right" width="400px">
          <template slot="header">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="details()">详情</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
       <!-- 用户详情对话框 -->
       <el-dialog title="添加用户" :visible.sync="detailsDialogVisible" width="50%" @close="addDialogClose">
        <!-- :rules="addFormRules" -->
        <el-form ref="addFormRef" :model="Details" label-width="80px">
          <el-form-item label="员工年龄" prop>
            <el-input v-model="Details.employeeAge"></el-input>
          </el-form-item>
          <el-form-item label="员工账号创建时间" prop="departmentCreateTime">
            <el-date-picker v-model="Details.departmentCreateTime" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="员工头像地址" prop="employeeHeadPic">
            <el-input v-model="Details.employeeHeadPic"></el-input>
          </el-form-item>
          <el-form-item label="员工主键" prop="employeeId">
            <el-input v-model="Details.employeeId"></el-input>
          </el-form-item>
          <el-form-item label="员工名" prop="employeeName">
            <el-input v-model="Details.employeeName"></el-input>
          </el-form-item>
          <el-form-item label="员工编号" prop="employeeNum">
            <el-input v-model="Details.employeeNum"></el-input>
          </el-form-item>
          <el-form-item label="员工手机号" prop="employeePhone">
            <el-input v-model="Details.employeePhone"></el-input>
          </el-form-item>
          <el-form-item label="员工性别" prop="employeeSex">
            <el-input v-model="Details.employeeSex"></el-input>
          </el-form-item>
          <el-form-item label="员工账号状态" prop="employeeStatus">
            <el-input v-model="Details.employeeStatus"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 添加用户对话框 -->
      <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%" @close="addDialogClose">
        <!-- :rules="addFormRules" -->
        <el-form ref="addFormRef" :model="addForm" label-width="80px">
          <el-form-item label="员工年龄" prop>
            <el-input v-model="addForm.employeeAge"></el-input>
          </el-form-item>
          <el-form-item label="员工账号创建时间" prop="departmentCreateTime">
            <!-- <el-input v-model="addForm.departmentCreateTime"></el-input> -->
            <el-date-picker v-model="addForm.departmentCreateTime" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="员工头像地址" prop="employeeHeadPic">
            <el-input v-model="addForm.employeeHeadPic"></el-input>
          </el-form-item>
          <el-form-item label="员工主键" prop="employeeId">
            <el-input v-model="addForm.employeeId"></el-input>
          </el-form-item>
          <el-form-item label="员工名" prop="employeeName">
            <el-input v-model="addForm.employeeName"></el-input>
          </el-form-item>
          <el-form-item label="员工编号" prop="employeeNum">
            <el-input v-model="addForm.employeeNum"></el-input>
          </el-form-item>
          <el-form-item label="员工手机号" prop="employeePhone">
            <el-input v-model="addForm.employeePhone"></el-input>
          </el-form-item>
          <el-form-item label="员工性别" prop="employeeSex">
            <el-input v-model="addForm.employeeSex"></el-input>
          </el-form-item>
          <el-form-item label="员工账号状态" prop="employeeStatus">
            <el-input v-model="addForm.employeeStatus"></el-input>
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
  data() {
    return {
      // 详情数据接收
      Details :{

      },
      // Details:{
      //   employeeAge: "",
      //   employeeCreateTime: "",
      //   employeeHeadPic: "",
      //   employeeId: "",
      //   employeeName: "",
      //   employeeNum: "",
      //   employeePhone: '',
      //   employeePhone:'',
      //   employeeStatus:''
      // },
      // 添加用户接收数据绑定
      addForm: {
        employeeAge: "",
        employeeCreateTime: "",
        employeeHeadPic: "",
        employeeId: "",
        employeeName: "",
        employeeNum: "",
        employeePhone: '',
        employeePhone:'',
        employeeStatus:''
      },
      // 控制添加弹框显示或隐藏
      addDialogVisible:false,
      // 控制详情弹框显示或隐藏
      detailsDialogVisible:false,
      dialogFormVisible: false,
      form: {
        name: ""
      },
      rightsInfos: [],
    };
  },
  methods: {
    // 详情
    async details () {
      const { data: res } = await this.$http.get("/admin/rbac/employee/"+'11728934225768448');
      // console.log(employeeId)
      if (res.code !== 200) {
        return this.$message.error(res.msg);
      }
      this.Details = res.response;
      console.log(this.Details);
      this.detailsDialogVisible = true
    },
    // 初始化列表数据
    async getRightsInfos() {
      const { data: res } = await this.$http.get("/admin/rbac/employee");
      if (res.code !== 200) {
        return this.$message.error(res.msg);
      }
      this.rightsInfos = res.response.data;
      console.log(res);
    },
    // 添加数据
    addUser() {
      this.$refs.addFormRef.validate(async valid => {
        if (valid) {
          const { data: res } = await this.$http.post(
            "/admin/rbac/employee",
            this.addForm
          );
          if (res.code !== 200) {
            return this.$message.error(res.msg);
          }
          this.addDialogVisible = false;
          this.$message.success("添加成功");
          this.getRightsInfos();
        }
      });
    },
    addDialogClose() {
      this.$refs.addFormRef.resetFields();
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    yg_submit() {
      this.tableData.push({
        name: this.form.name,
        date: new Date().toLocaleTimeString()
      });
      this.dialogFormVisible = false;
      this.form.name = "";
    }
  }
};
</script>

<style lang="less" scoped>
.input{
  width: 400px;
 margin-top: 20px;
 
}
</style>
