<script setup>
defineEmits(["check"])
</script>

<template>
    <input type="checkbox" @change="$emit('check', $event.target.checked)" />
</template>