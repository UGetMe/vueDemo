<template>
    <div class="tpl">
        <!--头部菜单-->
        <div class="photoCategory">
            <ul ref="photoCategoryRef">
                <li @click="getPhotoListData(0)">全 &nbsp;&nbsp; 部</li>
                <li v-for="(item,index) in topMenu" :key="item.id" @click="getPhotoListData(item.id)">{{item.title}}</li>
            </ul>
        </div>
        <!--图片列表-->
        <div class="photoListStyle">
            <ul>
                <li v-for="item in photoList" :key="item.id">
                    <router-link :to="'/photo/photoList/photoInfo/'+item.id">
                        <img :src="item.img_url" alt="">
                    </router-link>
                    <div class="zhaiyaoStyle">
                        <span class="titleStyle">{{item.title}}</span>
                        <br>&nbsp;&nbsp;&nbsp;&nbsp;{{item.zhaiyao}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
    
<style scoped>
.photoCategory {
    overflow-x: auto;
    padding: 5px;
}

.photoCategory ul {
    list-style: none;
    padding: 5px 0;
    margin: 0;
}

.photoCategory li {
    float: left;
    color: #0094ff;
    width: 80px;
    padding: 0 5px;
}

.photoListStyle ul {
    list-style: none;
    padding: 0 5px;
    margin: 0;
}

.photoListStyle li {
    position: relative;
    margin-top: 5px;
}

.photoListStyle img {
    width: 100%;
    height: 400px;
    display: block;
}

.titleStyle {
    font-size: 16px;
    font-weight: 700;
}

.zhaiyaoStyle {
    color: white;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0px;
    left: 5px;
}
</style>
    
<script>
import common from '../common/common.js';
import { Indicator } from 'mint-ui';
export default {
    data() {
        return {
            topMenu: [],
            photoList: []
        }
    },
    created() {
        // 获取分类列表
        this.getPhotoCategoryData();
        // 获取全部列表信息
        this.getPhotoListData(0);
    },
    methods: {
        // 获取顶部图片分类数据
        getPhotoCategoryData() {
            const url = common.apiHost + 'api/getimgcategory';
            this.$http.get(url).then(response => {
                // console.log(response.body);
                this.topMenu = response.body.message;
                this.$refs.photoCategoryRef.style.width = (this.topMenu.length + 1) * 80 + 'px';
            }, (err) => {
                console.log(err);
            }
            )
        },
        getPhotoListData(categoryId) {
            Indicator.open({
                text: '正在拼命加载中...',
                spinnerType: 'fading-circle'
            });
            const url = common.apiHost + 'api/getimages/' + categoryId;
            this.$http.get(url).then(response => {
                Indicator.close();
                this.photoList = response.body.message;
            }, (err) => {
                Indicator.close();
                console.log(err);
            })
        },
    }
}
</script>