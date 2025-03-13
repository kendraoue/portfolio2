<script setup>
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import MobileView from "./components/MobileView.vue";
import DesktopView from "./components/DesktopView.vue";

// Get the current window width
const { width } = useWindowSize();

// Define the breakpoint for an iPad (768px)
const isMobile = computed(() => width.value < 768);
</script>

<template>
  <div class="h-screen">
    <MobileView v-if="isMobile" />
    <DesktopView v-else />
  </div>
</template>
