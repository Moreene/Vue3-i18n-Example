<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>{{ $t('HomeView') }}</h1>
    <p>{{ $t('HomeView title') }}</p>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style scoped>
.container {
  padding: 15px;
}
</style>