<template>
    <div>
        <!-- <div class="title">常见问题</div> -->
        <div class="title-box">
            <el-button type="primary" @click="centerDialogVisible=true">添加问题</el-button>
        </div>
        <el-table
        :data="tableData"
        @selection-change="handleSelectionChange"
        style="width: 100%">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="title"
                label="标题">
            </el-table-column>
            <el-table-column
                prop="content"
                label="内容">
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- <el-pagination
            layout="prev, pager, next"
            :total="50">
        </el-pagination> -->
        <el-dialog
            title="添加常见问题"
            :visible.sync="centerDialogVisible"
            width="570px"
            center>
            <el-form :label-position="'right'" label-width="120px" :model="info">
            <el-form-item label="常见问题名称">
                <el-input v-model="info.title"></el-input>
            </el-form-item>
            <el-form-item label="描述">
                <el-input type="textarea" v-model="info.content"></el-input>
            </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submit">上 传</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { faqList, delfeq, addfeq } from '@/apis'
export default {
    name: 'Qa',
    data () {
        return {
            tableData: [],
            centerDialogVisible: false,
            info: {
                title: '',
                content: ''
            }
        }
    },
    methods: {
        toggleSelection (rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row)
                })
            } else {
                this.$refs.multipleTable.clearSelection()
            }
        },
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        async handleDelete (item) {
            const [err, res] = await delfeq({ id: item.faqId })
            if (!err) {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.fetchdata()
            } else {
                this.$message({
                    message: '删除失败',
                    type: 'error'
                })
            }
        },
        async fetchData () {
            const [err, res] = await faqList()
            if (!err) {
                this.tableData = res.body.records
            }
        },
        async submit () {
            const [err, res] = await addfeq(this.info)
            if (!err) {
                this.fetchData()
                this.centerDialogVisible = false
            } else {
                this.$message({
                    message: err.resMsg,
                    type: 'error'
                })
            }
        }
    },
    created () {
        this.fetchData()
    }
}
</script>
<style lang="scss"  scoped>
    .title {
        height: 69px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #F0F0F0;
    }
</style>
