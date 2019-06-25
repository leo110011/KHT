<template>
    <div class="animated bounceInLeft">
        <el-row class="row">
                <el-card><p>您尚未提交资料或者您的资料尚未审核通过</p></el-card>
        </el-row>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.row{
    margin-top:100px;
}
.el-card{
    text-align: center;
    display:table-cell;
    color:rgb(255, 255, 255);
    vertical-align:middle; 
    height:300px;
    width:300px;
    background-color: rgb(107, 119, 98)
}
</style>
