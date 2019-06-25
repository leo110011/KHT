<template>
    <div class="animated bounceInLeft">
        <el-table :data="securities" style="width: 100%">
            <el-table-column prop="code" label="证券账号" width="140">
            </el-table-column>
            <el-table-column prop="exchange" label="交易所" width="140">
            </el-table-column>
            <el-table-column prop="market" label="交易市场" width="140">
            </el-table-column>
            <el-table-column prop="customerType" label="客户类型" width="140">
            </el-table-column>
            <el-table-column prop="unit" label="交易单元" width="140">
            </el-table-column>
            <el-table-column prop="openTime" label="开户时间" width="140">
            </el-table-column>
            <el-table-column prop="closeTime" label="销户时间" width="140">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="140">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            securities:[{
                code:'123',
                exchange:'北京',
                market:'北京',
                customerType:'散户',
                unit:'元',
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
