import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import JobsView from "@/view/jobsView.vue";
import NotFoundView from "@/view/NotFoundView.vue";

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
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFoundView,
        }
    ],
});

export default router;


