/*
角色管理的api请求函数
*/
import request from '@/utils/request'
const api_name = '/admin/system/sysRole'
export default {
    /**
     * 获取角色分页列表
     */
    getPageList(page,limit,searchobj){
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'get',
            data: searchobj
        })
    }
}