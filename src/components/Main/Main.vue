<script setup>
import Letter from "../Letter/Letter.vue";
import { LettersMock } from "../../utils/mock";
import css from "./Main.module.css";
import Checkbox from "../Controls/Checkbox/Checkbox.vue";
import { ref } from "vue";

const isAllChecked = ref(false);

function handler (state) {
    isAllChecked.value = state;
}
</script>

<template>
    <main :class="css.main">
        <section :class="css.letters">
            <div>
                <Checkbox @check="handler" />
            </div>
            <Letter 
                v-for="{date, title, sender, isImportant} in LettersMock" 
                :key="date"
                :date="date"
                :isImportant="isImportant"
                :isAllChecked="isAllChecked"
            >
                <template #title>{{ title }}</template>
                <template #sender>{{ sender }}</template>
            </Letter>
        </section>
    </main>
</template>