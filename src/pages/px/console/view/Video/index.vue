<template>
    <div>
        <div class="title-box">
            <el-button type="info" plain @click="centerDialogVisible=true">添加视频</el-button>
        </div>
        <ul>
            <li v-for="(item, idx) in videoArr" :key="idx">
                <video :src="item.path"></video>
                <div class="video-title">{{item.name}}</div>
                <div class="btn-box">
                    <el-button type="primary" @click="edit(item)">编辑</el-button>
                    <el-button @click="del(item)">删除</el-button>
                </div>
            </li>
        </ul>
        <el-dialog
            title="详情"
            :visible.sync="centerDialogVisible"
            width="570px"
            center>
            <div class="dialog-c">
                <div class="item">
                    <div class="title">视频名称：</div>
                    <div class="value">
                        <el-input v-model="info.fileName" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="item">
                    <div class="title">上传视频：</div>
                    <div class="value">
                         <el-upload
                            :multiple="false"
                            :show-file-list="true"
                            :limit='1'
                            action="http://106.15.56.251:8090/api/localStorage/uploadVideo"
                            :on-success="onSmallSuccess"
                            :file-list="fileList"
                            :on-change="handleChange"
                            list-type="picture-card">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="upload">上 传</el-button>
            </span>
        </el-dialog>
        <VideoEdit :visible="visible" :options="options" @close="close" @update="fetchDate"></VideoEdit>
    </div>
</template>
<script>
import chair from '@/assets/img/chair.png'
import VideoEdit from './edit'
import { videoList, addVideo, delVideo } from '@/apis'
export default {
    name: 'VideoManage',
    components: { VideoEdit },
    data () {
        return {
            chair,
            input: '',
            fileList: [],
            videoArr: [],
            centerDialogVisible: false,
            videoname: '',
            visible: false,
            options: {},
            info: {
                fileId: '',
                fileName: ''
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
        async fetchDate () {
            const [err, res] = await videoList()
            if (!err) {
                this.videoArr = res.body
            }
        },
        handleChange (file) {
            this.videoname = file.name
        },
        onSmallSuccess (file) {
            this.info.fileId = file.body.fileId
            this.fileList.push({
                name: this.videoname,
                url: file.body.filePath
            })
        },
        async del (item) {
            const [err, res] = await delVideo({ id: item.materialId })
            if (!err) {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.fetchDate()
            } else {
                this.$message({
                    message: '删除失败',
                    type: 'error'
                })
            }
        },
        async upload () {
            const load = this.$loading()
            const [err, res] = await addVideo(this.info)
            if (!err) {
                this.$message({
                    message: '添加成功',
                    type: 'success'
                })
                load.close()
                this.centerDialogVisible = false
                this.fetchDate()
            } else {
                this.$message({
                    message: '添加失败',
                    type: 'error'
                })
                load.close()
            }
        },
        close () {
            this.visible = false
        },
        edit (item) {
            this.options = item
            this.visible = true
            console.log(item)
        }
    },
    created () {
        this.fetchDate()
    }
}
</script>
<style lang="scss"  scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            width: 328px;
            margin-right: 20px;
            video {
                width: 100%;
                height: 328px;
            }
            .video-title {
                font-size: 18px;
                line-height: 25px;
                margin-top: 14px;
                word-break: keep-all;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .btn-box {
                margin-top: 27px;
            }
        }
    }
</style>
