<script setup>
import Input from '../Controls/Input/Input.vue';
import Button from '../Controls/Button/Button.vue';
import Textarea from '../Controls/Textarea/Textarea.vue';
import css from "./Editor.module.css";
import { ref } from 'vue';
import { sendMail } from '../../services/api';
import {v4 as uuidv4} from 'uuid';

const title = ref("");
const destination = ref("");
const content = ref("");

function sendMailForm() {
    sendMail({
        title: title.value,
        mailContent: content.value,
        sender: destination.value,
        date: Date.now(),
        id: uuidv4(),
    })
}
</script>

<template>
    <form @submit.prevent="sendMail" :class="css.editor">
        <Input styleType="form" type="email" placeholder="whom the letter" v-model="destination" />
        <Input styleType="form" placeholder="letter subject" v-model="title" />
        <Textarea :class="css.editor__area" v-model="content"></Textarea>
        <Button>Send</Button>
    </form>
</template>