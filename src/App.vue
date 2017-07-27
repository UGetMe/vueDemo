<template>
  <div>
    <!--1.0 头部导航条-->
    <mt-header fixed title="vue项目练习" class="headerStyle"></mt-header>
    <!--返回按钮-->
    <div class="goBackBtn" @click="goBack" v-show="isShowBack">
      &lt;&nbsp;返回
    </div>
    <!--2.0 中间内容-->
    <router-view></router-view>
    <!--3.0 底部的TabBar-->
    <mt-tabbar fixed class="tabBarStyle" v-show="!isShowBack">
      <router-link to="/home">
        <mt-tab-item>
          <img slot="icon" src="http://img09.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
        </mt-tab-item>
      </router-link>
      <router-link to="/catagory">
        <mt-tab-item>
          <img slot="icon" src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
        </mt-tab-item>
      </router-link>
      <router-link to="/goods">
        <mt-tab-item>
          <img slot="icon" src="http://img10.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
        </mt-tab-item>
      </router-link>
      <router-link to="/mine">
        <mt-tab-item>
          <img slot="icon" src="http://img07.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
        </mt-tab-item>
      </router-link>
    </mt-tabbar>
  </div>
</template>
<style scoped>
.headerStyle {
  z-index: 5;
}


/*返回按钮*/

.goBackBtn {
  width: 50px;
  height: 40px;
  color: #fff;
  font-size: 16px;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 10px 0 0 5px;
  z-index: 99;
}

img {
  width: 42px;
  height: 35px;
}

.mint-tabbar>.mint-tab-item.is-selected {
  background-color: #fafafa;
}

.tabBarStyle {
  display: flex;
  justify-content: space-around;
}
</style>
<script>
export default {
  data() {
    return {
      isShowBack: false
    }
  },
  methods: {
    goBack() {//返回函数
      this.$router.go(-1);
    },
    isShowGoBackBtnAndTabBar(path) {
      if (path == '/home') {
        this.isShowBack = false;
      } else {
        this.isShowBack = true;
      }
    }
  },
  created() {
    // console.log(this.$route.path);
    this.isShowGoBackBtnAndTabBar(this.$route.path);
  },
  watch: {
    '$route': function (newVal, oldVal) {
      // console.log(newVal); 
      this.isShowGoBackBtnAndTabBar(newVal.path);
    }
  }
}
</script>

