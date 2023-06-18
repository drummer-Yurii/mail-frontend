<script setup>
import Header from '../Header/Header.vue';
import Main from '../Main/Main.vue';
import css from './App.module.css';
</script>

<template>
  <div :class="css.page">
    <Header />
    <Main />
  </div>
</template>