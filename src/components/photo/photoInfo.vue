<template>
    <div class="tpl">
        <!--标题区域-->
        <div class="title">
            <h4>{{imageInfo.title}}</h4>
            <span>{{imageInfo.add_time|dateFmt('YYYY-MM-DD')}}&nbsp;&nbsp;浏览{{imageInfo.click}}次</span>
        </div>
    
        <!--缩略图-->
        <div class="mui-content thumbnail">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in thumImages" :key="item.src">
                    <img class="preview-img" :src="item.src" @click="$preview.open(index, thumImages)">
                </li>
            </ul>
        </div>
    
        <!--图片内容-->
        <div class="content" v-html='imageInfo.content'></div>
    
        <!--评论子组件-->
        <subComment :commentId="this.$route.params.imgId"></subComment>
    </div>
</template>
    
<style scoped>
.title h4 {
    font-size: 20px;
    color: #0094ff;
}

.thumbnail img {
    width: 100%;
    height: 100px;
}

.content {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
}
</style>
    
<script>
import common from '../common/common.js';
import subComment from '../subComment/subComment.vue';
export default {
    data() {
        return {
            imageInfo: [],
            thumImages: []
        }
    },
    created() {
        this.getImageInfoByImgId();
        this.getThumImagesByImgId();
    },
    methods: {
        getImageInfoByImgId() {
            // console.log(this.$route.params.imgId);
            const url = common.apiHost + "api/getimageInfo/" + this.$route.params.imgId;
            this.$http.get(url).then(response => {
                // console.log(response.body);
                this.imageInfo = response.body.message[0];
            }
            )
        },
        getThumImagesByImgId() {
            const url = common.apiHost + 'api/getthumimages/' + this.$route.params.imgId;
            this.$http.get(url).then(response => {
                // console.log(response.body);
                response.body.message.forEach(function(item) {
                    // 根据文档需要添加这两个属性
                    item.w=600;
                    item.h=400;
                }, this);
                this.thumImages = response.body.message;
            }, (err) => {
                console.log(err);
            })
        }
    },
    components: {
        subComment
    }
}
</script>