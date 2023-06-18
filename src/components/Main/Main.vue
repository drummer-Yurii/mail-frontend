<script setup>
import Letter from "../Letter/Letter.vue";
import { lettersMock } from "../../utils/mock";
import css from "./Main.module.css";
import Checkbox from "../Controls/Checkbox/Checkbox.vue";
import { ref } from "vue";
import Button from "../Controls/Button/Button.vue";
import Modal from "../Modal/Modal.vue";

const props = defineProps(["search"])

const isAllChecked = ref(false);
const isOpenEditor = ref(false);

function handler (state) {
    isAllChecked.value = state;
}

function filterFits(lettersMock) {
    const searchValue = props.search
    return lettersMock.filter((el) => {
        return ~el.title.indexOf(searchValue) || ~el.sender.indexOf(searchValue) || !searchValue
    });
}
</script>

<template>
    <main :class="css.main">

        <section :class="css.main__create">
            <Button @click="isOpenEditor = !isOpenEditor">Create new letter</Button>
        </section>

        <section :class="css.letters">
            <div :class="css['letters_all-check']">
                <Checkbox @check="handler" />
            </div>
            <Letter 
                v-for="{date, title, sender, isImportant} in filterFits(lettersMock, search)" 
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
    <Modal :show="isOpenEditor" @close="isOpenEditor = false"></Modal>
</template>