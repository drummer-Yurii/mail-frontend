<script setup>
import { computed } from 'vue';
import css from './Button.module.css';

const props = defineProps(["styleType"]);

const classNames = computed(() => ({
    [css.btn_icon]: props.styleType === "icon",
    [css.btn_default]: !props.styleType
}))
</script>

<template>
    <button :class="[classNames, css.btn]">
        <slot></slot>
    </button>
</template>