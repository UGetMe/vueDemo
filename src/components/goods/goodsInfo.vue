<template>
    <div class="tpl">
        <!--轮播区  -->
        <!-- <mt-swipe :auto="4000" class="swipeBox">
                                                                            <mt-swipe-item v-for="(item,index) in carouseData" :key="index">
                                                                                <img :src="item.img" alt="">
                                                                            </mt-swipe-item>
                                                                        </mt-swipe> -->
        <div class="carouseStyle">
            <subCarouse :carouseUrl="'api/getthumimages/' + this.$route.params.goodsId" :autoTime="autoTime"></subCarouse>
        </div>
        <!-- 2.0 商品的描述 -->
        <div class="goodsInfoStyle">
            <h4>{{goodsInfo.title}}</h4>
            <p>市场价:￥
                <s>{{goodsInfo.market_price}}</s>&nbsp;&nbsp;销售价:￥
                <span>{{goodsInfo.sell_price}}</span>
            </p>
            <!-- 数字选择子组件 -->
             <subNumber v-on:numberChange="getSubNumberCount" class="subNumberStyle"></subNumber> 
            <mt-button size="small" type="primary">立即购买</mt-button>
            <mt-button @click="addToShopCart" size="small" type="danger">加入购物车</mt-button>
        </div>
    
        <!-- 3.0 参数描述 -->
        <div class="goodsParamsStyle">
            <h5>商品参数</h5>
            <ul>
                <li>商品货号:{{goodsInfo.goods_no}}</li>
                <li>库存情况:剩余 {{goodsInfo.stock_quantity}} 件</li>
                <li>上架时间:{{goodsInfo.add_time | dateFmt}}</li>
            </ul>
        </div>
    
        <!-- 4.0 图文信息和商品评论 -->
        <div class="pictureAndTextStyle">
            <mt-button @click="goPicAndTxt" plain size="large" type="primary">图文介绍</mt-button>
    
            <mt-button @click="goGoodsComment" class="goodsCommentStyle" plain size="large" type="danger">商品评论</mt-button>
        </div>
    </div>
</template>
    
<style scoped>
/* .swipeBox {
    height: 250px;
    width: 100%;
    z-index: 1;
}

img {
    height: 250px;
    width: 100%;
} */

.carouseStyle {
    margin: 50px 10px 10px;
    border: 1px solid rgba(92, 92, 92, 0.3);
    box-shadow: 0 0 5px rgba(92, 92, 92, 0.3);
}

.lunboStyle,
.goodsInfoStyle,
.goodsParamsStyle,
.pictureAndTextStyle {
    margin: 10px;
    padding: 10px;
    border: 1px solid rgba(92, 92, 92, 0.3);
    border-radius: 5px;
}

.goodsInfoStyle h4 {
    font-size: 16px;
    color: #0094ff;
    border-bottom: 1px solid rgba(92, 92, 92, 0.2);
    padding-bottom: 10px;
}

.goodsInfoStyle p span {
    font-size: 16px;
    color: red;
    font-weight: 700;
}

.goodsParamsStyle h5 {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.2);
}

.goodsParamsStyle ul {
    padding-left: 0px;
}

.goodsParamsStyle li {
    list-style: none;
    font-size: 15px;
}

.goodsCommentStyle {
    margin-top: 20px;
}

.subNumberStyle {
    margin-bottom: 5px;
}
</style>
    
<script>
import common from '../common/common.js';
import subCarouse from '../subCarouse/subCarouse.vue';
import subComment from '../subComment/subComment.vue';
import subNumber from '../subNumber/subNumber.vue';
export default {
    data() {
        return {
            // carouseData: []
            autoTime: 2000,
            goodsInfo: {},
            picAndTxt: {}
        }
    },
    created() {
        // this.getCarouseData();
        this.getGoodsInfoById();
    },
    methods: {
        // getCarouseData() {
        //     const url = common.apiHost + 'api/getthumimages/' + this.$route.params.goodsId;
        //     console.log(this.$route.params.goodsId);
        //     this.$http.get(url).then(response => {
        //         this.carouseData = response.body.message;
        //         // console.log(response.body.message);
        //         // console.log(this.carouseData);
        //     }, (err) => {
        //         console.log(err);
        //     })
        // }
        getGoodsInfoById() {
            const url = common.apiHost + 'api/goods/getinfo/' + this.$route.params.goodsId;
            this.$http.get(url).then(res => {
                // console.log(res.body.message[0]);
                this.goodsInfo = res.body.message[0];
            })
        },
        goPicAndTxt() {
            this.$router.push({ name: 'picAndTxt', params: { goodsId: this.$route.params.goodsId } });
        },
        goGoodsComment() {
            this.$router.push({ path: '/goods/goodsComment/' + this.$route.params.goodsId, query: { pageindex: 1 } });
        },
        addToShopCart() {

        },
        getSubNumberCount() {

        }
    },
    components: {
        subCarouse,
        subComment,
        subNumber
    }


}
</script>