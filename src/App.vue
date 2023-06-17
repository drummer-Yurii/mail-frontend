<script setup>
import { ref } from 'vue';
import Modal from './components/Modal/Modal.vue';

const isShow = ref(false);
</script>

<template>
  <button @click="isShow = !isShow">Show</button>
  <Modal :show="isShow" @close="isShow = false">This is my content modal window</Modal>
</template>