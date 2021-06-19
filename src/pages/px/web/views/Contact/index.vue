<template>
	<div class="contact swan-contain-box">
        <div class="large-title ma-t125">我们一直在期待您。<br/>收到信息后我们会尽快回复👋</div>
        <div class="sub-text">也欢迎直接发邮件给 swandesign@163.com</div>
        <div class="service">服务</div>
        <Tag :tagData.sync="tagData" :isLarge="true" @tagChange="tagChange" class="tag-box" :isSingle="isSingle"></Tag>
        <div class="form">
            <div class="form-item" v-for="(item, index) in formList" :key="index" :class="{active:item.flag, txtarea:item.type!='input', error: item.isError}">
                <span class="label">{{item.label}}</span>
                <textarea name="" id="" cols="30" rows="10" v-model="item.value" v-if="item.type!='input'" @focus="gofocus(item)" @blur="goBlur(item)"></textarea>
                <input type="text" v-model="item.value" @focus="gofocus(item)" @blur="goBlur(item)" v-else>
            </div>
        </div>
        <div class="send-btn" @click="submit">发送</div>
    </div>
</template>
<script>
    import Tag from '@/pages/px/web/components/tag'
    import { sendlevmsg } from '@/apis/web'
	export default {
        name: 'Contact',
        components: {
            Tag
        },
        data () {
            return {
                isSingle: true,
                tagData: [{
                    text: '应用设计',
                    isActive: false
                }, {
                    text: '网页设计',
                    isActive: false
                }, {
                    text: '品牌VI设计',
                    isActive: false
                }, {
                    text: 'LOGO设计',
                    isActive: false
                }, {
                    text: '插画',
                    isActive: false
                }, {
                    text: '动效设计',
                    isActive: false
                }, {
                    text: '三维空间设计',
                    isActive: false
                }, {
                    text: '其他',
                    isActive: false
                }],
                formList: [{
                    type: 'input',
                    label: '你的名字',
                    flag: false,
                    value: '',
                    name: 'user',
                    isError: false
                }, {
                    type: 'input',
                    label: '公司名称',
                    flag: false,
                    value: '',
                    name: 'companyName',
                    isError: false
                }, {
                    type: 'input',
                    label: '联系电话',
                    flag: false,
                    value: '',
                    name: 'phone',
                    isError: false
                }, {
                    type: 'input',
                    label: '邮箱',
                    flag: false,
                    value: '',
                    name: 'email',
                    isError: false
                }, {
                    type: 'textarea',
                    label: '请告诉我们您的项目',
                    flag: false,
                    value: '',
                    name: 'content',
                    isError: false
                }],
                info: {
                    user: '',
                    companyName: '',
                    phone: '',
                    email: '',
                    content: '',
                    svcType: ''
                }
            }
        },
        methods: {
            gofocus (item) {
                item.flag = true
                item.isError = false
            },
            goBlur (item) {
                this.info[item.name] = item.value
                if (!item.value) {
                    item.flag = false
                }
            },
            tagChange (svcType) {
                this.info.svcType = svcType
                console.log(this.info.svcType)
            },
            async submit () {
                if (!this.info.svcType) {
                    this.$message({
                        message: '请选择服务类型',
                        type: 'error'
                    })
                }
                let flag = false
                for (const k of this.formList) {
                    if (!k.value) {
                        k.isError = true
                        flag = true
                        break
                    }
                }
                if (flag) return
                const [err] = await sendlevmsg(this.info)
                if (!err) {
                    this.$message({
                        message: '发送成功',
                        type: 'success'
                    })
                    setTimeout(() => {
                        this.$router.push({ name: 'Home' })
                    }, 1000)
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
<style lang="scss" scoped>
	.contact {
		.ma-t125 {
            margin-top: 125px;
        }
        .sub-text {
            margin-top: 42px;
            @include fontSL(24px, 42px);
        }
        .service {
            margin: 155px 0 39px 0;
            @include fontSL(20px, 28px);
        }
        .tag-box {
            width: 720px;
        }
        .your-name {
            @include fontSL(20px, 28px);
            margin-top: 33px;
        }
        .name {
            width: 899px;
            margin-top: 31px;
            padding-bottom: 17px;
            border-bottom: 2px solid #000;
            @include fontSL(30px, 42px);
        }
        .form-item {
            position: relative;
            width: 899px;
            height: 67px;
            margin-top: 80px;
            padding-bottom: 18px;
            border-bottom: 1px solid #F1F1F1;
            &.txtarea {
                height: 202px;
            }
            &.active {
                .label {
                    transform: translate(0, - 40px);
                    @include fontSL(20px, 28px);
                    color: #000;
                }
                input, textarea {
                    opacity: 1;
                    transition-delay: .3s;
                }
            }
            &.error {
                border-color: #f33000;
            }
            .label {
                position: absolute;
                top: 0;
                left: 0;
                color: #D8D8D8;
                font-size: 35px;
                transition: all .4s;
            }
            input {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 49px;
                line-height: 49px;
                font-size: 35px;
                opacity: 0;
            }
            textarea {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 184px;
                line-height: 49px;
                overflow: hidden;
                font-size: 35px;
                opacity: 0;
            }
        }
        .send-btn {
            display: inline-block;
            margin: 80px 0 250px 0;
            @include fontSL(35px, 49px);
            padding-bottom: 5px;
            border-bottom: 3px solid #333;
            cursor: pointer;
        }
	}
</style>
