<template>
    <!--轮播区  -->
    <mt-swipe :auto="autoTime" class="swipeBox">
        <!-- <mt-swipe-item v-for="(item,index) in carouseData" :key="index">
                                 <img :src="item.img" alt=""> 
                            </mt-swipe-item> -->
        <mt-swipe-item>
            <img src="https://img.alicdn.com/simba/img/TB18AvQSpXXXXbLXXXXSutbFXXX.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="https://img.alicdn.com/simba/img/TB1lnPfSpXXXXaKaFXXSutbFXXX.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="https://img.alicdn.com/tfs/TB1fLJ.SpXXXXaYXVXXXXXXXXXX-520-280.jpg_q90_.webp" alt="">
        </mt-swipe-item>
    </mt-swipe>
</template>
    
<style scoped>
.swipeBox {
    height: 250px;
    width: 100%;
    z-index: 1;
}

img {
    height: 250px;
    width: 100%;
}
</style>
    
<script>
import common from '../common/common.js';
export default {
    data() {
        return {
            carouseData: []
        }
    },
    created() {
        this.getCarouseData();
    },
    methods: {
        getCarouseData() {
            const url = common.apiHost + this.carouseUrl;
            this.$http.get(url).then(response => {
                this.carouseData = response.body.message;
            }, (err) => {
                console.log(err);
            })
        }
    },
    props: {
        carouseUrl: String, autoTime: {
            type: Number,
            validator: function (value) {
                return value >= 1000;
            }
        }
    }
}
</script>