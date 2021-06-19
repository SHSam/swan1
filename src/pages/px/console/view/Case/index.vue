<template>
    <div>
        <div class="title">
            <el-button type="primary" @click="goAdd">添加案例</el-button>
            <FilterBox @seach="seach"></FilterBox>
        </div>
        <el-table
        :data="tableData"
        style="width: 100%">
            <el-table-column
                prop="date"
                label="企业logo"
                width="180">
                <template slot-scope="scope">
                   <img class="small-logo" :src="scope.row.smallCover" alt="">
                </template>
            </el-table-column>
            <el-table-column
                prop="date"
                label="企业gif"
                width="180">
                <template slot-scope="scope">
                   <img class="small-logo" :src="scope.row.gifCover" alt="">
                </template>
            </el-table-column>
            <el-table-column
                prop="title"
                label="标题"
                width="180">
            </el-table-column>
            <el-table-column
                prop="svcType"
                label="类型"
                width="180">
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="创建日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="status"
                label="状态"
                width="180">
            </el-table-column>
            <el-table-column
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
    </div>
</template>
<script>
import { caseList, caseDelete } from '@/apis'
import FilterBox from '@/pages/px/console/components/Filter'
export default {
    name: 'CaseList',
    components: { FilterBox },
    data () {
        return {
            input: '',
            value: '',
            tableData: [],
            query: {}
        }
    },
    methods: {
        seach (info) {
            this.query = info
            this.fetchData()
        },
        async fetchData () {
            // const res = await authCode()
            // await login({
            //     uuid: res.body.uuid,
            //     loginName: 'admin',
            //     password: 'B+WjdxNo9T8AUvIxAIWfZoeGtpBJHAdi7pBf+gsiVQQAi17eg0jtUYk1Xiz2+5l6gL6FgHbSApE5ggKnKGCrvaqRjzew4mGBOW+JbNvQ+7JRAMbX9j+LWQAc8WRBWEogWobo/RNk3cUKvuKgFkbeTFRV1v1iLxJreTGnSyUXsBw=',
            //     code: '6'
            // })
            const [err, { body }] = await caseList(this.query)
            if (!err) {
                this.tableData = body.records
            }
        },
        goAdd () {
            this.$router.push({ name: 'caseadd' })
        },
        handleEdit (item) {
            this.$router.push({ name: 'caseadd', query: { caseId: item.caseId } })
        },
        async handleDelete (item) {
            try {
                await caseDelete({ id: item.caseId })
                this.fetchData()
            } catch (err) {
                console.log(err)
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
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #F0F0F0;
    }
    .small-logo {
        width: 50px;
    }
</style>
