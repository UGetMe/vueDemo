import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueRouter from 'vue-router';
import App from './App.vue';
// 导入hello mui的css
import '../statics/mui/css/mui.min.css';
import '../statics/css/site.css';
//导入vue-resource组件
import VueResource from 'vue-resource';
Vue.use(Mint);
Vue.use(VueRouter); //给vue实例添加$route,$router
Vue.use(VueResource); //给Vue实例添加$http
// 導入home組件
import home from './components/home/home.vue';
// 導入catagory組件
import catagory from './components/catagory/catagory.vue';
// 導入mine組件
import mine from './components/mine/mine.vue';
// 导入newsList组件
import newsList from './components/news/newsList.vue';
// 导入日期格式化插件
import moment from 'moment';
// 导入新闻详情页组件
import newsListDetail from './components/news/newsListDetail.vue';
// 导入图片列表组件
import photoList from './components/photo/photoList.vue';
//导入图片详情组件
import photoInfo from './components/photo/photoInfo.vue';
// 导入vue-preview插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);
// 导入商品列表组件
import goodsList from './components/goods/goodsList.vue';
//导入商品详情组件
import goodsInfo from './components/goods/goodsInfo.vue';
// 导入mint-ui插件
import {
    Swipe,
    SwipeItem
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 导入图文详情组件
import picAndTxt from './components/goods/picAndTxt.vue';
// 导入商品评论组件
import goodsComment from './components/goods/goodsComment.vue';
// 配置路由規則
const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: home
    }, {
        path: '/catagory',
        component: catagory
    }, {
        path: '/mine',
        component: mine
    }, {
        path: '/news/newsList',
        component: newsList
    }, {
        path: '/news/newsListDetail/:newsId',
        component: newsListDetail
    }, {
        path: '/photo/photoList',
        component: photoList
    }, {
        path: '/photo/photoList/photoInfo/:imgId',
        component: photoInfo
    }, {
        path: '/goods/goodsList',
        component: goodsList
    }, {
        path: '/goods/goodsInfo/:goodsId',
        component: goodsInfo
    }, {
        name: 'picAndTxt',
        path: '/goods/picAndTxt/:goodsId',
        component: picAndTxt
    }, {
        path: '/goods/goodsComment/:goodsId',
        component: goodsComment
    }]
});
// 定义全局时间过滤器
Vue.filter('dateFmt', (input, formatString) => {
    const lastFormatString = formatString || "YYYY-MM-DD HH:mm:ss";
    return moment(input).format(lastFormatString);
});
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})