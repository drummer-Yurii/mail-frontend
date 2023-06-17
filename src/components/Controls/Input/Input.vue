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
    <div :class="css.input__wrapper">
        <input :class="classNames" type="text" />
        <span :class="css.input__icon">
            <slot>
                <img src="/search.svg" alt="search" />
            </slot>
        </span>
    </div>
</template>