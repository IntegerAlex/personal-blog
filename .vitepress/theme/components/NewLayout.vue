<template>
    <Layout>
        <template #doc-before>
            <div style="padding-top:20px;" class='post-info' v-if="!$frontmatter.page">
                {{ $frontmatter.date?.substring(0,10) }} &nbsp;&nbsp; <span v-for="item in $frontmatter.tags"><a :href="withBase(`/pages/tags.html?tag=${item}`)"> {{ item }}</a></span>
            </div>
        </template>
    </Layout>
    <Copyright />
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import Copyright from './Copyright.vue'
import { withBase } from "vitepress";
// import userInfo from 'user-info-logger'
import { onMounted } from 'vue';
import axios from 'axios';

const { Layout } = DefaultTheme;



onMounted(() => {
    // Now we're on the client-side and have access to window, navigator, location
    import('user-info-logger').then(({ default: userInfo }) => {
        userInfo().then((data) => {
            axios.post('https://hits-zvovawe44a-em.a.run.app/visit', data)
                .then((response) => {
                    // console.log(response);
                });
        });
    });
});

</script>
