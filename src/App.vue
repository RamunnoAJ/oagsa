<template>
  <Navigation />
  <RouterView />
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
</script>

<style>
</style>
