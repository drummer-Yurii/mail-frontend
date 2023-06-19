<script setup>
import { computed } from 'vue';
import css from './Input.module.css';

const props = defineProps(["styleType", "modelValue", "placeholder", "type"]);

defineEmits(["update:modelValue"]);

const classNames = computed(() => ({
    [css.input__main]: props.styleType === "icon",
    [css.input__form]: props.styleType === "form",
    [css.input__default]: !props.styleType
}))
</script>

<template>
    <div :class="css.input__wrapper">
        <input 
            :class="[classNames]" 
            :value="modelValue"
            :placeholder="placeholder"
            :type="type"
            @input="$emit('update:modelValue', $event.target.value)" 
        />
        <span :class="css.input__icon" v-if="props.styleType === 'icon'">
            <slot>
                <img src="/search.svg" alt="search" />
            </slot>
        </span>
    </div>
</template>