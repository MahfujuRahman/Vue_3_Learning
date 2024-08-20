<script setup>
// import jobData from "@/jobs2.json";
import { reactive, defineProps,onMounted } from "vue";
import JobListing from "./JobListing.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false,
    },
});

/**
 * using it for json file
 * This component represents a list of job listings.
 *
 * @component JobListings
 * @file /d:/Practice/Vue3/vue-crash-TraversyMedia/vue_crash/src/components/JobListings.vue
 *
 * @param {ref} jobs - A reactive reference to the job data.
 */
// const jobs = ref(jobData);

// use ref instead of reactive for server
// const jobs = ref([]);

// onMounted(async () => {
//     try {
//         const response = await axios.get("http://localhost:5000/jobs");
//         jobs.value = response.data;
//     } catch (error) {
//         console.error('Error fetching Jobs' , error);
//     }
// });

// Use reactive instead of ref for server
const state = reactive({
    jobs: [],
    isLoading: true,
});

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:5000/jobs");
        state.jobs = response.data;
    } catch (error) {
        console.error('Error fetching Jobs' , error);
    } finally{
        state.isLoading = false;
    }
});



</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <!-- Pulse Loader -->
             <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader color="#38a169" size="10px" />
             </div>
             <!-- show job lising when done loading -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</RouterLink>
    </section>
</template>
