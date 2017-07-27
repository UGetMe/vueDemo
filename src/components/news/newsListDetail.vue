<template>
    <div class="tpl">
        <!--标题块-->
        <div class="title">
            <h3>{{newsInfo.title}}</h3>
            <p>
                <span>{{newsInfo.add_time|dateFmt('YYYY-MM-DD HH:mm')}}</span>&nbsp;&nbsp;
                <span>点击{{newsInfo.click}}次浏览&nbsp;&nbsp;分类：民生经济</span>
            </p>
        </div>
        <!--内容块-->
        <div class="content">
            <div v-html="newsInfo.content"></div>
        </div>
        <!--评论子组件-->
        <subComment :commentId="this.$route.params.newsId"></subComment>
    </div>
</template>
    
<style scoped>
    .title,.content{
        padding: 0 5px;
    }
    .title{
        border-bottom: 1px solid #ccc;
    }
    .title h3{
        padding-top: 10px;        
        font-size: 18px;
        color: #0094ff;
    }
    .title p{
        font-size: 12px;
        color: #999;
    }
</style>
    
<script>
import common from '../common/common.js';
import subComment from '../subComment/subComment.vue';
export default {
    data() {
        return {
            newsInfo: {}
        }
    },
    created() {
        this.getNewsListDetail()
    },
    methods: {
        getNewsListDetail() {
            const url = common.apiHost + 'api/getnew/' + this.$route.params.newsId;
            this.$http.get(url).then(response => {
                // console.log(response.body);
                this.newsInfo = response.body.message[0];
            }, (err) => {
                console.log(err);
            })
        }
    },
    components:{
        subComment
    }
}
</script>