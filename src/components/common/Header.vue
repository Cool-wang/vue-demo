<template>
    <div class="header_container">
         <div class="header_title">
             <p>今日头条</p>
         </div>
         <div class="header_userInfo">
             <span>{{user}}　|　</span>
             <i @click="logout">退出</i>
         </div>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        data() {
            return {
                user: ''
            }
        },
        methods: {
            logout() {
                localStorage.removeItem('userInfo');
                this.$router.push('/login');
            }
        },
        created() {
            this.user = JSON.parse(localStorage.getItem('userInfo')) || '';
        }

    }
</script>
<style scoped lang="less">
.header_container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    z-index: 99;
    background-image:linear-gradient(to right,#E8E8E8,#1C1C1C);
}
.header_title {
    position: absolute;
    top: 0;
    left: 60px;
    line-height: 50px;
    p {
        text-align: center;
        font-size: 25px;
        text-shadow: 5px 5px 2px skyblue;
    }
}
.header_userInfo {
    position: absolute;
    top: 0;
    right: 25px;
    color: #fff;
    font-size: 20px;
    line-height: 50px;
    i {
        font-style: normal;
        cursor: pointer;
    }
}
</style>
