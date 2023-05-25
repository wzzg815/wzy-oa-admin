/*
角色管理的api请求函数
*/
import request from "@/utils/request";
const api_name = "/admin/system/sysRole";
export default {
  // 根据id获取角色信息
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: "get",
      // 如果是普通对象写法 params:对象参数名称
      // 如果使用json对象的写法 data:json对象
      params: searchObj
    });
  },
  // 角色删除
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: "delete"
    });
  },
  save(role) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: role
    })
  },
  getById(id) {
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get'
    })
  },
  updateById(role) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: role
    })
  },
  batchRemove(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: `delete`,
      data: idList
    })
  },
};
