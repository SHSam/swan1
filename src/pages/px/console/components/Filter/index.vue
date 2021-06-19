<template>
    <div class="title-r">
        <div>
            <span>类型：</span>
            <el-select class="select" v-model="info.svcType" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.value"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div>
            <span>状态：</span>
            <el-select class="select" v-model="info.status" placeholder="请选择">
                <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.value"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-input class="input" v-model="info.content" placeholder="请输入内容"></el-input>
        <el-button type="primary" @click="seach">搜索</el-button>
    </div>
</template>
<script>
export default {
    name: 'FilterBox',
    data () {
        return {
            info: {
                svcType: '',
                status: '',
                content: ''
            },
            options: [{
                value: '平面设计'
            }, {
                value: 'APP设计'
            }, {
                value: '网页设计'
            }, {
                value: 'VI设计'
            }, {
                value: '吉祥物设计'
            }, {
                value: '空间设计'
            }, {
                value: '动效设计'
            }, {
                value: '插画设计'
            }],
            options1: [{
                value: '已上架'
            }, {
                value: '未上架'
            }]
        }
    },
    methods: {
        seach () {
            this.$emit('seach', this.info)
        }
    }
}
</script>
