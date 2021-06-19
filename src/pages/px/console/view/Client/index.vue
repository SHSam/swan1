<template>
    <div>
        <div class="title-box">
            <el-button type="primary" @click="addClient">添加客户</el-button>
        </div>
        <el-table
        :data="tableData"
        style="width: 100%">
            <el-table-column
                prop="date"
                label="企业logo">
                <template slot-scope="scope">
                   <img class="logo" :src="scope.row.logo" alt="">
                </template>
            </el-table-column>
            <el-table-column
                prop="companyName"
                label="公司名称">
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.row)">编辑</el-button>
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
                    <div class="title">公司名称：</div>
                    <div class="value">
                        <el-input v-model="info.companyName" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="item">
                    <div class="title">上传企业logo：</div>
                    <div class="value">
                        <el-upload
                            :multiple="false"
                            :show-file-list="true"
                            :limit='1'
                            action="http://106.15.56.251:8090/api/localStorage/uploadPic"
                            :on-success="onSmallSuccess"
                            :file-list="fileList"
                            list-type="picture-card">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submit">上 传</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { clientList, delClient, addClient, updateClient } from '@/apis'
export default {
    name: 'Client',
    data () {
        return {
            tableData: [],
            input: '',
            centerDialogVisible: false,
            fileList: [],
            isEdit: false,
            info: {
                companyName: '',
                logo: ''
            }
        }
    },
    watch: {
        centerDialogVisible (val) {
            if (!val) {
                this.isEdit = false
                this.info = {
                    companyName: '',
                    logo: ''
                }
                this.fileList = []
            }
        }
    },
    methods: {
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },
        handlePictureCardPreview () {
            // this.dialogImageUrl = file.url;
            // this.dialogVisible = true;
        },
        complete (err) {
            if (!err) {
                this.$message({
                    message: '添加成功',
                    type: 'success'
                })
                this.fechdata()
                this.centerDialogVisible = false
            } else {
                this.$message({
                    message: err.resMsg,
                    type: 'error'
                })
            }
        },
        async submit () {
            if (!this.isEdit) {
                const [err, res] = await addClient(this.info)
                this.complete(err)
            } else {
                const [err, res] = await updateClient(this.info)
                 this.complete(err)
            }
        },
        handleEdit (item) {
            this.centerDialogVisible = true
            this.info = item
            this.isEdit = true
            this.fileList = [{
                url: item.logo,
                name: ''
            }]
        },
        onSmallSuccess (file) {
            this.info.logo = file.body.fileId
        },
        async handleDelete (item) {
            const [err, res] = await delClient({ id: item.customerId })
            if (!err) {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.fechdata()
            } else {
                this.$message({
                    message: '删除失败',
                    type: 'error'
                })
            }
        },
        async fechdata () {
            const [err, res] = await clientList()
            if (!err) {
                this.tableData = res.body.records
            }
        },
        addClient () {
            this.centerDialogVisible = true
        }
    },
    created () {
        this.fechdata()
    }
}
</script>
<style lang="scss"  scoped>
    .logo {
        width: 62px;
        height: 62px;
    }
</style>
