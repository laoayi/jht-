import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {
                title: '自述文件'
            },
            children: [{
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: {
                        title: '系统首页'
                    }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: {
                        title: '基础表格'
                    }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: {
                        title: 'tab选项卡'
                    }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: {
                        title: '基本表单'
                    }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: {
                        title: '富文本编辑器'
                    }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: {
                        title: 'markdown编辑器'
                    }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: {
                        title: '文件上传'
                    }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: {
                        title: 'schart图表'
                    }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: {
                        title: '拖拽列表'
                    }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: {
                        title: '权限管理',
                        permission: true
                    }
                },
                {
                    // 角色管理页面
                    path: '/Role',
                    component: resolve => require(['../components/Member/Role.vue'], resolve),
                    meta: {
                        title: '角色管理',
                        permission: true
                    }
                },
                {
                    // 账户管理页面
                    path: '/Account',
                    component: resolve => require(['../components/Member/Account.vue'], resolve),
                    meta: {
                        title: '账户管理',
                        permission: true
                    }
                },
                {
                    // 等级管理页面
                    path: '/grade',
                    component: resolve => require(['../components/Member/grade.vue'], resolve),
                    meta: {
                        title: '等级管理',
                        permission: true
                    }
                },
                {
                    // 关系管理页面
                    path: '/relationship',
                    component: resolve => require(['../components/Member/relationship.vue'], resolve),
                    meta: {
                        title: '关系管理',
                        permission: true
                    }
                },
                {
                    // 动态列表页面
                    path: '/Dynamiclist',
                    component: resolve => require(['../components/dynamic/Dynamiclist.vue'], resolve),
                    meta: {
                        title: '动态列表',
                        permission: true
                    }
                },
                {
                    // 评论列表页面
                    path: '/comment',
                    component: resolve => require(['../components/dynamic/comment.vue'], resolve),
                    meta: {
                        title: '评论列表 ',
                        permission: true
                    }
                },
                {
                    // 动态类型管理
                    path: '/Types',
                    component: resolve => require(['../components/dynamic/Types.vue'], resolve),
                    meta: {
                        title: '动态类型 ',
                        permission: true
                    }
                },
                {
                    // 消息列表管理
                    path: '/listMessage',
                    component: resolve => require(['../components/Message/listMessage.vue'], resolve),
                    meta: {
                        title: '消息列表 ',
                        permission: true
                    }
                },
                {
                    // 消息类型管理
                    path: '/Messagetype',
                    component: resolve => require(['../components/Message/Messagetype.vue'], resolve),
                    meta: {
                        title: '消息类型 ',
                        permission: true
                    }
                },
                {
                    // 首页展示规划管理
                    path: '/HomeShow',
                    component: resolve => require(['../components/Rule/HomeShow.vue'], resolve),
                    meta: {
                        title: '首页展示规划 ',
                        permission: true
                    }
                },
                {
                    //  圈子展示规则管理 
                    path: '/Circler',
                    component: resolve => require(['../components/Rule/Circler.vue'], resolve),
                    meta: {
                        title: '圈子展示规则 ',
                        permission: true
                    }
                },
                {
                    //   同城展示规则管理
                    path: '/Samecity',
                    component: resolve => require(['../components/Rule/Samecity.vue'], resolve),
                    meta: {
                        title: '同城展示规则 ',
                        permission: true
                    }
                },
                {
                    //   动态规则管理 
                    path: '/Dynamicrule',
                    component: resolve => require(['../components/Rule/Dynamicrule.vue'], resolve),
                    meta: {
                        title: '动态规则 ',
                        permission: true
                    }
                },
                {
                    //  消息展示规划管理  
                    path: '/Messagedisplays',
                    component: resolve => require(['../components/Rule/Messagedisplays.vue'], resolve),
                    meta: {
                        title: '消息展示规划 ',
                        permission: true
                    }
                },
                {
                    //  页面列表  
                    path: '/Pagelist',
                    component: resolve => require(['../components/Pagemanagement/Pagelist.vue'], resolve),
                    meta: {
                        title: '消息展示规划 ',
                        permission: true
                    }
                },
                {
                    //   埋点清单管理  
                    path: '/maidian',
                    component: resolve => require(['../components/data/sanji/shiyong.vue'], resolve),
                    meta: {
                        title: ' 埋点清单 ',
                        permission: true
                    }
                },
                {
                    //   用户数据管理  
                    path: '/yonghu',
                    component: resolve => require(['../components/data/sanji/yonghu.vue'], resolve),
                    meta: {
                        title: ' 用户数据 ',
                        permission: true
                    }
                },
                {
                    //   使用数据管理  
                    path: '/shiyong',
                    component: resolve => require(['../components/data/sanji/shiyong.vue'], resolve),
                    meta: {
                        title: '使用数据 ',
                        permission: true
                    }
                },
                {
                    //   线性数据管理  
                    path: '/xianxing',
                    component: resolve => require(['../components/data/sanji/xianxing.vue'], resolve),
                    meta: {
                        title: '线性数据 ',
                        permission: true
                    }
                },
                {
                    //   数据漏斗管理  
                    path: '/shuju',
                    component: resolve => require(['../components/data/sanji/shuju.vue'], resolve),
                    meta: {
                        title: '数据漏斗 ',
                        permission: true
                    }
                },
                {
                    //  数据分析管理  
                    path: '/fenxi',
                    component: resolve => require(['../components/data/sanji/fenxi.vue'], resolve),
                    meta: {
                        title: '数据分析 ',
                        permission: true
                    }
                },
                {
                    //   数据库表清单管理  
                    path: '/shujuku',
                    component: resolve => require(['../components/data/sanji/shujuku.vue'], resolve),
                    meta: {
                        title: ' 数据库表清单 ',
                        permission: true
                    }
                },
                {
                    //    服务列表管理  
                    path: '/liebiao',
                    component: resolve => require(['../components/other/sanji/leibiao.vue'], resolve),
                    meta: {
                        title: '  服务列表 ',
                        permission: true
                    }
                },
                {
                    //   服务类型管理 
                    path: '/leixing',
                    component: resolve => require(['../components/other/sanji/leixing.vue'], resolve),
                    meta: {
                        title: '服务类型 ',
                        permission: true
                    }
                },
                {
                    //   地址列表管理 
                    path: '/dizhiliebiao',
                    component: resolve => require(['../components/other/sanji/dizhiliebiao.vue'], resolve),
                    meta: {
                        title: '地址列表 ',
                        permission: true
                    }
                },
                {
                    //   接口列表 
                    path: '/jiekou',
                    component: resolve => require(['../components/other/sanji/jiekou.vue'], resolve),
                    meta: {
                        title: '接口列表 ',
                        permission: true
                    }
                },
                {
                    //   接口类型管理
                    path: '/jiekouleixing',
                    component: resolve => require(['../components/other/sanji/jiekouleixing.vue'], resolve),
                    meta: {
                        title: '接口类型 ',
                        permission: true
                    }
                },
                {
                    //   接口归属管理
                    path: '/jiekouguishu',
                    component: resolve => require(['../components/other/sanji/jiekouguishu.vue'], resolve),
                    meta: {
                        title: '接口归属 ',
                        permission: true
                    }
                },
                {
                    //   交易风险控制
                    path: '/jiaoyi',
                    component: resolve => require(['../components/other/sanji/jiaoyi.vue'], resolve),
                    meta: {
                        title: '交易风险控制 ',
                        permission: true
                    }
                },
                {
                    //   文字监控管理
                    path: '/jiaoyijiankong',
                    component: resolve => require(['../components/other/sanji/jiaoyijiankong.vue'], resolve),
                    meta: {
                        title: '文字监控 ',
                        permission: true
                    }
                },
                {
                    //   图片监控管理
                    path: '/tupian',
                    component: resolve => require(['../components/other/sanji/tupian.vue'], resolve),
                    meta: {
                        title: '图片监控 ',
                        permission: true
                    }
                },
                {
                    //   视屏监控管理
                    path: '/shiping',
                    component: resolve => require(['../components/other/sanji/shiping.vue'], resolve),
                    meta: {
                        title: '图片监控 ',
                        permission: true
                    }
                },
                {
                    //   直播监控管理
                    path: '/zhibo',
                    component: resolve => require(['../components/other/sanji/zhibo.vue'], resolve),
                    meta: {
                        title: '直播监控 ',
                        permission: true
                    }
                },
                {
                    //   账户安全监控
                    path: '/zhanghu',
                    component: resolve => require(['../components/other/sanji/zhanghu.vue'], resolve),
                    meta: {
                        title: '账户安全监控 ',
                        permission: true
                    }
                },
                {
                    //   性别
                    path: '/gender',
                    component: resolve => require(['../components/other/sanji/gender.vue'], resolve),
                    meta: {
                        title: '性别 ',
                        permission: true
                    }
                },
                {
                    //   生日
                    path: '/birthday',
                    component: resolve => require(['../components/other/sanji/birthday.vue'], resolve),
                    meta: {
                        title: '生日 ',
                        permission: true
                    }
                },
                {
                    //   标签列表
                    path: '/list',
                    component: resolve => require(['../components/other/sanji/list.vue'], resolve),
                    meta: {
                        title: '标签列表 ',
                        permission: true
                    }
                },
                {
                    //   员工列表
                    path: '/yuangong',
                    component: resolve => require(['../components/Userights/yuangong.vue'], resolve),
                    meta: {
                        title: '员工列表 ',
                        permission: true
                    }
                },
                {
                    //   部门列表
                    path: '/bumen',
                    component: resolve => require(['../components/Userights/bumen.vue'], resolve),
                    meta: {
                        title: '部门列表',
                        permission: true
                    }
                },
                {
                    //    角色列表
                    path: '/jues',
                    component: resolve => require(['../components/Userights/jues.vue'], resolve),
                    meta: {
                        title: ' 角色列表',
                        permission: true
                    }
                },
                {
                    //    个人信息
                    path: '/age',
                    component: resolve => require(['../components/Userights/age.vue'], resolve),
                    meta: {
                        title: ' 个人信息',
                        permission: true
                    }
                },
                {
                    //    个人详情
                    path: '/height',
                    component: resolve => require(['../components/Userights/height.vue'], resolve),
                    meta: {
                        title: ' 个人详情',
                        permission: true
                    }
                },
                {
                    //    操作列表
                    path: '/caozuo',
                    component: resolve => require(['../components/Userights/caozuo.vue'], resolve),
                    meta: {
                        title: ' 操作列表',
                        permission: true
                    }
                },
                {
                    //    城市资源列表 
                    path: '/ziyuan',
                    component: resolve => require(['../components/Userights/ziyuan.vue'], resolve),
                    meta: {
                        title: ' 城市资源 ',
                        permission: true
                    }
                },
                {
                    //    城市列表 
                    path: '/city',
                    component: resolve => require(['../components/Userights/city.vue'], resolve),
                    meta: {
                        title: ' 资源列表 ',
                        permission: true
                    }
                },
                {
                    //    年龄列表 
                    path: '/age',
                    component: resolve => require(['../components/Userights/age.vue'], resolve),
                    meta: {
                        title: ' 年龄列表 ',
                        permission: true
                    }
                },
                {
                    //    资源列表 
                    path: '/height',
                    component: resolve => require(['../components/Userights/height.vue'], resolve),
                    meta: {
                        title: ' 身高列表 ',
                        permission: true
                    }
                },
                {
                    //    用户列表 
                    path: '/userlist',
                    component: resolve => require(['../components/Userights/userlist.vue'], resolve),
                    meta: {
                        title: ' 用户列表 ',
                        permission: true
                    }
                    
                },
                {
                    //    个人资料 
                    path: '/gerenziliao',
                    component: resolve => require(['../components/Userights/gerenziliao.vue'], resolve),
                    meta: {
                        title: '个人资料',
                        permission: true
                    }
                    
                },
                {
                    //     广告列表 
                    path: '/advertList',
                    component: resolve => require(['../components/Advertising/advertisementype.vue'], resolve),
                    meta: {
                        title: '广告列表',
                        permission: true
                    }
                },
                {
                    //     广告类型管理 
                    path: '/advertisementype',
                    component: resolve => require(['../components/Advertising/advertisementype.vue'], resolve),
                    meta: {
                        title: '广告类型管理 ',
                        permission: true
                    }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },


    ]
})
