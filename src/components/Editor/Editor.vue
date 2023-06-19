<script setup>
import Input from '../Controls/Input/Input.vue';
import Button from '../Controls/Button/Button.vue';
import Textarea from '../Controls/Textarea/Textarea.vue';
import css from "./Editor.module.css";

function sendMail() {

}
</script>

<template>
    <form @submit.prevent="sendMail" :class="css.editor">
        <Input styleType="form" placeholder="letter subject" />
        <Textarea :class="css.editor__area"></Textarea>
        <Button>Send</Button>
    </form>
</template>