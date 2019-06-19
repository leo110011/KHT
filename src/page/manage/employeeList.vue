<template>
<div>
<!--首行搜索及添加功能-->
  <el-row >
  <el-col :span="5" :offset="16">
    <el-input placeholder="请输入员工姓名" v-model="searchname" prefix-icon="el-icon-search">
    <el-button icon="el-icon-search"></el-button>
    </el-input>
  </el-col>
  <el-col :span="3">
    <el-button
      size="mini"
      type="primary"
      round
      @click="dialogFormVisible = true">新增员工</el-button>
  </el-col>
  </el-row>
    <br></br>

<!--主表格-->
  <el-table
    :data="tableData"
    stripe
    max-height="760"
    style="width: 100%">
    <el-table-column
      label="姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      label="员工ID"
      prop="employeeID">
    </el-table-column>
    <el-table-column
      label="岗位"
      prop="station">
    </el-table-column>
    <el-table-column
      label="证件号码"
      prop="passportID">
    </el-table-column>
    <el-table-column
      label="电话号码"
      prop="phonenumber">
    </el-table-column>
    <el-table-column
      label="地址"
      prop="address">
    </el-table-column>
    <el-table-column
      label="邮箱"
      prop="e_mail">
    </el-table-column>
    <el-table-column
      label="工作状态"
      prop="work_status">
    </el-table-column>
    <el-table-column
      label="操作"
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          icon="el-icon-edit"
          @click="">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          icon="el-icon-delete"
          @click="">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <br></br>

<!--分页-->
  <div>
  <el-pagination
    background
    layout="prev, pager, next"
    :hide-on-single-page="true"
    :page-size="20"
    :total="200">
  </el-pagination>
  </div>

<!--弹框-->
  <el-dialog title="新增员工" :visible.sync="dialogFormVisible">

    <el-form ref="form" :model="form" label-width="80px">
      <el-col span="12" :offset="6">
      <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="员工密码">
      <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="身份证">
      <el-input v-model="form.passportID"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="联系电话">
      <el-input v-model="form.phonenumber"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="联系邮箱">
      <el-input v-model="form.e_mail"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="联系地址">
      <el-input v-model="form.address"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="岗位">
      <el-input v-model="form.station"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="员工状态">
      <el-input v-model="form.work_status"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="机构编号">
      <el-input v-model="form.orgnizeID"></el-input>
      </el-form-item>
      </el-col>
      <el-form-item label="">
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
          name: '邓永豪',
          employeeID: 10086,
          station: '你爹',
          passportID: 110,
          phonenumber: 13016533423,
          address: '人在广东已经嫖到失联',
          e_mail: '123456789@qq.com',
          work_status: '工作中'
        }],
        form: {
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
      }
    },
  }
</script>

<style scoped>

</style>
