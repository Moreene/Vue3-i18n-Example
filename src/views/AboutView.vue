<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>{{ $t('AboutView') }}</h1>
    <p>{{ $t('AboutView title') }}</p>
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