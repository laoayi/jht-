<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>

            <template v-for="subItem in item.subs">
              <template v-if="subItem.subs">
                <el-submenu :index="subItem.index" :key="subItem.index">
                  <span slot="title">{{ subItem.title }}</span>
                  <!-- <template v-if="subItem.subs"> -->
                  <template v-for="(subscontent,j) in subItem.subs">
                    <el-menu-item :key="j" :index="subscontent.index">
                      <i :class="subscontent.icon"></i>
                      <span>{{ subscontent.title }}</span>
                    </el-menu-item>
                  </template>
                  <!-- </template> -->
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
              </template>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
export default {
  // props: {
  //   index: {
  //     type: String,
  //     required: true
  //   }
  // },
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-setting",
          index: "dashboard",
          title: "系统首页"
        },
        {
          icon: "el-icon-tickets",
          index: "tabless",
          title: "会员管理",
          subs: [
            {
              index: "table",
              title: "会员列表"
            },
            {
              index: "relationship",
              title: "关系管理 "
            },
            {
              index: "Account",
              title: "账户管理"
            },
            {
              index: "Role",
              title: "角色管理"
            },
            {
              index: "grade",
              title: "等级管理"
            },
            {
              index: "Permission",
              title: "权限管理"
            }
          ]
        },
        {
          icon: "el-icon-message",
          index: "dynamic-tabs",
          title: "动态管理",
          subs: [
            {
              index: "Dynamiclist",
              title: "动态列表"
            },
            {
              index: "comment",
              title: "评论列表"
            },
            {
              index: "Types",
              title: "动态类型管理"
            }
          ]
        },
        {
          icon: "el-icon-message",
          index: "message-tabs",
          title: "消息管理",
          subs: [
            {
              index: "listMessage",
              title: "消息列表"
            },
            {
              index: "Messagetype",
              title: "消息类型管理"
            }
          ]
        },
        {
          icon: "el-icon-message",
          index: "rule-tabs",
          title: "规则管理",
          subs: [
            {
              index: "HomeShow",
              title: "首页展示规划管理"
            },
            {
              index: "Circler",
              title: " 圈子展示规则管理"
            },
            {
              index: "Samecity",
              title: "同城展示规则管理"
            },
            {
              index: "Dynamicrule",
              title: "动态规则管理"
            },
            {
              index: "Messagedisplays",
              title: "消息展示规划管理"
            }
          ]
        },
        {
          icon: "el-icon-message",
          index: "tabs",
          title: "页面管理",
          subs: [
            {
              index: "Pagelist",
              title: "页面列表"
            }
          ]
        },
        {
          icon: "el-icon-date",
          index: "3",
          title: "数据管理",
          subs: [
            {
              icon: "el-icon-date",
              index: "4",
              title: "前台数据管理",
              subs: [
                {
                  index: "maidian",
                  title: "埋点清单"
                },
                {
                  index: "yonghu",
                  title: "用户数据"
                },
                {
                  index: "shiyong",
                  title: "使用数据"
                },
                {
                  index: "xianxing",
                  title: "线性数据"
                },
                {
                  index: "shuju",
                  title: "数据漏斗"
                },
                {
                  index: "fenxi",
                  title: " 数据分析"
                }
              ]
            },
            {
              index: "editor",
              title: "后台数据管理",
              subs: [
                {
                  index: "shujuku",
                  title: "数据库表清单"
                }
              ]
            }
          ]
        },

        {
          icon: "el-icon-star-on",
          index: "charts",
          title: "其他管理",
          subs: [
            {
              index: "editor",
              title: "服务管理",
              subs: [
                {
                  index: "liebiao",
                  title: " 服务列表"
                },
                {
                  index: "leixing",
                  title: " 服务类型管理"
                }
              ]
            },
            {
              index: "markdown",
              title: "地址管理 ",
              subs: [
                {
                  index: "dizhiliebiao",
                  title: "地址列表"
                }
              ]
            },
            {
              index: "markdow",
              title: "接口管理 ",
              subs: [
                {
                  index: "jiekou",
                  title: "接口列表"
                },
                {
                  index: "jiekouleixing",
                  title: "接口类型管理"
                },
                {
                  index: "jiekouguishu",
                  title: "接口归属管理"
                }
              ]
            },
            {
              index: "markdownas",
              title: "安全管理 ",
              subs: [
                {
                  index: "jiaoyi",
                  title: "交易风险控制"
                },
                {
                  index: "jiaoyijiankong",
                  title: "文字监控管理"
                },
                {
                  index: "tupian",
                  title: "图片监控管理"
                },
                {
                  index: "shiping",
                  title: "视屏监控管理"
                },
                {
                  index: "zhibo",
                  title: "直播监控管理"
                },
                {
                  index: "zhanghu",
                  title: "账户安全监控"
                }
              ]
            },
            {
              index: "markdownass",
              title: " 选项设置  ",
              subs: [
                {
                  index: "gender",
                  title: "性别"
                },
                {
                  index: "birthday",
                  title: "生日"
                }
              ]
            },
            {
              index: "biaoqian",
              title: " 标签管理  ",
              subs: [
                {
                  index: "list",
                  title: "标签列表"
                }
              ]
            }
          ]
        },

        {
          icon: "el-icon-warning",
          index: "permission",
          title: "权限管理",
          subs: [
            {
              index: "quanxian",
              title: "公司员工权限管理",
              subs: [
                {
                  index: "yuangong",
                  title: "员工列表"
                },
                {
                  index: "bumen",
                  title: "部门列表"
                },
                {
                  index: "age",
                  title: "个人信息"
                },
                {
                  index: "height",
                  title: "个人详情"
                },
                {
                  index: "jues",
                  title: "角色列表"
                },
                {
                  index: "caozuo",
                  title: "操作列表"
                },
                {
                  index: "ziyuan",
                  title: "城市资源"
                }
              ]
            },
            {
              index: "yonghu",
              title: "app用户权限管理",
              subs: [
                {
                  index: "userlist",
                  title: "用户列表"
                }, {
                  index: "gerenziliao",
                  title: "个人资料"
                },
              ]
            }
          ]
        },
        {
          icon: "el-icon-message",
          index: "Advertis",
          title: "广告管理",
          subs: [
            {
              index: "advertList",
              title: "广告列表"
            },
            {
              index: "advertisementype",
              title: " 广告类型管理"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
