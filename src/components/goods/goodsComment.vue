<template>
    <div class="tpl">
        <subComment :commentId="this.$route.params.goodsId"></subComment>
   
    </div>
</template>
    
<style scoped>

</style>
    
<script>
// 导入评论子组件
import subComment from '../subComment/subComment.vue';
export default {
    data() {
        return {

        }
    },
    created() {
        // console.log(this.$route);
    },
    methods: {

    },
    components: {
        subComment
    }
}
</script>