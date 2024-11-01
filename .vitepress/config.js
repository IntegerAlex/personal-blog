import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'
import { withMermaid } from "vitepress-plugin-mermaid";

//每页的文章数量
const pageSize = 10

export default defineConfig(
  withMermaid({
    title: 'Blogs',
    base: '/',
    cacheDir: './node_modules/vitepress_cache',
    description: 'vitepress,blog,blog-theme',
    ignoreDeadLinks: true,
	      head: [
      [
        'meta',
        { name: 'google-adsense-account', content: 'ca-pub-8253899740408429' }
      ]
    ],
    themeConfig: {
        posts: await getPosts(pageSize),
        website: 'https://github.com/IntegerAlex/personal-blog', //copyright link
        // 评论的仓库地址
        comment: {
            repo: 'airene/vitepress-blog-pure',
            themes: 'github-light',
            issueTerm: 'pathname'
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Archives', link: '/pages/archives' },
            { text: 'Tags', link: '/pages/tags' },
            { text: 'About', link: '/pages/about' }
            // { text: 'Airene', link: 'http://airene.net' }  -- External link test
        ],
        search: {
            provider: 'local',
        },
        //outline:[2,3],
        outlineTitle: 'Table of Contents',
        socialLinks: [{ icon: 'github', link: 'https://github.com/IntegerAlex/' },
                        {icon:'linkedin',link:'https://www.linkedin.com/in/akshat-kotpalliwar-554944258/'},
                    {icon:'npm',link:'https://www.npmjs.com/~nigesh'}]
    },
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    vite: {
        //build: { minify: false }
        server: { port: 5000 }
    },
    mermaidPlugin: {
        class: "mermaid my-class", // set additional css classes for parent container 
      },
    
      optimizeDeps: {
        //   keepNames: true
        include: ['user-info-logger']
      }
      

  })
)
