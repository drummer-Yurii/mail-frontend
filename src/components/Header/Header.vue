<script setup>
import { ref, watch } from 'vue';
import Button from '../Controls/Button/Button.vue';
import Input from '../Controls/Input/Input.vue';
import css from './Header.module.css';

const props = defineProps(["search"]);

const searchValue = ref("");

watch(searchValue, () => {
    props.search(searchValue.value);
})
</script>

<template>
    <header>
        <ul :class="css.header">
            <li :class="css.header__logo">Mail</li>
            <li :class="css.header__search">
                <Input :styleType="'icon'" placeholder="Search..." v-model="searchValue" />
            </li>
            <li :class="css.header__help">
                <Button :styleType="'icon'">
                    <img src="/help.svg" alt="help" width="30" height="30" />
                </Button>
            </li>
        </ul>
    </header>
</template>