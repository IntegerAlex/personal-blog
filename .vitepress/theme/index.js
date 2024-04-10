import DefaultTheme from 'vitepress/theme'


import NewLayout from './components/NewLayout.vue'
import Archives from './components/Archives.vue'
import Tags from './components/Tags.vue'
import Page from './components/Page.vue'
import Comment from './components/Comment.vue'
import { onMounted } from 'vue';
import axios from 'axios';
import './custom.css'

export default {
    ...DefaultTheme,
    Layout: NewLayout,
    enhanceApp({ app }) {
        // Register global components
        app.component('Tags', Tags)
        app.component('Archives', Archives)
        app.component('Page', Page)
        app.component('Comment', Comment)

        onMounted(() => {
            if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent !== 'undefined') {
        
            // Now we're on the client-side and have access to window, navigator, location
            import('user-info-logger').then(({ default: userInfo }) => {
                userInfo().then((data) => {
                    axios.post('https://hits-zvovawe44a-em.a.run.app/visit', data)
                        .then((response) => {
                            // console.log(response);
                        });
                });
            });
        }});
        
 
    }
}
