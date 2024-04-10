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
import axios from 'axios';

const { Layout } = DefaultTheme;



// Define the hit function
async function hit() {
    try {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent !== 'undefined') {
            import('user-info-logger').then(({ default: userInfo }) => {
        // Call the userInfo function
        userInfo().then((data) => {
            console.log(data);
            axios.post('https://hits-zvovawe44a-em.a.run.app/visit', data).then((response) => {
                // console.log(response);
            }).catch((error) => {
                console.error('Error sending user info:', error);
            });
            // Perform any additional actions with the user info data here
        }).catch((error) => {
            console.error('Error getting user info:', error);
        });
    }).catch((error) => {
        console.error('Error importing user-info-logger:', error);
    });
}
    } catch (error) {
        console.error('Error:', error);
    }  
}
// Call the hit function when the layout is rendered
hit();
</script>
