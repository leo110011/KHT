<template>
<!--首行功能-->
<div>
  <el-row >
    <el-col :span="2">
      <el-button type="text">按机构分类</el-button>
    </el-col>
    <el-col :span="5" :offset="16">
      <el-input placeholder="搜索用户名" v-model="searchname" prefix-icon="el-icon-search">
      </el-input>
    </el-col>
  </el-row>
    <br></br>

<!--主表格-->
  <el-table
    :data="tableData"
    :modal-append-to-body='false'
    stripe
    max-height="770"
    style="width: 100%">
    <el-table-column
      align="center"
      label="用户ID"
      prop="userID">
    </el-table-column>
    <el-table-column
      align="center"
      label="姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      align="center"
      label="性别"
      prop="sexual">
    </el-table-column>
    <el-table-column
      align="center"
      label="证件类型"
      prop="passport_type">
    </el-table-column>
    <el-table-column
      align="center"
      label="证件号码"
      prop="passportID">
    </el-table-column>
    <el-table-column
      align="center"
      label="邮箱"
      prop="e_mail">
    </el-table-column>
    <el-table-column
      align="center"
      label="状态"
      prop="user_status">
    </el-table-column>
    <el-table-column
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-view"
          @click="dialogFormVisible = true">审核</el-button>
      </template>
    </el-table-column>
  </el-table>
  <br></br>
<!--分页-->
  <div>
  <el-pagination
    style="text-align: center"
    background
    layout="prev, pager, next, jumper"
    :hide-on-single-page="true"
    :page-size="20"
    :total="200">
  </el-pagination>
  </div>

<!--弹框-->
  <el-dialog style="text-align:center" title="用户详情" :visible.sync="dialogFormVisible" width="50%" :modal-append-to-body='false' append-to-body>
      <el-form>
          <el-row>
              <el-col :span="10" >
                  <el-form-item label="姓名:" label-width="40%">
                    <el-input v-model="form.name" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="4" offset="1">
                  <el-form-item label="性别:" label-width="40%">
                    <el-input v-model="form.sexual" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8" offset="1">
                  <el-form-item label="联系电话:" label-width="40%">
                    <el-input v-model="form.phonenumber" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span="4">
                  <el-form-item label="联系地址:" label-width="100%">
                  </el-form-item>
              </el-col>
              <el-col :span="11">
                      <el-input v-model="form.address" :readonly="true"></el-input>
              </el-col>
              <el-col :span="8" offset="1">
                  <el-form-item label="联系邮箱:" label-width="40%">
                      <el-input v-model="form.e_mail" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span="10">
                  <el-form-item label="证件类型:" label-width="40%">
                    <el-input v-model="form.passport_type" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="12">
                  <el-form-item label="证件号码:" label-width="40%">
                     <el-input v-model="form.passportID" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span="10">
                  <el-form-item label="机构编号:" label-width="40%">
                    <el-input v-model="form.orgnizeID" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="12">
                  <el-form-item label="机构名称:" label-width="40%">
                     <el-input v-model="form.orgnize_name" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span="10">
                  <el-form-item label="生效日期:" label-width="40%">
                     <el-input v-model="form.effect_data" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="12">
                  <el-form-item label="失效日期:" label-width="40%">
                     <el-input v-model="form.unefeect_data" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span="10">
                  <el-form-item label="职业:" label-width="40%">
                      <el-input v-model="form.vocation" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="12">
                  <el-form-item label="工作单位:" label-width="40%">
                      <el-input v-model="form.work_station" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span="10">
                  <el-form-item label="学历:" label-width="40%">
                      <el-input v-model="form.education" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="12">
                  <el-form-item label="投资者类型:" label-width="40%">
                      <el-input v-model="form.invest_type" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="10">
                  <el-form-item label="开户时间:" label-width="40%">
                      <el-input v-model="form.open_account_data" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="12">
                  <el-form-item label="销户时间:" label-width="40%">
                      <el-input v-model="form.end_account_data" :readonly="true"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="用户状态:" label-width="40%">
                  <el-input v-model="form.user_status" :readonly="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="dialogFormVisible = false">不通过 </el-button>
        <el-button type="primary" @click="dialogFormVisible = false">通 过</el-button>
      </div>
  </el-dialog>
</div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible:false,
        searchname:'',
        tableData: [{
          userID: 10086,
          name: '王小虎',
          sexual: '男',
          passport_type: '',
          passportID: 110,
          e_mail: '10566950087@qq.com',
          user_status: '工作中'
        }, {
          userID: 10087,
          name: '王大虎',
          sexual: '女',
          passport_type: '',
          passportID: 110,
          e_mail: '10566950087@qq.com',
          user_status: '退休'
        }],
        form: {
          orgnizeID: 10010,
          orgnize_name: '俺是你爹',
          name: '我是你爹',
          sexual: '女',
          passport_type: '身份证',
          passportID: 154875642315487896,
          effect_data: '1999.04.03',
          unefeect_data:'2020.04.03',
          phonenumber: 12345678912,
          e_mail: '51651321@11.com',
          address: '我今晚格即佛格忘记我一沃尔夫地位发的',
          work_station: '国家机构',
          vocation: '经理',
          education: '小学',
          invest_type: '小额',
          open_account_data: '1999.10.08',
          end_account_data: '2020.06.23',
          user_status: '已开户'
        },
      }
    },
  }
</script>

<style scoped>

</style>
