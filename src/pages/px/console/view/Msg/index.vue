<template>
    <div>
        <div class="title-box">
            <FilterBox @seach="seach"></FilterBox>
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
                prop="svcType"
                label="服务类型"
                width="180">
            </el-table-column>
            <el-table-column
                prop="user"
                label="名字"
                width="180">
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="companyName"
                label="公司"
                width="180">
            </el-table-column>
            <el-table-column
                prop="content"
                label="内容"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.row)">查看</el-button>
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
            title="详情"
            :visible.sync="centerDialogVisible"
            width="570px"
            center>
            <div class="dialog-c">
                <div class="item">
                    <div class="title">姓名：</div>
                    <div class="value">{{detail.user}}</div>
                </div>
                <div class="item">
                    <div class="title">服务类型：</div>
                    <div class="value">{{detail.svcType}}</div>
                </div>
                <div class="item">
                    <div class="title">公司名称：</div>
                    <div class="value">{{detail.companyName}}</div>
                </div>
                <div class="item">
                    <div class="title">联系电话：</div>
                    <div class="value">{{detail.phone}}</div>
                </div>
                <div class="item">
                    <div class="title">邮箱：</div>
                    <div class="value">{{detail.email}}</div>
                </div>
                <div class="item item-t">
                    <div class="title">项目内容：</div>
                    <div class="value">{{detail.content}}</div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { levmsgList, levmsgdelete } from '@/apis'
import FilterBox from '@/pages/px/console/components/Filter'
export default {
    name: 'QaList',
    components: { FilterBox },
    data () {
        return {
            input: '',
            value: '',
            centerDialogVisible: false,
            options: [],
            tableData: [],
            detail: {},
            query: {}
        }
    },
    methods: {
        seach (info) {
            this.query = info
            this.fetchdata()
        },
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
        handleEdit (item) {
            this.detail = item
            this.centerDialogVisible = true
        },
        async handleDelete (item) {
            const [err, res] = await levmsgdelete({ id: item.lmId })
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
        async fetchdata () {
            const [err, res] = await levmsgList(this.query)
            if (!err) {
                this.tableData = res.body.records
            }
        }
    },
    created () {
        this.fetchdata()
    }
}
</script>
<style lang="scss"  scoped>
    .title-box {
        height: 69px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #F0F0F0;
    }
</style>
