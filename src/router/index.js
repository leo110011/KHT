import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode:"history",
    routes: [{
            path: '',
            redirect: '/user/notpass'
        },
        {
            path: '/user',
            name: 'user',
            component: () =>
                import ('../page/user/home.vue'), // 组件懒加载
            children: [{
                    path: 'deposit',
                    component: () =>
                        import ('../page/user/deposit.vue'),
                    meta: ['存管账号'],
                },
                {
                    path: 'capital',
                    component: () =>
                        import ('../page/user/capital.vue'),
                    meta: ['资金账号'],
                },
                {
                    path: 'security',
                    component: () =>
                        import ('../page/user/security.vue'),
                    meta: ['证券账号'],
                },
                {
                    path: 'pass',
                    component: () =>
                        import ('../page/user/pass.vue'),
                    meta: ['已审核'],
                },
                {
                    path: 'notpass',
                    component: () =>
                        import ('../page/user/notpass.vue'),
                    meta: ['未审核'],
                }
            ]
        },
        {
            path: '/user/login',
            component: () =>
                import ('../page/user/login.vue'),
            meta: ['登录'],
        },
        {
            path: '/user/register',
            component: () =>
                import ('../page/user/register.vue'),
            meta: ['注册'],
        },
        {
            path: '/manage',
            name: 'manage',
            component: () =>
                import ('../page/manage/manage.vue'),
            children: [{
                path: '',
                redirect: '/manage/login'
            }, {
                path: 'home',
                component: () =>
                    import ('../page/manage/home.vue'),
                meta: [],
            }, {
                path: 'userlist',
                component: () =>
                    import ('../page/manage/userList.vue'),
                meta: ['用户列表'],
            }, {
                path: 'organizationlist',
                component: () =>
                    import ('../page/manage/organizationList.vue'),
                meta: ['统计查询', '机构列表'],
            }, {
                path: 'operationhistory',
                component: () =>
                    import ('../page/manage/operationHistory.vue'),
                meta: ['统计查询', '操作记录'],
            }, {
                path: 'employeelist',
                component: () =>
                    import ('../page/manage/employeeList.vue'),
                meta: ['员工列表'],
            }, {
                path: 'systemparameter',
                component: () =>
                    import ('../page/manage/systemParameter.vue'),
                meta: ['系统设置', '系统参数'],
            }, {
                path: 'organizationmanage',
                component: () =>
                    import ('../page/manage/organizationManage.vue'),
                meta: ['系统设置', '机构设置'],
            }]
        },
        {
            path: '/manage/login',
            component: () =>
                import ('../page/manage/login.vue'),
            meta: ['登录'],
        },
    ]
})