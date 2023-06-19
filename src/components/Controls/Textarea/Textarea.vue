<script setup>
import css from "./Textarea.module.css";

defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<template>
    <textarea 
        spellcheck 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >

    </textarea>
</template>