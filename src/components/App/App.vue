<script setup>
import { ref } from 'vue';
import Header from '../Header/Header.vue';
import Main from '../Main/Main.vue';

const searchValue = ref("")

function search (value) {
  searchValue.value = value
}
</script>

<template>
    <Header :search="search" />
    <Main :search=" searchValue" />
</template>