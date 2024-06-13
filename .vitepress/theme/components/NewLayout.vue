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
            console.log('onMounted called');
        
            import('user-info-logger')
                .then(({ default: userInfo }) => {
                    console.log('user-info-logger imported');
        
                    userInfo()
                        .then((data) => {
                            // console.log('user-info-logger data:', data);
        
                            axios.post(' https://hits-v2ndqtpkjq-de.a.run.app/visit', data)
                                .then((response) => {
                                    console.log('axios.post response:', response);
                                })
                                .catch((error) => {
                                    console.error('axios.post error:', error);
                                });
                        })
                        .catch((error) => {
                            console.error('user-info-logger error:', error);
                        });
                })
                .catch((error) => {
                    console.error('import error:', error);
                });
        });
 

</script>
