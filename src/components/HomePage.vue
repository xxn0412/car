<template>
    <div class="home-page">
        <header class="navbar">
            <div class="logo">
                <router-link to="/home" class="home-link">
                    <i class="fas fa-home fa-lg"></i>
                    <span class="home-text">首页</span>
                </router-link>
            </div>
            <div class="current-page">{{ getCurrentPage() }}</div>
            <div class="navbar-right">
                <button class="logout-button" @click="logout">退出</button>
            </div>
        </header>
        <div class="content-container">
            <div class="sidebar">
                <ul>
                    <li><router-link to="/home/vehicle-details"><i class="fas fa-car"></i>&nbsp;车辆监控</router-link></li>
                    <li><router-link to="/home/vehicle-monitoring"><i class="fas fa-chart-bar"></i>&nbsp;车辆详情</router-link>
                    </li>
                    <li><router-link to="/home/vehicle-statistics"><i class="fas fa-chart-pie"></i>&nbsp;车辆统计</router-link>
                    </li>
                </ul>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getCurrentPage() {
            // 使用 Vue Router 的 $route 对象来获取当前路由信息
            const currentRoute = this.$route;
            if (currentRoute.path === '/') {
                return '首页';
            } else if (currentRoute.path === '/home/vehicle-details') {
                return '首页/车辆详情';
            } else if (currentRoute.path === '/home/vehicle-monitoring') {
                return '首页/车辆监控';
            } else if (currentRoute.path === '/home/vehicle-statistics') {
                return '首页/车辆统计';
            }
            // 其他页面的位置信息
            return '';
        },
        logout() {
            // 执行退出登录逻辑
            // 跳转至登录页面
            this.$router.push('/');
        }
    }
}
</script>

<style src="@/assets/css/home-page.css" scoped></style>
  