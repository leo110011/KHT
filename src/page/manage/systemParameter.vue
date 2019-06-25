<template>
  <div>
    <div>
      <el-button-group>
        <el-input v-model="search" placeholder="按照参数名搜索" prefix-icon="el-icon-search"/>
      </el-button-group>

      <el-table
        :data="(tableData.filter(data => !search || data.par_name.toLowerCase().includes(search.toLowerCase()))).slice((currentPage-1)*pagesize, currentPage*pagesize)"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="par_id" label="参数编号"></el-table-column>
        <el-table-column prop="par_name" label="参数名"></el-table-column>
        <el-table-column prop="par_value" label="参数值"></el-table-column>
        <el-table-column type="index" align="center" label="操作" width="250">
          <template slot-scope="scope">
            <el-button
              :id="scope.$index"
              @click.native.prevent="showOld(scope)"
              type="text"
              size="small"
              :disabled="false"
            >修改</el-button>
            <el-dialog title="请修改" :visible.sync="dialogChangeFormVisible" append-to-body>
              <el-form :model="PAR" :rules="rules" ref="PAR" label-width="100px" class="change-PAR">
                <el-form-item prop="id" label="参数编号" :label-width="formLabelWidth">
                  <el-input v-model="PAR.id"></el-input>
                </el-form-item>
                <el-form-item prop="name" label="参数名" :label-width="formLabelWidth">
                  <el-input v-model="PAR.name"></el-input>
                </el-form-item>
                <el-form-item prop="value" label="参数值" :label-width="formLabelWidth">
                  <el-input v-model="PAR.value"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button :plain="true" @click="cancelChange('PAR')">取 消</el-button>
                <el-button type="primary" :plain="true" @click.native.prevent="change_sure()">确 定</el-button>
              </div>
            </el-dialog>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination
        class="pagination"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="pagesizes"
        :page-size="pagesize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :total="getLength()"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      position: 0,
      fullHeight: document.documentElement.clientHeight, //监听屏幕高度
      rowHeight: 70,
      pagesize: 0,
      pagesizes: [],
      currentPage: 1,
      search: "",
      dialogChangeFormVisible: false,
      PAR: {
        id: "",
        name: "",
        value: ""
      },
      formLabelWidth: "120px",

      rules: {
        id: [
          {
            required: true,
            message: "参数编码没输入",
            trigger: "blur"
          },
          //{ type: "number", message: "请输入数字", trigger: "blur" },
          {
            pattern: /^[0-9]+$/,
            message: "不允许输入除数字之外的其他符号"
          }
        ],
        name: [
          {
            required: true,
            message: "不给一下参数名称怎么行",
            trigger: "blur"
          },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        value: [
          {
            required: true,
            message: "参数值是多少",
            trigger: "blur"
          },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ]
      },
      tableData: [
        {
          par_id: 1,
          par_name: "参数1",
          par_value: "1",
        },
        {
          par_id: 2,
          par_name: "参数2",
          par_value: "2",
        },
        {
          par_id: 3,
          par_name: "参数3",
          par_value: "3",
        },
        {
          par_id: 4,
          par_name: "参数4",
          par_value: "4",
        },
        {
          par_id: 5,
          par_name: "参数1",
          par_value: "1",
        },
        {
          par_id: 6,
          par_name: "参数2",
          par_value: "2",
        },
        {
          par_id: 7,
          par_name: "参数3",
          par_value: "3",
        },
        {
          par_id: 8,
          par_name: "参数1",
          par_value: "1",
        },
        {
          par_id: 9,
          par_name: "参数2",
          par_value: "2",
        },
        {
          par_id: 10,
          par_name: "参数3",
          par_value: "3",
        },
        {
          par_id: 11,
          par_name: "参数1",
          par_value: "1",
        },
        {
          par_id: 12,
          par_name: "参数2",
          par_value: "2",
        },
        {
          par_id: 13,
          par_name: "参数3",
          par_value: "3",
        },
        {
          par_id: 14,
          par_name: "参数0",
          par_value: "0",
        }
      ]
    };
  }, //添加一列，“参数状态”，下拉框，有可用和禁用两种状态，为可用时，按钮为修改和禁用，禁用时按钮为修改按钮隐藏，另一个按钮为启用
  mounted() {
    //自适应窗口大小显示表格行数
    this.pagesize = Math.floor(this.fullHeight / this.rowHeight)+2;
    this.pagesizes.push(this.pagesize);
    this.pagesizes.push(Math.floor(this.pagesize * 1.5));
    this.pagesizes.push(this.pagesize * 2);
    this.pagesizes.push(Math.floor(this.pagesize * 2.5));
    window.onresize = () => {
      return (() => {
        window.location.reload();
      })();
    };
  },
  computed: {
    tables: function() {
      var search = this.search;
      if (search) {
        return this.tableData.filter(function(dataNews) {
          return Object.keys(dataNews).some(function(key) {
            return (
              String(dataNews["par_name"])
                .toLowerCase()
                .indexOf(search) > -1 ||
              String(dataNews["par_name"])
                .toLowerCase()
                .indexOf(search.toLowerCase()) > -1
            );
          });
        });
      }
      return this.tableData;
    }
  },

  methods: {
    getLength: function() {
      //console.log(this.tables);
      return this.tables.length;
    },
    cancelChange(ORG) {
      this.dialogChangeFormVisible = false;
      this.$refs[ORG].resetFields();
      this.$message({
        type: "info",
        message: "已取消修改",
        duration: 2000
      });
    },
    showOld(scope) {
      //console.log(Math.floor(this.fullHeight / this.rowHeight));
      this.dialogChangeFormVisible = true;
      this.PAR.id = scope.row.par_id;
      this.PAR.name = scope.row.par_name;
      this.PAR.value = scope.row.par_value;
      this.position = this.tableData.indexOf(scope.row); //记下点击的行号
      //console.log(this.position);
    },
    change_sure() {
      if (this.PAR.id && this.PAR.name != "" && this.PAR.value != "") {
        this.tableData[this.position].par_id = this.PAR.id;
        this.tableData[this.position].par_name = this.PAR.name;
        this.tableData[this.position].par_value = this.PAR.value;
        //console.log(scope);
        //this.$refs[ORG].resetFields();
        this.$message({
          message: "信息修改成功",
          type: "success",
          duration: 2000
        });
        this.dialogChangeFormVisible = false;
      } else {
        this.$message({
          type: "info",
          message: "信息没有完整填写",
          duration: 2000
        });
      }
    },
    handleSizeChange(pagesize) {
      this.pagesize = pagesize;
      this.currentPage = 1;
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    getData() {
      /*axios.post(url,{
        orgCode:1
      },{emulateJSON:true},
      {
        headers:{"Content-type": "application/x-www-form-urlencoded;charset=utf-8",}
      }).then(response=>{*/
      console.log(response);
      this.tableData = data.data.body;
      //})
    },
    created: function() {
      this.getData();
    },

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
      return "";
    }
  }
};
</script>

<style>
.pagination {
  margin-top: 20px;
  text-align: center;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
