<script setup>
import { computed, ref } from 'vue';
import Checkbox from '../Controls/Checkbox/Checkbox.vue';
import css from "./Letter.module.css";

const { date, isImportant } = defineProps(["date", "isImportant"]);
const isChecked = ref(false);

const stringDate = computed(() => {
    return Intl.DateTimeFormat("ru-RU", { month: "short", day: "numeric", hour: "numeric", minute: "numeric" }).format(date);
})

function handle(isCheckedEvent) {
    isChecked.value = isCheckedEvent;
}

const letterClasses = computed(() => ({
    [css.letter]: true,
    [css.letter_checked]: isChecked.value
}))
</script>

<template>
    <div :class="letterClasses">
        <div>
            <Checkbox @check="handle" :class="[css.letter__checkbox]" />
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