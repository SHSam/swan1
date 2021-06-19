<template>
    <div class="tag-box">
        <div v-for="(item, index) in tagData" :key="index" class="tag-item" :class="{'large-tag':isLarge, active: item.isActive}" @click="toggle(item)">{{item.text}}</div>
    </div>
</template>
<script>
    export default {
        name: 'Tag',
        props: {
            tagData: Array,
            isLarge: {
                type: Boolean,
                default: false
            },
            isSingle: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                svcType: ''
            }
        },
        methods: {
            toggle (item) {
                if (this.isSingle) {
                    for (const k of this.tagData) {
                        k.isActive = false
                    }
                    this.svcType = `${item.text}`
                    item.isActive = true
                    this.$emit('tagChange', this.svcType)
                } else {
                    item.isActive = !item.isActive
                    if (item.isActive) {
                        this.svcType += `${item.text},`
                    } else {
                        this.svcType = this.svcType.replace(`${item.text},`, '')
                    }
                    this.$emit('tagChange', this.svcType.replace(/,$/, ''))
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tag-box {
        display: flex;
        flex-wrap: wrap;
    }
    .tag-item {
        user-select: none;
        &:not(.large-tag) {
            width: 100px;
            height: 49px;
            border-radius: 24.5px;
            line-height: 47px;
        }
        margin-right: 15px;
        border: 1px solid #D5D7DC;
        box-sizing: border-box;
        text-align: center;
        font-size: 14px;
        color: #666;
        transition: all .8s;
        cursor: pointer;
        &.large-tag {
            width: auto;
            height: 64px;
            padding: 0 48px;
            line-height: 62px;
            border-radius: 41px;
            margin-bottom: 29px;
        }
        &.active, &:hover {
            background: #070707;
            color: #fff;
        }
    }
</style>
