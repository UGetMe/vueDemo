<template>
    <div class="tpl">
        <!-- 1.0 标题 -->
        <div class="title">
            <h4>{{picAndTxt.title}}</h4>
        </div>
    
        <!-- 2.0 内容 -->
        <div class="content">
            <p v-html="picAndTxt.content"></p>
        </div>
    </div>
</template>
    
<style scoped>
.title,
.content {
    padding: 5px;
}

.title h4 {
    font-size: 16px;
    color: #0094ff;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.3)
}
</style>
    
<script>
import common from '../common/common.js';
export default {
    data() {
        return {
            picAndTxt: {}
        }
    },
    created() {
        this.getPicAndTxt();
    },
    methods: {
        getPicAndTxt() {
            const url = common.apiHost + 'api/goods/getdesc/' + this.$route.params.goodsId;
            this.$http.get(url).then(res => {
                // console.log(res.body);
                this.picAndTxt = res.body.message[0];
            });
        }
    }
}
</script>