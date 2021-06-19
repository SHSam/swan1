<template>
    <div>
        <div class="title">
            案例信息
        </div>
        <div class="content">
            <div class="item">
                <div class="label">标题：</div>
                <div class="item-content">
                    <el-input v-model="info.title" placeholder="请输入标题"></el-input>
                </div>
            </div>
            <div class="item">
                <div class="label">类型：</div>
                <div class="item-content">
                    <el-button v-for="(item, idx) in typeList" :key="idx" :type="item.isActive?'primary':''" @click="typeChange(item)">{{item.text}}</el-button>
                </div>
            </div>
            <div class="item">
                <div class="label">上传案例大图封面：</div>
                <div class="item-content">
                    <el-upload
                        action="http://106.15.56.251:8090/api/localStorage/uploadPic"
                        :multiple="false"
                        :show-file-list="true"
                        :on-success="onSuccess"
                        :limit='1'
                        :file-list="fileList1"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </div>
            </div>
            <div class="item">
                <div class="label">作品说明：</div>
                <div class="item-content">
                    <textarea class="el-input__inner textarea" v-model="info.caseDesc" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="item">
                <div class="label">编辑正文</div>
                <div class="item-content quill">
                    <quill-editor ref="text" v-model="info.content" :options="editorOption"></quill-editor>
                </div>
            </div>
            <div class="item">
                <div class="label">上传小图封面：</div>
                <div class="item-content">
                    <el-upload
                        :multiple="false"
                        :show-file-list="true"
                        :limit='1'
                        action="http://106.15.56.251:8090/api/localStorage/uploadPic"
                        :on-success="onSmallSuccess"
                        :file-list="fileList2"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </div>
            </div>
            <div class="item">
                <div class="label">上传gif：</div>
                <div class="item-content">
                    <el-upload
                        :multiple="false"
                        :show-file-list="true"
                        :limit='1'
                        action="http://106.15.56.251:8090/api/localStorage/uploadPic"
                        :on-success="onSmallsSuccess"
                        :file-list="fileList3"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </div>
            </div>
            <div class="item">
                <div class="label"></div>
                <div class="item-content quill">
                    <el-button type="primary" @click="submit">发布</el-button>
                    <el-button>预览</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { caseAdd, caseDetail, caseUpdate } from '@/apis'
export default {
    name: 'CaseAdd',
    data () {
        return {
            input: '',
            value: '',
            fileList1: [],
            fileList2: [],
            fileList3: [],
            tableData: [],
            goodsForm: '',
            editorOption: {},
            typeList: [{
                text: '平面设计',
                isActive: false,
                code: 'GD'
            }, {
                text: 'APP设计',
                isActive: false,
                code: 'APP'
            }, {
                text: '网页设计',
                isActive: false,
                code: 'WEB'
            }, {
                text: 'H5设计',
                isActive: false,
                code: 'H5'
            }, {
                text: '品牌形象',
                isActive: false,
                code: 'BI'
            }, {
                text: '空间设计',
                isActive: false,
                code: 'SD'
            }, {
                text: '动效设计',
                isActive: false,
                code: 'VD'
            }, {
                text: '插画设计',
                isActive: false,
                code: 'ILD'
            }],
            isEdit: false,
            info: {
                title: '',
                svcType: '',
                caseDesc: '',
                smallCover: '',
                maxCover: '',
                content: '',
                gifCover: ''
            }
        }
    },
    methods: {
        async submit () {
            let str = ''
            this.typeList.forEach(item => {
                if (item.isActive) {
                    str += `${item.code},`
                }
            })
            this.info.svcType = str.replace(/,$/, '')
            try {
                if (this.isEdit) {
                    await caseUpdate(this.info)
                } else {
                    await caseAdd(this.info)
                }
                this.$message({
                    message: '案例添加成功',
                    type: 'success'
                })
                this.$router.push({ name: 'case' })
            } catch (err) {
                console.log(err)
            }
        },
        onSuccess (file) {
            this.info.maxCover = file.body.fileId
        },
        onSmallSuccess (file) {
            this.info.smallCover = file.body.fileId
        },
        onSmallsSuccess (file) {
            this.info.gifCover = file.body.fileId
        },
        typeChange (item) {
            item.isActive = !item.isActive
        },
        async fetchData () {
            try {
                const [err, { body }] = await caseDetail(this.$route.query?.caseId)
                this.info = body
                this.fileList1.push({
                    name: 'max.jpg',
                    url: body.maxCover
                })
                this.fileList2.push({
                    name: 'small.jpg',
                    url: body.smallCover
                })
                this.fileList3.push({
                    name: 'gif.jpg',
                    url: body.gifCover
                })
                const arr = body.svcType.split(',')
                this.typeList.forEach(item => {
                    item.isActive = body.svcType.includes(item.text)
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    created () {
        this.isEdit = !!this.$route.query?.caseId
        if (this.isEdit) {
            this.fetchData()
        }
    }
}
</script>
<style lang="scss"  scoped>
    .title {
        height: 69px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #F0F0F0;
    }
    .content {
        width: 800px;
        padding: 20px 0;
        margin: 0 auto;
    }
    .item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;
        clear: both;
        .label {
            width: 150px;
            text-align: right;
            margin-right: 13px;
            line-height: 40px;
        }
        .item-content {
            display: flex;
            align-items: flex-start;
            width: 577px;
            flex-wrap: wrap;
            input {
                width: 355px;
            }
            button {
                margin-right: 10px;
                margin-left: 0;
                margin-bottom: 10px;
            }
            .textarea {
                height: 78px;
            }
            .quill-editor {
                height: 300px;
            }
        }
        .quill {
            height: 400px;
        }
    }
</style>
