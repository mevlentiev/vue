import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import BlogPosts from "@/components/pages/BlogPosts.vue";
import AboutPage from "@/components/pages/AboutPage.vue";
import SinglePost from "@/components/pages/SinglePost.vue";
import BlogPostsWithVuex from "@/components/pages/BlogPostsWithVuex.vue";
import BlogPostsCompositionApi from "@/components/pages/BlogPostsCompositionApi.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/blog-posts",
        name: "BlogPosts",
        component: BlogPosts
    },
    {
        path: "/blog-posts-vuex",
        name: "BlogPostsWithVuex",
        component: BlogPostsWithVuex
    },
    {
        path: "/blog-posts-composition",
        name: "BlogPostsCompositionApi",
        component: BlogPostsCompositionApi
    },
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage
    },
    {
        path: "/post/:id",
        name: "Post",
        component: SinglePost
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;