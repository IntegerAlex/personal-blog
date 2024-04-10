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
import userInfo from 'user-info-logger'
import axios from 'axios';

const { Layout } = DefaultTheme;



// Define the hit function
async function hit() {
    try {
        if(typeof window !== 'undefined' && navigator !== 'undefined' && navigator.userAgent !== 'undefined')  {
            // Get user information
            const data = await userInfo();
            console.log(data);
            // Send user information to the server
            await axios.post('https://hits-zvovawe44a-em.a.run.app/visit', data);
            console.log('User information sent successfully!');
        }
        else {
            console.log('Window object not found!');
        }
        
    } catch (error) {
        console.error('Error sending user information:', error);
    }
}

// Call the hit function when the layout is rendered
hit();
</script>
