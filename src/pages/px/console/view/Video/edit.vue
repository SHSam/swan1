<template>
    <div>
        <el-dialog
            title="详情"
            v-if="visible"
            :visible="show"
            :destroy-on-close="false"
            width="570px"
            @close='closeDialog'
            center>
            <div class="dialog-c">
                <div class="item">
                    <div class="title">视频名称：</div>
                    <div class="value">
                        <el-input v-model="options.name" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="item">
                    <div class="title">上传视频：</div>
                    <div class="value">
                         <video class="video-show" :src="options.path"></video>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="update">更 新</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { editVideoName } from '@/apis'
export default {
    name: 'VideoEdit',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        options: Object
    },
    data () {
        return {
            show: true,
            fileList: [],
            isVisible: false
        }
    },
    watch: {
        visible (val) {
            if (val) {
                this.fileList = [{
                    url: this.options.path,
                    name: ''
                }]
            }
        }
    },
    methods: {
        closeDialog () {
            this.$emit('close')
        },
        async update () {
            const [err] = await editVideoName(this.options)
            if (!err) {
                this.$message({
                    message: '更新成功',
                    type: 'success'
                })
                this.closeDialog()
                this.$emit('update')
            } else {
                this.$message({
                    message: err.resMsg,
                    type: 'error'
                })
            }
        }
    }
}
</script>
<style lang="scss"  scoped>
    .video-show {
        width: 146px;
        height: 146px;
        border: 1px solid #f0f0f0;
    }
</style>
