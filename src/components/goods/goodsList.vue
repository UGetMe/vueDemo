<template>
    <div class="tpl">
        <div class="mui-content" style="background-color:#fff">
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,index) in goodsListArr" :key="index">
                    <div class="listBox">
                        <router-link :to="'/goods/goodsInfo/'+item.id">
                            <img class="mui-media-object pic" :src="item.img_url">
                            <div class="mui-media-body">
                                <p>{{item.title}}</p>
                                <div class="describe">
                                    <span>&yen;{{item.sell_price}}</span>
                                    <span>
                                        <s>&yen;{{item.market_price}}</s>
                                    </span>
                                    <p>热卖中&nbsp;&nbsp;剩余{{item.stock_quantity}}件</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
    
                </li>
            </ul>
        </div>
    </div>
</template>
    
<style scoped>
li {
    padding: 10px;
}

.listBox {
    border: 1px solid rgba(92, 92, 92, 0.3);
    padding: 5px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(92, 92, 92, 0.3);
}

.mui-content .listBox .mui-media-body {
    background-color:#f0f0f0;
    height: 100px;
    padding: 5px;
}

.mui-content .listBox .mui-media-body p {
    text-align: left;
    padding: 0;
    margin: 10px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.describe span:first-child {
    font-size: 16px;
    float: left;
    color: red;
}

.describe span:last-child {
    float: right;
}

.describe span s {
    color: gray;
    font-size: 12px;
}
</style>
    
<script>
import common from '../common/common.js';
export default {
    data() {
        return {
            goodsListArr: []
        }
    },
    created() {
        this.getGoods();
    },
    methods: {
        getGoods() {
            const url = common.apiHost + 'api/getgoods';
            this.$http.get(url).then(response => {
                // console.log(response.body.message);
                this.goodsListArr = response.body.message;
            })
        }
    }
}
</script>