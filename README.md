# My Personal Blog Website

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

This is the repository for my personal blog website. It is built using [Vitepress](https://vitepress.vuejs.org/), a fast and lightweight static site generator powered by Vue.js.

## Features

- **Blog Posts**: Share your thoughts, ideas, and experiences through blog posts.
- **Categories and Tags**: Organize your blog posts using categories and tags for easy navigation.
- **Responsive Design**: The website is optimized for various screen sizes, ensuring a great user experience on desktop and mobile devices.
- **Syntax Highlighting**: Highlight code snippets in your blog posts using your favorite programming language.
- **Search Functionality**: Allow visitors to search for specific blog posts using keywords.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/IntegerAlex/personal-blog.git
    ```

2. Install the dependencies:

    ```bash
    cd personal-blog
    npm install
    ```

## Usage

1. Create new blog posts in the `/posts` directory. Follow the existing file structure and use Markdown syntax to write your content.

2. Customize the website by modifying the configuration files in the `.vitepress/` directory.

3. Preview the website locally:

    ```bash
    npm run dev
    ```

    Open your browser and visit `http://localhost:5000` to see the website.

4. Build the website for production:

    ```bash
    npm run build
    ```

    The generated static files will be available in the `./vitepress/dist` directory.

## License and Code Disclosure

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0). See the [LICENSE](LICENSE) file for more details.

If you choose to use the code in this repository, you are required to disclose the source code of your modified version. This means that if you distribute your modified version, you must make the modified source code available to the recipients under the same license terms.

Please note that the code in this repository is provided as-is and does not come with any warranties. You are responsible for reviewing and understanding the code before using it in your own projects.
