<script setup>
import Input from '../Controls/Input/Input.vue';
import Button from '../Controls/Button/Button.vue';

function sendMail() {

}
</script>

<template>
    <form @submit.prevent="sendMail">
        <Input styleType="form" placeholder="letter subject" />
        <Button>Send</Button>
    </form>
</template>