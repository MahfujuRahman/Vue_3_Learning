import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import JobsView from "@/view/jobsView.vue";
import NotFoundView from "@/view/NotFoundView.vue";
import JobView from "@/view/JobView.vue";
import AddJobView from "@/view/AddJobView.vue";

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
            path: "/jobs/:id",
            name: "job",
            component: JobView,
        },
        {
            path: "/jobs/add",
            name: "add-job",
            component: AddJobView,
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFoundView,
        },
    ],
});

export default router;


