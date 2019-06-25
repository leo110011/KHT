<template>
  <div>
    <div>
      <el-row>
        <el-button-group>
          <el-button @click="add('ORG')">添加机构</el-button>
        </el-button-group>
        <!-- /////////////////////////////////////////////////////////////////// -->
        <template>
          <el-dialog v-dialogDrag title="请填写机构信息" :visible.sync="dialogAddFormVisible" append-to-body>
            <el-form :model="ORG" :rules="rules" ref="ORG" label-width="100px">
              <el-form-item prop="code" label="机构编号" :label-width="formLabelWidth">
                <el-input v-model="ORG.code"></el-input>
              </el-form-item>
              <el-form-item prop="name" label="机构名称" :label-width="formLabelWidth">
                <el-input v-model="ORG.name"></el-input>
              </el-form-item>
              <el-form-item prop="addr" label="机构地址" :label-width="formLabelWidth">
                <el-input v-model="ORG.addr"></el-input>
              </el-form-item>
              <el-form-item prop="tel" label="联系电话" :label-width="formLabelWidth">
                <el-input v-model="ORG.tel"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button :plain="true" @click="cancelAdd('ORG')">取 消</el-button>
              <el-button type="primary" :plain="true" @click.native.prevent="add_sure('ORG')">添 加</el-button>
            </div>
          </el-dialog>
        </template>
        <!-- /////////////////////////////////////////////////////////////////// -->
        <el-button-group>
          <template slot-scope="scope">
            <el-button @click.native.prevent="delAll(scope.$index, tableData)">批量删除</el-button>
          </template>
        </el-button-group>
        <el-button-group>
          <el-button @click.native.prevent="cancelSelect()">取消勾选</el-button>
        </el-button-group>
        <el-button-group>
          <el-input
            v-model="search"
            placeholder="按照机构信息搜索"
            icon="el-icon-search"
            prefix-icon="el-icon-search"
          />
        </el-button-group>
      </el-row>
      <el-row>
        <el-table
          ref="multipleTable"
          :data="(tableData.filter(data => !search || data.ORG_code.toLowerCase().includes(search.toLowerCase()) || 
                                                 data.ORG_name.toLowerCase().includes(search.toLowerCase()) || 
                                                 data.ORG_addr.toLowerCase().includes(search.toLowerCase()) ||  
                                                 data.ORG_tel.toLowerCase().includes(search.toLowerCase()) )).slice((currentPage-1)*pagesize, currentPage*pagesize) "
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>

          <el-table-column prop="ORG_code" label="机构编号"></el-table-column>
          <el-table-column prop="ORG_name" label="机构名称"></el-table-column>
          <el-table-column prop="ORG_addr" label="机构地址"></el-table-column>
          <el-table-column prop="ORG_tel" label="联系电话"></el-table-column>
          <el-table-column align="center" label="操作" width="250">
            <template slot-scope="scope">
              <el-button @click.native.prevent="showOld(scope)" type="text" size="small">修改</el-button>
              <el-dialog title="请修改" :visible.sync="dialogChangeFormVisible" append-to-body>
                <el-form
                  :model="ORG"
                  :rules="rules"
                  ref="ORG"
                  label-width="100px"
                  class="change-ORG"
                >
                  <el-form-item prop="code" label="机构编号" :label-width="formLabelWidth">
                    <el-input v-model="ORG.code"></el-input>
                  </el-form-item>
                  <el-form-item prop="name" label="机构名称" :label-width="formLabelWidth">
                    <el-input v-model="ORG.name"></el-input>
                  </el-form-item>
                  <el-form-item prop="addr" label="机构地址" :label-width="formLabelWidth">
                    <el-input v-model="ORG.addr"></el-input>
                  </el-form-item>
                  <el-form-item prop="tel" label="联系电话" :label-width="formLabelWidth">
                    <el-input v-model="ORG.tel"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button :plain="true" @click="cancelChange('ORG')">取 消</el-button>
                  <el-button type="primary" :plain="true" @click.native.prevent="change_sure('ORG')">确 定</el-button>
                </div>
              </el-dialog>

              <el-button @click.native.prevent="deleteRow(scope.$index)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
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
      foundData: -1,

      currentPage: 1,
      tableData: [
        {
          ORG_code: "A001",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "15975569874"
        },
        {
          ORG_code: "A002",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "1597874"
        },
        {
          ORG_code: "B001",
          ORG_name: "刘旭",
          ORG_addr: "广东佛山",
          ORG_tel: "157894966"
        },
        {
          ORG_code: "C002",
          ORG_name: "清华",
          ORG_addr: "北京",
          ORG_tel: "145678324"
        },
        {
          ORG_code: "A003",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "15975569874"
        },
        {
          ORG_code: "A004",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "1597874"
        },
        {
          ORG_code: "B002",
          ORG_name: "刘旭",
          ORG_addr: "广东佛山",
          ORG_tel: "157894966"
        },
        {
          ORG_code: "C003",
          ORG_name: "清华",
          ORG_addr: "北京",
          ORG_tel: "145678324"
        },
        {
          ORG_code: "A005",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "15975569874"
        },
        {
          ORG_code: "A006",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "1597874"
        },
        {
          ORG_code: "B007",
          ORG_name: "刘旭",
          ORG_addr: "广东佛山",
          ORG_tel: "157894966"
        },
        {
          ORG_code: "C006",
          ORG_name: "清华",
          ORG_addr: "北京",
          ORG_tel: "145678324"
        },
        {
          ORG_code: "A008",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "15975569874"
        },
        {
          ORG_code: "A009",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "1597874"
        },
        {
          ORG_code: "B008",
          ORG_name: "刘旭",
          ORG_addr: "广东佛山",
          ORG_tel: "157894966"
        },
        {
          ORG_code: "C007",
          ORG_name: "清华",
          ORG_addr: "北京",
          ORG_tel: "145678324"
        },
        {
          ORG_code: "A001",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "15975569874"
        },
        {
          ORG_code: "A002",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "1597874"
        },
        {
          ORG_code: "B001",
          ORG_name: "刘旭",
          ORG_addr: "广东佛山",
          ORG_tel: "157894966"
        },
        {
          ORG_code: "C002",
          ORG_name: "清华",
          ORG_addr: "北京",
          ORG_tel: "145678324"
        },
        {
          ORG_code: "A003",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "15975569874"
        },
        {
          ORG_code: "A004",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "1597874"
        },
        {
          ORG_code: "B002",
          ORG_name: "刘旭",
          ORG_addr: "广东佛山",
          ORG_tel: "157894966"
        },
        {
          ORG_code: "C003",
          ORG_name: "清华",
          ORG_addr: "北京",
          ORG_tel: "145678324"
        },
        {
          ORG_code: "A005",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "15975569874"
        },
        {
          ORG_code: "A006",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "1597874"
        },
        {
          ORG_code: "B007",
          ORG_name: "刘旭",
          ORG_addr: "广东佛山",
          ORG_tel: "157894966"
        },
        {
          ORG_code: "C006",
          ORG_name: "清华",
          ORG_addr: "北京",
          ORG_tel: "145678324"
        },
        {
          ORG_code: "A008",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "15975569874"
        },
        {
          ORG_code: "A009",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "1597874"
        },
        {
          ORG_code: "B008",
          ORG_name: "刘旭",
          ORG_addr: "广东佛山",
          ORG_tel: "157894966"
        },
        {
          ORG_code: "C007",
          ORG_name: "清华",
          ORG_addr: "北京",
          ORG_tel: "145678324"
        }
      ],
      search: "",
      multipleSelection: [],

      dialogAddFormVisible: false,
      addData: {},
      dialogChangeFormVisible: false,
      //pageValue: false,
      ORG: {
        code: "",
        name: "",
        addr: "",
        tel: ""
      },
      formLabelWidth: "120px",

      rules: {
        code: [
          {
            required: true,
            message: "机构编码没输入",
            trigger: "blur"
          },
          { min: 4, max: 4, message: "长度为4个字符", trigger: "blur" },
          {
            pattern: /^[A-Za-z0-9]+$/,
            message: "不允许输入空格等特殊符号"
          }
        ],
        name: [
          {
            required: true,
            message: "不给一下机构名称怎么行",
            trigger: "blur"
          },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
          //{ pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/, message: '不允许输入空格等特殊符号' }
        ],
        addr: [
          {
            required: true,
            message: "没有地址找不到啊。。。",
            trigger: "blur"
          },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
          //{ pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/, message: '不允许输入空格等特殊符号' }
        ],
        tel: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          },
          { min: 11, max: 11, message: "手机号都是11位的哦", trigger: "blur" },
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: "输入不符合手机号规则"
          }
        ]
      }
    };
  },
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
              String(dataNews[key])
                .toLowerCase()
                .indexOf(search) > -1 ||
              String(dataNews[key])
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
      console.log(this.tables.length);
      console.log(Math.ceil(this.fullHeight / this.rowHeight))
      return this.tables.length;
    },
    add(ORG) {
      this.addData = {};
      this.dialogAddFormVisible = true;
      //console.log(this.tableData.length);
      this.$refs[ORG].resetFields();
    },
    cancelAdd(ORG) {
      this.dialogAddFormVisible = false;
      this.$refs[ORG].resetFields();
    },
    add_sure(ORG) {

      /*if (
        this.ORG.code != "" &&
        this.ORG.name != "" &&
        this.ORG.addr != "" &&
        this.ORG.tel != ""
      ) */
      this.$refs[ORG].validate((valid)=>{
        if(valid)
      {
        this.addData.ORG_code = this.ORG.code;
        this.addData.ORG_name = this.ORG.name;
        this.addData.ORG_addr = this.ORG.addr;
        this.addData.ORG_tel = this.ORG.tel;
        this.tableData.push(this.addData);
        //console.log(this.addData)
        
        this.$message({
          message: "机构添加成功",
          type: "success",
          duration: 2000
        });
        this.$refs[ORG].resetFields();
         this.dialogAddFormVisible = false;
      } else {
        this.$message({
          type: "info",
          message: "信息填写有问题",
          duration: 2000
        });
      }
      });
      
       
    },

    deleteRow(index) {
      let that = this;
      this.$confirm("此操作将永久删除该机构, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          that.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
            duration: 2000
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除。",
            duration: 2000
          });
        });
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
      //console.log(this.tableData.indexOf(this.multipleSelection[1]));
    },

    delAll(index) {
      const length = this.multipleSelection.length;
      console.log(length);
      if (length > 0) {
        this.$confirm("此操作将永久删除这些机构, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        })
          .then(() => {
            for (let i = 0; i < length; i++) {
              this.tableData.splice(
                this.tableData.indexOf(this.multipleSelection[i]),
                1
              );

              //console.log(this.tableData.indexOf(this.multipleSelection[i]));
            }
            this.$message({
              type: "success",
              message: "删除成功!",
              duration: 2000
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除。",
              duration: 2000
            });
          });
      } else {
        this.$notify({
          title: "提示",
          message: "请先勾选要删除的项!",
          type: "info",
          duration: 2000
        });
      }
    },
    cancelSelect(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
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
      this.dialogChangeFormVisible = true;
      this.ORG.code = scope.row.ORG_code;
      this.ORG.name = scope.row.ORG_name;
      this.ORG.addr = scope.row.ORG_addr;
      this.ORG.tel = scope.row.ORG_tel;
      this.position = this.tableData.indexOf(scope.row); //记下点击的行号
      //console.log(this.position);
    },
    change_sure(ORG) {
      /*if (
        this.ORG.code != "" &&
        this.ORG.name != "" &&
        this.ORG.addr != "" &&
        this.ORG.tel != ""
      )*/
      this.$refs[ORG].validate((valid)=>{
        if(valid)
      {
        this.tableData[this.position].ORG_code = this.ORG.code;
        this.tableData[this.position].ORG_name = this.ORG.name;
        this.tableData[this.position].ORG_addr = this.ORG.addr;
        this.tableData[this.position].ORG_tel = this.ORG.tel;
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
          message: "信息填写有问题",
          duration: 2000
         });
      }
      });
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
    handleSizeChange(pagesize) {
      this.pagesize = pagesize;
      this.currentPage = 1;
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    created: function() {
      this.getData();
    }
  }
};
</script>

<style>
.pagination {
  margin-top: 20px;
  text-align: center;
}
</style>