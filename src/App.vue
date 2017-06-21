<template>
    <div id="app-wrap">
        <div class="app-header">
            <p>title</p>
            <div class="right">i am right</div>
        </div>
        <div class="app-content">
            <router-link to="/">index</router-link>
            <router-link to="/detail">detail</router-link>
            <div>request response code is {{ codeStatus }}</div>
        </div>
        <div class="app-footer"></div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    mounted() {
        this.axios.get('/api/user/info/').then((response) => {
            this.codeStatus = response.data.code;
            console.log(response.data)
        });
        console.log(123456);
    },
    data(){
        return {
            codeStatus:0
        }
    }
}
</script>
<style lang="scss">
.app-header {
    height: 100px;
    background: #333;
    color: #fff;
    text-align: center;
    .right {
        float: right;
    }
}
</style>
