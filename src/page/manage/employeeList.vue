<template>
<div>
<!--首行搜索及添加功能-->
  <el-row >
  <el-col :span="4" :offset="17">
    <el-input placeholder="请输入员工姓名" v-model="searchname" prefix-icon="el-icon-search">
    <el-button icon="el-icon-search"></el-button>
    </el-input>
  </el-col>
  <el-col :span="2" >
    <el-button
      style="margin-left:50px"
      size="mini"
      type="primary"
      round
      @click="increase_dialogFormVisible = true">新增员工</el-button>
  </el-col>
  </el-row>
    <br></br>

<!--主表格-->
  <el-table
    :data="tableData"
    :modal-append-to-body='false'
    stripe
    style="width: 100%">
    <el-table-column
      align="center"
      label="姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      align="center"
      label="员工ID"
      prop="employeeID">
    </el-table-column>
    <el-table-column
      align="center"
      label="岗位"
      prop="station">
    </el-table-column>
    <el-table-column
      align="center"
      label="证件号码"
      prop="passportID">
    </el-table-column>
    <el-table-column
      align="center"
      label="电话号码"
      prop="phonenumber">
    </el-table-column>
    <el-table-column
      align="center"
      label="地址"
      prop="address">
    </el-table-column>
    <el-table-column
      align="center"
      label="邮箱"
      prop="e_mail">
    </el-table-column>
    <el-table-column
      align="center"
      label="工作状态"
      prop="work_status">
    </el-table-column>
    <el-table-column
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="text"
          icon="el-icon-edit"
          @click="modify_dialogFormVisible = true">修改</el-button>
        <el-button
          size="mini"
          type="text"
          icon="el-icon-delete"
          @click="">删除</el-button>
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
  <el-dialog title="新增员工" :visible.sync="increase_dialogFormVisible" append-to-body style="text-align: center">
    <el-form class="eform" ref="form" :model="increse_form" label-width="80px" :rules="rules">
      <el-form-item label="岗位" prop="station">
      <el-input v-model="increse_form.station"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
      <el-input v-model="increse_form.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="passportID">
      <el-input v-model="increse_form.passportID"></el-input>
      </el-form-item>
      <el-form-item label="员工密码" prop="pwd">
      <el-input v-model="increse_form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phonenumber">
      <el-input v-model="increse_form.phonenumber"></el-input>
      </el-form-item>
      <el-form-item label="联系邮箱" prop="e_mail">
      <el-input v-model="increse_form.e_mail"></el-input>
      </el-form-item>
      <el-form-item label="联系地址" prop="address">
      <el-input v-model="increse_form.address"></el-input>
      </el-form-item>
      <el-form-item label="员工状态" prop="work_status">
      <el-input v-model="increse_form.work_status"></el-input>
      </el-form-item>
      <el-form-item label="机构编号" prop="orgnizeID">
      <el-input v-model="increse_form.orgnizeID"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="increase_dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="increase_dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>

  <el-dialog title="修改信息" :visible.sync="modify_dialogFormVisible" append-to-body style="text-align: center">
    <el-form class="eform" ref="form" :model="modify_form" label-width="80px" :rules="rules">
      <el-form-item label="岗位" prop="station">
      <el-input v-model="modify_form.station"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
      <el-input v-model="modify_form.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="passportID">
      <el-input v-model="modify_form.passportID"></el-input>
      </el-form-item>
      <el-form-item label="员工账号" prop="employeeID">
      <el-input v-model="modify_form.employeeID"></el-input>
      </el-form-item>
      <el-form-item label="员工密码" prop="pwd">
      <el-input v-model="modify_form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phonenumber">
      <el-input v-model="modify_form.phonenumber"></el-input>
      </el-form-item>
      <el-form-item label="联系邮箱" prop="e_mail">
      <el-input v-model="modify_form.e_mail"></el-input>
      </el-form-item>
      <el-form-item label="联系地址" prop="address">
      <el-input v-model="modify_form.address"></el-input>
      </el-form-item>
      <el-form-item label="员工状态" prop="work_status">
      <el-input v-model="modify_form.work_status"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="modify_dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="modify_dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
  export default {
    data() {
      return {
        increase_dialogFormVisible: false,
        modify_dialogFormVisible: false,
        searchname:'',
        tableData: [{
          name: '邓永豪',
          employeeID: 10086,
          station: '你爹',
          passportID: 110,
          phonenumber: 13016533423,
          address: '人在广东已经嫖到失联',
          e_mail: '123456789@qq.com',
          work_status: '工作中'
        },{
          name: '邓adsf',
          employeeID: 186,
          station: '你',
          passportID: 110,
          phonenumber: 13016533423,
          address: '人在广东已经嫖到失联',
          e_mail: '123456789@qq.com',
          work_status: '事业中'
        },{
          name: '邓永豪',
          employeeID: 10086,
          station: '你爹',
          passportID: 110,
          phonenumber: 13016533423,
          address: '人在广东已经嫖到失联',
          e_mail: '123456789@qq.com',
          work_status: '工作中'
        },{
          name: '邓adsf',
          employeeID: 186,
          station: '你',
          passportID: 110,
          phonenumber: 13016533423,
          address: '人在广东已经嫖到失联',
          e_mail: '123456789@qq.com',
          work_status: '事业中'
        },
      ],
        increse_form: {
          name: '',
          pwd: '',
          passportID: '',
          phonenumber: '',
          e_mail: '',
          address: '',
          station: '',
          work_status: '',
          orgnizeID:'',
        },
        modify_form: {
          employeeID: 0,
          station: '00',
          pwd: '00',
          name: '00',
          passportID: '000',
          phonenumber: '00',
          e_mail: '000',
          address: '0',
          work_status: '000',
        },
        rules: {
          employeeID: [
            {
              required: true,
              message: "请输入员工账号",
              trigger: "blur"
            },
            {
              pattern: /^[0-9]+$/,
              message: "不允许输入除数字之外的其他符号"
            }
          ],
          station: [
            {
              required: true,
              message: "请输入员工岗位",
              trigger: "blur"
            },
            { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
          ],
          pwd: [
            {
              required: true,
              message: "请输入员工密码",
              trigger: "blur"
            },

            { min: 8, max: 16, message: "密码最少8位，最多16位", trigger: "blur" },
            {
              pattern: /^[\w_.@]{8,16}$/,
              message: "密码可由英文字母，数字及特殊字符@._组成"
            }
          ],
          name: [
            {
              required: true,
              message: "请输入姓名",
              trigger: "blur"
            }
          ],
          passportID: [
            {
              required: true,
              message: "请输入身份证号码",
              trigger: "blur"
            },
            { min: 18, max: 18, message: "请输入18位长度的身份证号码", trigger: "blur" }
          ],
          phonenumber: [
            {
              required: true,
              message: "请输入电话号码",
              trigger: "blur"
            },
            { min: 11, max: 11, message: "请输入11位电话号码", trigger: "blur" }
          ],
          e_mail: [
            {
              required: true,
              message: "请输入电子邮箱",
              trigger: "blur"
            },
            {
              pattern: /^\w+@[a-z0-9]+\.[a-z]{2,4}$/,
              message: "电子邮箱地址格式为xxx@xxx.xxx"
            }
          ],
          address: [
            {
              required: true,
              message: "请输入常驻地址",
              trigger: "blur"
            }
          ],
          work_status: [
            {
              required: true,
              message: "请输入工作状态",
              trigger: "blur"
            }
          ],
          orgnizeID: [
            {
              required: true,
              message: "请输入机构编号",
              trigger: "blur"
            }
          ]
        },
      }
    },
  }
</script>

<style scoped>
.eform{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.el-form-item{
  width: 50%;
}
</style>
