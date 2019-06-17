/**
  * api接口的统一出口
  */
// 用户模块接口
import user from './user-api';
// 后台模块接口
import manage from './manage-api';

// 导出接口
export default {
    user,
    manage,
}