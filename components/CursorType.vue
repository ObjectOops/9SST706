<script setup lang="ts">
import { ref, onMounted, onUnmounted, useSlots, watch } from 'vue';
import { useNav } from '@slidev/client/composables/useNav.ts';

const props = defineProps<{
  speed?: number
  slide?: number
}>();
const slots = useSlots();

let text = ref('');
let writer = ref('');
let interval: NodeJS.Timeout;
let timeout: NodeJS.Timeout;

onMounted(() => {
  if (slots.default) {
    const currentPage = useNav().currentPath;

    text.value = slots.default()[0].children as string;
    let i = 0;

    watch(currentPage, () => {
      if (currentPage.value.substring(1) === props.slide?.toString()) {
        if (timeout) {
          clearTimeout(timeout);
        }
        interval = setInterval(() => {
          if (i < text.value.length) {
            writer.value = 
              writer.value.substring(0, writer.value.length - 1) 
              + text.value[i] 
              + (i < text.value.length - 1 ? '█' : ' ');
            ++i;
          } else {
            clearInterval(interval);
          }
        }, props.speed);
      } else {
        timeout = setTimeout(() => {
          i = 0;
          writer.value = '';
          if (interval) {
            clearInterval(interval);
          }
        }, 500);
      }
    });
  }
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<template>
  <div>{{ writer }}</div>
</template>
