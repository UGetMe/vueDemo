<template>
    <!--提交评论-->
    <div class='commentStyle'>
        <h4>提交评论</h4>
        <div>
            <textarea cols="30" rows="5" placeholder="请输入要提交的内容" id="txtContent" ref="txtContent"></textarea>
            <mt-button type="primary" size="large" @click="postComment">提交评论</mt-button>
        </div>
        <div class="commentList">
            <h4>评论列表</h4>
            <div class="commentItem" v-for="(item,index) in commentLists" :key="index">
                <h5>{{item.content}}</h5>
                <p>
                    <span class="commentUser">{{item.user_name}}</span>
                    <span class="commentTime">{{item.add_time|dateFmt}}</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="pageIndexAdd">加载更多</mt-button>
    </div>
</template>
    
<style scoped>
.commentStyle {
    padding: 0 10px;
}

.commentStyle h4 {
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.2);
}

.commentList {
    margin-bottom: 10px;
}

.commentUser {
    float: left;
    color: #007aff;
}

.commentTime {
    float: right;
    color: #007aff;
}

.commentItem {
    height: 60px;
    color: #ccc;
    border-bottom: 1px solid rgba(92, 92, 92, 0.2);
    overflow: hidden;
    padding-bottom: 5px;
}

.commentItem h5 {
    height: 20px;
}
</style>
    
<script>
import common from '../common/common.js';
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import $ from 'jquery';
export default {
    data() {
        return {
            commentLists: [],
            pageIndex: 1
        }
    },
    created() {
        // console.log(this.commentId);
        this.getCommentListByPageIndex();
    },
    methods: {
        // 根据页码获取评论列表
        getCommentListByPageIndex() {
            if (this.commentId == '' || this.commentId == undefined) {
                console.log('commentId为空');
                return;
            }
            const url = common.apiHost + 'api/getcomments/' + this.commentId + '?pageindex=' + this.pageIndex;
            this.$http.get(url).then(response => {
                Indicator.close();
                // console.log(response.body.message);
                if (this.pageIndex == 1 && response.body.message.length == 0) {
                    Toast({
                        message: '还没有人评论哦，抢沙发哟亲',
                        position: 'middle',
                        duration: 2000
                    });
                    return;
                }
                if (response.body.message.length == 0) {
                    Toast({
                        message: '没用更多评论了哦',
                        position: 'middle',
                        duration: 2000
                    });
                    return;
                }
                this.commentLists = this.commentLists.concat(response.body.message);
                if (this.pageIndex == 1) {
                    this.commentLists = response.body.message;
                }
            }, (err) => {
                console.log(err);
            })
        },
        //加载更多
        pageIndexAdd() {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.pageIndex += 1;
            this.getCommentListByPageIndex();
        },
        // 提交评论
        postComment() {
            // 不推荐直接操作DOM
            // console.log($('#txtContent').val());
            // vue2中自带方法$refs
            // console.log(this.$refs.txtContent.value);
            const content = this.$refs.txtContent.value;
            if (content == null || content.length <= 0) {
                Toast({
                    message: '得输入有效内容才能评论哦',
                    position: 'middle',
                    duration: 2000
                });
                return;
            }
            const url = common.apiHost + 'api/postcomment/' + this.commentId;
            this.$http.post(url, { commentid: this.commentId, content: content }, {
                emulateJSON: true//跨域问题
            }).then(response => {
                // console.log(response.body);
                // 清空评论框数据
                this.$refs.txtContent.value = '';
                // 提示用户评论成功
                Toast({
                    message: '评论成功',
                    position: 'middle',
                    duration: 2000
                });
                this.pageIndex = 1;
                this.getCommentListByPageIndex();
            }, (err) => {
                console.log('评论失败')
            })
        }
    },
    props: ["commentId"]
}
</script>