<script setup>
import Letter from "../Letter/Letter.vue";
import { LettersMock } from "../../utils/mock";
import css from "./Main.module.css";
</script>

<template>
    <main>
        <aside></aside>
        <section :class="css.letters">
            <Letter 
                v-for="{date, title, sender, isImportant} in LettersMock" 
                :key="date"
                :date="date" 
                :sender="sender"
                :isImportant="isImportant"
            >
                <template #title>{{ title }}</template>
                <template #sender>{{ sender }}</template>
            </Letter>
        </section>
    </main>
</template>