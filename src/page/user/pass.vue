<template>
    <div  class="animated bounceInLeft">
        <el-row>
            <el-col :span="8">
                <el-card><p>资金账户</p><el-link style="color:orange" @click="toCapital">查看</el-link></el-card>
            </el-col>
            <el-col :span="8">
                <el-card><p>存管账户</p><el-link style="color:orange" @click="toDeposit">查看</el-link></el-card>
            </el-col>
            <el-col :span="8">
                <el-card><p>证券账户</p><el-link style="color:orange" @click="toSecurity">查看</el-link></el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        toCapital(){
            this.$router.push('/user/capital')
        },
        toDeposit(){
            this.$router.push('/user/deposit')
        },
        toSecurity(){
            this.$router.push('/user/security')
        }
    },

}
</script>

<style scoped>
.el-card{
    text-align: center;
    color:rgb(255, 255, 255);
    vertical-align:middle;
    display:table-cell;
    height:300px;
    width:300px;
    background-color: rgb(107, 119, 98)
}
.el-row{
    margin-top:100px;
}
</style>
