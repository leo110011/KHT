<template>
    <div class="animated bounceInLeft">
        <el-table :data="deposits" style="width: 100%">
            <el-table-column prop="code" label="存管账号" width="180">
            </el-table-column>
            <el-table-column prop="bankType" label="银行" width="180">
            </el-table-column>
            <el-table-column prop="bankCard" label="银行卡号码" width="180">
            </el-table-column>
            <el-table-column prop="openTime" label="开户时间" width="180">
            </el-table-column>
            <el-table-column prop="closeTime" label="销户时间" width="180">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="180">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            deposits:[{
                code:'123',
                bankType:'农行',
                bankCard:'123456789',
                openTime:'190505',
                closeTime:'190505',
                status:'正常',
            }],
        }
    }

}
</script>

<style scoped>

</style>
