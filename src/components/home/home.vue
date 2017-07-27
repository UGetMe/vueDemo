<template>
    <div class="tpl">
        <!--轮播-->
        <!-- <mt-swipe class="swipeBox" :auto="4000">
            <mt-swipe-item v-for="item in carouselData" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe> -->
        <subCarouse carouseUrl="api/getlunbo" :autoTime="autoTime"></subCarouse>
        <!--九宫格布局-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <!--新闻资讯-->
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newsList">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <!--图片分享-->
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photoList">
                        <span class="mui-icon mui-icon-email">
                            <span class="mui-badge">5</span>
                        </span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <!--商品购买-->
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodsList">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
/*轮播样式*/

.swipeBox {
    height: 250px;
    width: 100%;
    z-index: 1;
}

img {
    height: 250px;
    width: 100%;
}

.mint-tab-item-icon {
    width: 42px;
}



/*九宫格样式*/

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
}

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
}

.mui-icon {
    width: 50px;
    height: 50px;
}

.mui-icon-home {
    background-image: url(../../../statics/images/menu3.png);
    background-size: 100%;
}
.mui-icon-email {
    background-image: url(../../../statics/images/menu4.png);
    background-size: 100%;
}
.mui-icon-chatbubble {
    background-image: url(../../../statics/images/menu5.png);
    background-size: 100%;
}
.mui-icon-location {
    background-image: url(../../../statics/images/menu6.png);
    background-size: 100%;
}
.mui-icon-search {
    background-image: url(../../../statics/images/menu9.png);
    background-size: 100%;
}
.mui-icon-phone {
    background-image: url(../../../statics/images/menu10.png);
    background-size: 100%;
}
</style>
<script>
import common from '../common/common.js';
import subCarouse from '../subCarouse/subCarouse.vue'
// module.exports={}    //es5导出写法
export default {
    data: function () {
        return {
            // carouselData: []
            autoTime:4000
        }
    },
    // 生命周期钩子
    created() {
        // this.getCarouselData();
    },
    methods: {
        // getCarouselData() {
        //     const url = common.apiHost+'api/getlunbo';
        //     this.$http.get(url).then(response => {
        //         this.carouselData = response.body.message;
        //     })
        // }
    },components:{
        subCarouse
    }

}
</script>

