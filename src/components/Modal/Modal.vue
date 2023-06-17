<script setup>
import { Teleport, Transition } from 'vue';
import css from './Modal.module.css';

defineEmits(["close"]);
defineProps(['show']);
</script>

<template>
    <Teleport to="#modal">
        <Transition>
            <div :class="css.modal__overlay" v-if="show" @click.self="$emit('close')">
                <div :class="css.modal">
                    <div :class="css.modal__header">
                        <button @click="$emit('close')">&times;</button>
                    </div>
                    <div :class="css.modal__body">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.v-enter-active, .v-leave-active {
    transition: opacity 400ms ease;
}
.v-enter-from, .v-leave-to {
    opacity: 0;
}
</style>