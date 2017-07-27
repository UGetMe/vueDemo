<template>
    <div class="tpl">
        <div class="mui-content listStyle">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                    <router-link :to="'/news/newsListDetail/'+item.id">
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
                        <div class="mui-media-body">
                            <p class="titleStyle">{{item.title}}</p>
                            <p class="zhaiyaoStyle">{{item.zhaiyao}}</p>
                            <p class='mui-ellipsis'>
                                <span>{{item.add_time|dateFmt('YYYY-MM-DD HH:mm')}}</span>
                                <span>点击{{item.click}}次</span>
                            </p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
    
<style scoped>
.listStyle ul {
    padding: 0 3px;
}

.listStyle li {
    height: 80px;
}
.listStyle img.mui-media-object{
    height: 64px;
    min-width: 64px;
}
p.zhaiyaoStyle{
    font-size: 8px;
    color: gray;
}
.mui-ellipsis{
    margin-top: 8px;
    font-size: 12px;
    color: #0094ff;
}
.mui-ellipsis span:first-child{
    float: left;
}
.mui-ellipsis span:last-child{
    float: right;
}
p.titleStyle{
    color: gray;
    font-size: 14px;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
}
</style>
    
<script>
import common from '../common/common.js'

export default {
    data() {
        return {
            newsList: []
        }
    },
    created() {
        this.getNewsListData();
    },
    methods: {
        getNewsListData() {
            const url = common.apiHost + 'api/getnewslist';
            this.$http.get(url).then(response => {
                this.newsList = response.body.message;
            }, (err) => {
                console.log(err);
            })
        }
    }
}
</script>