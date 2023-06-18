<script setup>
import { Teleport, Transition } from 'vue';
import css from './Modal.module.css';

defineEmits(["close"]);
defineProps({
    show: Boolean
});
</script>

<template>
    <Teleport to="#modal">
        <Transition>
            <div v-if="show" :class="css.modal" @click.self="$emit('close')">
                <div :class="css.modal_body">
                    <slot></slot>
                    <button @click="$emit('close')" :class="css.modal_times">&times;</button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.v-enter-active, .v-leave-active {
    transition: opacity 0.1s ease-in;
}
.v-enter-from, .v-leave-to {
    opacity: 0;
}
</style>