<script setup lang="ts">
import { ref, onMounted, onUnmounted, useSlots } from 'vue';

const props = defineProps<{
  speed?: number
}>();

const text = ref('');
const writer = ref('');

const slots = useSlots();

onMounted(() => {
  if (slots.default) {
    text.value = slots.default()[0].children as string;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.value.length) {
        writer.value += text.value[i];
        ++i;
      } else {
        clearInterval(interval);
      }
    }, props.speed);
  }
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div>{{ writer }}</div>
</template>
