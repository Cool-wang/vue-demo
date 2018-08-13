<template>
    <div class="aside_container">
        <Menu theme="dark" class="aside_left" accordion>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">
                    <router-link to="/content/article" tag="div" class="click_range">文章管理</router-link>
                    </MenuItem>
                    <MenuItem name="1-2">
                     <router-link to="/content/comment" tag="div" class="click_range">评论管理</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">
                    <router-link to="/user/additionUser" tag="div" class="click_range">新增用户</router-link>
                    </MenuItem>
                    <MenuItem name="2-2">
                    <router-link to="/user/activityUser" tag="div" class="click_range"> 活跃用户</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-people" />
                        天气预报
                    </template>
                    <MenuItem name="3-1">
                    <router-link to="/weatherForecast" tag="div" class="click_range">当地天气</router-link>
                    </MenuItem>
                </Submenu>
            </Menu>
    </div>
</template>
<script>
    export default {
        name: 'Aside'
    }
</script>
<style scoped>
.aside_container {
    position: relative;
    top: 0px;
    left: 0;
    bottom: 0;
    padding-top: 50px;
    height: 100%;
}
.aside_left {
    height: 100%;
}
.click_range {
    width: 100%;
    height: 100%;
    padding: 15px 0;
}
.ivu-menu-item {
    padding: 0 !important;
}
</style>
