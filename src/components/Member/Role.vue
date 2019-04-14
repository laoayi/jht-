<template>
  <div id="role">
    <pubHeader></pubHeader>
    <el-card>
      <!-- 搜索框 -->
      <el-row :gutter="20">
        <el-col :span="4">
          <el-input placeholder="请输入内容"></el-input>
        </el-col>
        <el-button size="mini" type="primary" icon="el-icon-search">搜索</el-button>
        <el-button size="mini" type="primary" icon="el-icon-plus" @click="roleadd">新增</el-button>
        <el-button size="mini" type="primary" icon="el-icon-download">导出</el-button>
      </el-row>
      <!-- 表格展示 -->
      <el-table border :data="roleData" style="width: 100%; margin-top:30px">
        <el-table-column prop="date" label="名称"></el-table-column>
        <el-table-column prop="name" label="描述"></el-table-column>
        <el-table-column prop="address" label="创建日期"></el-table-column>
        <el-table-column prop="address" label="操作" >
          <el-button type="success" size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </el-table-column>
      </el-table>
      <!--数据分页展示-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total,prev, pager, next,sizes"
        :total="400"
      ></el-pagination>

      <!-- <el-row :gutter="20">
        <el-col :span="12">
          <el-row justify="space-between" style="border:1px solid #ccc;height:59px;lineHeight:59px">
            <el-col :span="5" push="1" style="font-weight: 700;color: #303133;font-size: 15px;">权限管理</el-col>
            <el-col :span="5" push="15">
              <el-button size="mini" type="info" icon="el-icon-check">保存</el-button>
            </el-col>
          </el-row> -->
          <!-- 左侧权限 -->
          <!-- <div class="leftrole"> -->
            <!-- 权限树 -->
            <!-- <el-tree
              :data="roleleftdata"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps"
            ></el-tree>
          </div> -->
        <!-- </el-col> -->
        <!-- <el-col :span="12">
          <el-row justify="space-between" style="border:1px solid #ccc;height:59px;lineHeight:59px">
            <el-col :span="5" push="1" style="font-weight: 700;color: #303133;font-size: 15px;">菜单分配</el-col>
            <el-col :span="5" push="15">
              <el-button size="mini" type="info" icon="el-icon-check">保存</el-button>
            </el-col>
          </el-row> -->
          <!-- 右侧权限 -->
          <!-- <div class="rightrole"> -->
            <!-- 权限树 -->
            <!-- <el-tree
              :data="roleleftdata"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps"
            ></el-tree> -->
          <!-- </div> -->
        <!-- </el-col>
      </el-row> -->
    </el-card>
    <!-- 对话框 -->
    <el-dialog title="新增角色" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <textarea cols="50" rows="10"></textarea>
        </el-form-item>
        
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import pubHeader from '../public_header/pub_header'
export default {
  created() {},
  data() {
    return {
      form:{},
      // 增加用户对话框
      dialogVisible: false,
      // 表格数据
      roleData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      roleleftdata: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      //  querycdt: {
      //   // 查询关键字
      //   query: '',
      //   // 当前页码
      //   pagenum: 1,
      //   // 每页获取记录条数
      //   pagesize: 3,
      //   // 总记录条数
      //   tot: 0
      // }
    }
  },
  components: {
    pubHeader
  },
  methods: {
    // 获取用户列表
    // async getroleinfo() {

      //  const { data: res } = await this.$http.get('users', {
      //   params: this.querycdt
      // })
      // // console.log(res)
      // // 判断获取数据是否失败
      // if (res.meta.status !== 200) {
      //   return this.$message.error(res.meta.msg)
      // }
      // // 记录总记录条数
      // this.querycdt.tot = res.data.total
      // // 把获得好的用户数据 赋予 给userInfos成员
      // this.userInfos = res.data.users
    // },
    // 改变页面显示的条数
    // handleSizeChange(arg) {
      //  // arg: 变化后的记录条数
      // // console.log(arg)
      // this.querycdt.pagesize = arg
      // // 重新根据条件获得数据
      // this.getroleinfo()
    // },
    // 改变页面的第几页
    // handleCurrentChange(arg) {
      //  // arg: 变化后的当前页码值
      // // console.log(arg)
      // this.querycdt.pagenum = arg
      // // 根据变化后的页码重新获得数据
      // this.getUserInfos()
    // },
    // 新增用户
    roleadd() {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
#role {
  .el-pagination {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .leftrole {
    border: 1px solid #ccc;
  }
  .rightrole {
    border: 1px solid #ccc;
  }
  textarea {
    resize: vertical;
  }
}
</style>
