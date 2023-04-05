<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">Ecommerce</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/product">Product</RouterLink></li>
        <li><RouterLink to="/login">Login</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </div>
  </nav>
  </header>

  <RouterView />
</template>

<style scoped>


</style>
