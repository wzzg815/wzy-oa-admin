<template>
  <div class="app-container">
    角色列表
  </div>
</template>
<script>
import api from '@/api/system/sysRole'

export default {
    //定义数据模型
    data(){
        return{

        }
    },
    //页面渲染成功后获取数据
    created(){
        this.fetchData();
    },
    //定义方法
    methods:{
        fetchData(){
            api.list().then(res=>{
                console.log(res);
            })
        }
    }
}
</script>
