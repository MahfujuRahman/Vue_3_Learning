<script setup>
import Hero from './components/Hero.vue';
import HomeCards from './components/HomeCards.vue';
import JobListings from './components/JobListings.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>

  <Navbar />
  <!-- For Hero component we can use two props as title and subtitle, otherwise default value will be shown!-->
  <Hero /> 
  <HomeCards /> 
  <JobListings :limit="3" showButton="true"/> 

</template>

