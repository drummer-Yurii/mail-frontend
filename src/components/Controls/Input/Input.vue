<script setup>
import { computed } from 'vue';
import css from './Input.module.css';

const props = defineProps(["styleType"]);

const classNames = computed(() => ({
    [css.input_main]: props.styleType === "main",
    [css.input_default]: !props.styleType
}))
</script>

<template>
    <input :class="classNames" type="text" />
</template>