<template>
    <div>
        <div class="animated bounceInLeft">
            <el-row>
                <el-col :span="1" :offset="23">
                    <el-button style="margin-bottom:20px" type="success" @click="addForm=true" plain>增加</el-button>
                </el-col>
            </el-row>
            <el-table :data="capitals" style="width: 100%">
                <el-table-column prop="code" label="资金账号" width="110">
                </el-table-column>
                <el-table-column prop="currency" label="币种" width="110">
                </el-table-column>
                <el-table-column prop="mainFlag" label="主账号" width="110">
                </el-table-column>
                <el-table-column prop="attr" label="属性" width="110">
                </el-table-column>
                <el-table-column prop="organization" label="营业网点" width="110">
                </el-table-column>
                <el-table-column prop="openTime" label="开户时间" width="110">
                </el-table-column>
                <el-table-column prop="closeTime" label="销户时间" width="110">
                </el-table-column>
                <el-table-column prop="status" label="状态" width="110">
                </el-table-column>
                <el-table-column prop="deposit" label="对应的存管账号" width="110">
                </el-table-column>
                <el-table-column class="operation" fixed="right" label="操作" width="180">
                    <el-button type="success" @click="passwordForm=true" plain>修改密码</el-button>
                    <el-button type="warning" plain @click="open">删除</el-button>
                </el-table-column>
            </el-table>
        </div>
            <el-dialog title="修改密码" style="text-align:left" width="30%" :visible.sync="passwordForm" :modal-append-to-body='false'>
                <el-form>
                    <el-form-item label="旧密码:" label-width="20%">
                        <el-input show-password v-model="oldPassword" maxlength="6" placeholder="初始密码为123456"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码:" label-width="20%">
                        <el-input show-password v-model="newPassword" maxlength="6"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码:" label-width="20%">
                        <el-input show-password v-model="affirmPassword" maxlength="6"></el-input>
                    </el-form-item>
                    <el-row>
                        <el-col :span="2">
                            <el-button type="warning" @click="passwordForm=false" plain>取消</el-button>
                        </el-col>
                        <el-col :span="2" :offset="19">
                            <el-button type="success" @click="passwordForm=false" plain>确认</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </el-dialog>
            <el-dialog title="增加资金账号" style="text-align:left" width="30%" :visible.sync="addForm" :modal-append-to-body='false'>
                <el-form>
                    <el-form-item label="银行类型:" label-width="20%">
                        <el-select v-model="bankType">
                            <el-option v-for="item in bankTypes" :key="item.code" :label="item.name" :value="item.code"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="银行卡号:" label-width="20%">
                        <el-input v-model="bankCard"></el-input>
                    </el-form-item>
                    <el-form-item label="资金密码:" label-width="20%">
                        <el-input show-password v-model="password" maxlength="6"></el-input>
                    </el-form-item>
                    <el-row>
                        <el-col :span="2">
                           <el-button type="warning" @click="passwordForm=false" plain>取消</el-button>
                        </el-col>
                        <el-col :span="2" :offset="19">
                            <el-button type="success" @click="passwordForm=false" plain>确认</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </el-dialog>
        </div>
</template>

<script>
export default {
    data(){
        return{
            passwordForm:false,
            addForm:false,
            oldPassword:'',
            newPassword:'',
            affirmPassword:'',
            password:'',
            bankCard:'',
            bankType:'',
            capitals:[{
                code:'123456789123',
                currency:'人民币',
                mainFlag:'否',
                attr:'普通',
                organization:'北京店',
                openTime:'190505',
                closeTime:'190505',
                status:'正常',
                deposit:'123',
            }],
            bankTypes:[{
                name:'名字',
                code:'1',
            }],
        }
    },
    methods:{
        open() {
            this.$confirm('此操作将永久删除该资金账号及其关联的存管账号, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        }
    }
}
</script>

<style scoped>
</style>
