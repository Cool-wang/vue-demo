<template>
    <div class="index_container">
        <Header/>
        <Aside/>
        <div class="index_content">
            <div class="loadingIcon" ref="loading"> 
            <!-- <Spin size="large"></Spin> -->
            <div class="icon_box"> 
                <div class="demo-spin-icon-load"></div>
                <div class="loading_text">加载中...</div>
            </div>
                
            </div>
            <div class="RouterView">
                <router-view/>
            </div>
        </div>
        
    </div>
</template>
<script>
import Header from '../common/Header'
import Aside from '../common/Aside'
export default {
    name: 'Index',
    data() {
        return {}
    },
    methods: {
    },
    components: {
        Header,
        Aside
    },
    watch: {
        $route: function(n) {
            this.$refs.loading.style.display = 'block';
            setTimeout( () => {
                this.$refs.loading.style.display = 'none';
            }, 1000);
        }
    }
}
</script>
<style scoped lang="less">
.index_container {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #f5f7f9;
}
.index_content {
    position: absolute;
    padding: 20px;
    top: 0;
    left: 0;
    padding: 50px 0px 0px 240px;
    width: 100%;
    height: 100%;
    .RouterView {
        width: 100%;
        height: 100%;
        padding: 20px;
    }
}
.loadingIcon {
    display: none;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.7);
    .icon_box {
        position: absolute;
        width: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        .loading_text {
            padding-top: 15px;
            text-align: center;
            color: skyblue;
        }
    }
    .demo-spin-icon-load{
        margin: 0 auto;
        border: 3px solid pink;
        border-top: 3px solid red;
        width: 30px;
        height: 30px;
        border-radius: 55%;
        animation: ani-demo-spin 0.6s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
}
</style>
