<template>
    <div>
        <el-container class="bigcon">
            <el-aside class="user">
                <el-button size="mini" type="primary" style="margin-top:20px;margin-left:10px" plain @click="info=true">编辑资料
                </el-button>
                <img class="picture" src="static/avator.jpg">
                <p class="status">未审核</p>
                <p class="username">name</p>
                <hr>
                <el-row class="row">
                    <el-col class="attribute" :span="8">职业:</el-col><el-col class="value" :span="16">xxx</el-col>
                </el-row> 
                <el-row class="row">
                    <el-col class="attribute" :span="8">职业:</el-col><el-col class="value" :span="16">xxx</el-col>
                </el-row>
                <el-row class="row">
                    <el-col class="attribute" :span="8">职业:</el-col><el-col class="value" :span="16">xxx</el-col>
                </el-row>
                <el-row class="row">
                    <el-col class="attribute" :span="8">职业:</el-col><el-col class="value" :span="16">xxx</el-col>
                </el-row>
            </el-aside>
            <el-container class="smallcon">
                <el-header height="40px">
                <el-link @click="toHome">首页</el-link>
                <el-link @click="changePassword=true">修改密码</el-link>
                <el-link @click="exit">退出</el-link></el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
        <el-dialog style="text-align:left" title="修改密码" :visible.sync="changePassword" width="30%">   
            <el-form>
                <el-form-item label="旧密码:" label-width="20%">
                    <el-input show-password v-model="oldPassword"></el-input>
                </el-form-item>
                <el-form-item label="新密码:" label-width="20%">
                    <el-input show-password v-model="newPassword"></el-input>
                </el-form-item>
                <el-form-item label="确认密码:" label-width="20%">
                    <el-input show-password v-model="affirmPassword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row>
                        <el-col :span="2">
                            <el-button type="warning" @click="changePassword=false" plain>取消</el-button>
                        </el-col>
                        <el-col :span="2" :offset="19">
                            <el-button type="success" @click="changePassword=false" plain>确认</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog style="text-align:left" title="审核资料填写" :visible.sync="info" width="50%" :modal-append-to-body='false'>
            <el-form> 
                <el-row>
                    <el-col :span="3">
                        <el-form-item label="姓名:" label-width="100%">
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">                        
                            <el-input v-model="infoForm.name"></el-input>                      
                    </el-col>
                    <el-col :span="2">
                        <el-form-item label="性别:" label-width="100%">
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-select v-model="infoForm.gender">
                            <el-option label="男" value="男"></el-option>
                            <el-option label="女" value="女"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="联系电话:" label-width="100%">
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-input v-model="infoForm.telephone"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <el-form-item label="证件类型:" label-width="100%">
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-select v-model="infoForm.gender">
                            <el-option label="居民身份证" value="居民身份证"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="证件号码:" label-width="100%">
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-input v-model="infoForm.id"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">
                        <el-form-item label="证件生效日期:" label-width="100%">
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-date-picker v-model="info.validDate" type="date" placeholder="选择日期">
                        </el-date-picker> 
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="证件失效日期" label-width="100%">
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-date-picker v-model="info.invalidDate" type="date" placeholder="选择日期">
                        </el-date-picker> 
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="联系邮箱:" label-width="40%">
                            <el-input v-model="infoForm.email"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="联系地址:" label-width="40%">
                            <el-input v-model="infoForm.address"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="职业:" label-width="40%">
                            <el-input v-model="infoForm.profession"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="工作单位:" label-width="40%">
                            <el-input v-model="infoForm.company"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="学历:" label-width="40%">
                            <el-select v-model="infoForm.education">
                                <el-option v-for="item in education" :key="item.code" :label="item.name" :value="item.code"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="营业网点:" label-width="40%">
                            <el-select v-model="infoForm.organization">
                                <el-option v-for="item in organization" :key="item.code" :label="item.name" :value="item.code"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="银行类型:" label-width="40%">
                            <el-select v-model="infoForm.bankType">
                                <el-option v-for="item in bankType" :key="item.code" :label="item.name" :value="item.code"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="银行号码:" label-width="40%">
                            <el-input v-model="infoForm.bankCode"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-row>
                <el-col :span="2">
                    <el-button type="warning" @click="info=false" plain>取消</el-button>
                </el-col>
                <el-col :span="2" :offset="19">
                    <el-button type="success" @click="info=false,question=true" plain>下一步</el-button>
                </el-col>
            </el-row>
        </el-dialog>
        <el-dialog style="text-align:left" title="个人投资人风险承受能力测评问卷" :visible.sync="question" width="80%" :modal-append-to-body='false'>
            1.有两种不同风险的基金：货币市场基金和股票型基金，您认为以下哪个投资比例最合适？<br>
            <el-radio-group v-model="infoForm.ans1">
                <el-radio :label="1">完全是货币基金</el-radio><br>
                <el-radio :label="2">一半以上比例为货币基金，少量为股票型基金</el-radio><br>
                <el-radio :label="3">货币基金与股票型基金各半</el-radio><br>
                <el-radio :label="4">一半以上比例为股票型基金，少量为货币基金</el-radio><br>
                <el-radio :label="5">完全是股票型基金</el-radio><br>
            </el-radio-group>
            <hr>
            2.以下五个投资产品的收益率波动，您愿意投资于波动幅度多大的投资产品？<br>
            <el-radio-group v-model="infoForm.ans2">
                <el-radio :label="1">收益较平均，但很低</el-radio><br>
                <el-radio :label="2">介于5%至-10%之间的波动</el-radio><br>
                <el-radio :label="3">介于15％至－20％之间的波动</el-radio><br>
                <el-radio :label="4">介于30％至－40％之间的波动</el-radio><br>
                <el-radio :label="5">介于50％至－60％之间的波动</el-radio><br>
            </el-radio-group>
            <hr>
            3.您期望的投资回报是多少 (假设通货膨胀率>= 0)?<br>
            <el-radio-group v-model="infoForm.ans3">
                <el-radio :label="1">和通货膨胀率一样即可</el-radio><br>
                <el-radio :label="2">高于通货膨胀率3％</el-radio><br>
                <el-radio :label="3">高于通货膨胀率3-8％</el-radio><br>
                <el-radio :label="4">高于通货膨胀率8-15％</el-radio><br>
                <el-radio :label="5">高于通货膨胀率15％以上</el-radio><br>
            </el-radio-group>
            <hr>
            4.假设您投资了某只基金，当时，您的投资计划是投资5年，一年后基金净值已经增长了50％，市场上没有显示股市会有明确的转变消息。在这种情况下，您会选择：<br>
            <el-radio-group v-model="infoForm.ans4">
                <el-radio :label="1">见好就收，赎回所有基金</el-radio><br>
                <el-radio :label="2">卖掉2/3的基金；继续持有1/3的基金</el-radio><br>
                <el-radio :label="3">卖掉1/3的基金，继续持有2/3的基金</el-radio><br>
                <el-radio :label="4">按原计划投资，不做操作</el-radio><br>
                <el-radio :label="5">该基金操作良好，增加投资</el-radio><br>
            </el-radio-group>
            <hr>
            5.以下哪项描述最符合您的投资态度？<br>
            <el-radio-group v-model="infoForm.ans5">
                <el-radio :label="1">厌恶风险，不希望本金损失，希望获得稳定回报</el-radio><br>
                <el-radio :label="2">保守投资，不希望本金损失，愿意承担一定幅度的收益波动</el-radio><br>
                <el-radio :label="3">如有较高的投资回报，可承受一定本金损失风险</el-radio><br>
                <el-radio :label="4">寻求资金的较高收益和成长性，愿意为此承担本金损失</el-radio><br>
                <el-radio :label="5">希望赚取高回报，愿意为此承担较大本金损失</el-radio><br>
            </el-radio-group>
            <hr>
            6.在您每年的家庭可支配收入中，可用于金融投资（储蓄存款除外）的比例为？<br>
            <el-radio-group v-model="infoForm.ans6">
                <el-radio :label="1">小于10%</el-radio><br>
                <el-radio :label="2">10%至25%</el-radio><br>
                <el-radio :label="3">25%至40%</el-radio><br>
                <el-radio :label="4">40-50%</el-radio><br>
                <el-radio :label="5">大于50%</el-radio><br>
            </el-radio-group>
            <hr>
            7.您有多少年投资股票、基金、外汇、金融衍生产品等风险投资品的经验？<br>
            <el-radio-group v-model="infoForm.ans7">
                <el-radio :label="1">没有经验</el-radio><br>
                <el-radio :label="2">少于2年</el-radio><br>
                <el-radio :label="3">2至5年</el-radio><br>
                <el-radio :label="4">5至8年</el-radio><br>
                <el-radio :label="5">8年以上</el-radio><br>
            </el-radio-group>
            <hr>
            8.您计划的投资期限是多久？<br>
            <el-radio-group v-model="infoForm.ans8">
                <el-radio :label="1">6个月以下</el-radio><br>
                <el-radio :label="2">6个月至1年</el-radio><br>
                <el-radio :label="3">1至3年</el-radio><br>
                <el-radio :label="4">3至5年</el-radio><br>
                <el-radio :label="5">5年以上</el-radio><br>
            </el-radio-group>
            <hr>
            9.以下哪项最能说明您的投资经验？<br>
            <el-radio-group v-model="infoForm.ans9">
                <el-radio :label="1">除存款、国债外，我几乎不投资其他金融产品</el-radio><br>
                <el-radio :label="2">大部分投资于存款、国债等，较少投资于股票、基金等风险产品</el-radio><br>
                <el-radio :label="3">资产均衡分布于存款、国债、银行理财产品、信托产品、股票、基金等</el-radio><br>
                <el-radio :label="4">大部分投资于股票、基金、外汇等高风险产品，较少投资于存款、国债</el-radio><br>
                <el-radio :label="5">全部投资为股票、权证等高风险产品</el-radio><br>
            </el-radio-group>
            <hr>
            10.您的投资目的是？<br>
            <el-radio-group v-model="infoForm.ans10">
                <el-radio :label="1">本金保障</el-radio><br>
                <el-radio :label="2">资产保值为主并略微增长</el-radio><br>
                <el-radio :label="3">资产稳健增长</el-radio><br>
                <el-radio :label="4">追求经常性收益</el-radio><br>
                <el-radio :label="5">追求资产迅速增长</el-radio><br>
            </el-radio-group>
            <hr>
            <el-row>
                <el-col :span="2">
                    <el-button type="warning" @click="question=false" plain>取消</el-button>
                </el-col>
                <el-col :span="2" :offset="20">
                    <el-button type="success" @click="question=false,picVid=true" plain>下一步</el-button>
                </el-col>
            </el-row>
        </el-dialog>
        <el-dialog style="text-align:left" title="图像资料上传" :visible.sync="picVid" width="50%" :modal-append-to-body='false'>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <el-row>
                <el-col :span="12">
                    <div>请依次上传证件正面照片、证件反面照片、本人证件照</div>
                </el-col>
                <el-col :span="2" :offset="10">
                    <el-button type="success" @click="picVid=false">确定</el-button>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>


<script>
export default {
    data(){
        return{
            value1:'',
            dialogImageUrl: '',
            dialogVisible: false,
            changePassword:false,
            oldPassword:'',
            newPassword:'',
            affirmPassword:'',
            question:false,
            info:false,
            picVid:false,
            infoForm:{
                name:'',
                gender:'',
                idType:'',
                id:'',
                validDate:'',
                invalidDate:'',
                telephone:'',
                email:'',
                address:'',
                profession:'',
                company:'',
                education:'',
                roganization:'',
                bankType:'',
                bankCard:'',
                ans1:'',
                ans2:'',
                ans3:'',
                ans4:'',
                ans5:'',
                ans6:'',
                ans7:'',
                ans8:'',
                ans9:'',
                ans10:'',
            },
            organization:[{
                name:'名字',
                code:'1',
            }],
            education:[{
                name:'名字',
                code:'1',
            }],
            bankType:[{
                name:'名字',
                code:'1',
            }],
        }
    },
    methods:{
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
        exit(){
            this.$router.push('/user/login')
        },
        toHome(){
            this.$router.push('/user/pass')
        },
        submit(){
            
        }
    }
}
</script>

<style scoped>
.bigcon{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
}
.el-link{
    margin-top:10px;
    margin-right:10px;
}
.el-header{
    text-align: right;
    background-color: rgb(228, 240, 206);
}
.user{
    background-color:  rgb(210, 228, 182);
}
.status{
    text-align: left;
    margin-top:10px;
    margin-left:100px;
    font-size: 15px;
}
.username{
    text-align:left;
    margin-left:30px;
}
.picture{
    float:left;
    margin-left:20px;
    margin-top:20px;
    width:60px;
    height:60px;
}
.attribute{
    text-align:right;
}
.value{
    text-align: left;
}
.row{
    margin-top: 10px;
}
</style>