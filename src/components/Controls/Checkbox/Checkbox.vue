<script setup>
import { ref, watch } from 'vue';

defineEmits(["check"]);
const props = defineProps(["isChecked"]);

const refEl = ref();

watch(() => props.isChecked, () => {
    refEl.value.checked = props.isChecked;
})
</script>

<template>
    <input 
        type="checkbox" 
        :checked="isChecked" 
        @change="$emit('check', $event.target.checked)" 
        ref="refEl" 
    />
</template>