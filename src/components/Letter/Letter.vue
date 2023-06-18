<script setup>
import { computed } from 'vue';
import Checkbox from '../Controls/Checkbox/Checkbox.vue';
import css from "./Letter.module.css";

const { date, isImportant } = defineProps(["date", "isImportant"]);

const stringDate = computed(() => {
    return Intl.DateTimeFormat("ru-RU", { month: "short", day: "numeric", hour: "numeric", minute: "numeric" }).format(date);
})
</script>

<template>
    <div :class="css.letter">
        <div class="">
            <Checkbox />
        </div>
        <div class="">
            <slot name="sender"></slot>
        </div>
        <div class="">
            <slot name="title"></slot>
        </div>
        <div>
            <span v-if="isImportant"><img src="/star.svg" alt="star" width="15" height="15"></span>
        </div>
        <div class="">{{ stringDate }}</div>
    </div>
</template>