<script setup>
import Button from '../Controls/Button/Button.vue';
import Input from '../Controls/Input/Input.vue';
import css from './Header.module.css';
</script>

<template>
    <header>
        <ul :class="css.header">
            <li :class="css.header__logo">MyMail</li>
            <li :class="css.header__search">
                <Input styleType="main" placeholder="Search messages" />
            </li>
            <li :class="css.header__help">
                <Button styleType="icon">
                    <img src="/help.svg" alt="help" width="30" height="30" />
                </Button>
            </li>
        </ul>
    </header>
</template>