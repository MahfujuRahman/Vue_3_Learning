import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import JobsView from "@/view/jobsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/jobs",
            name: "jobs",
            component: JobsView,
        }
    ],
});

export default router;


