<script setup lang="ts">
import pixelHeart from "@/assets/images/PixelHeart.png";

defineProps<{
  icon: string; // Index to select the correct icon
  label: string; // Tooltip label
  delay: number; // Retained for other purposes like animations
  isExpanded: boolean; // Controls visibility
}>();
</script>

<template>
  <div
    class="relative transition-all duration-500 ease-in-out group cursor-none"
    :class="
      isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    "
    :style="{ transitionDelay: `${delay}ms` }"
    @mousemove="
      (e) => {
        const tooltip = e.currentTarget.querySelector('.tooltip');
        if (tooltip) {
          tooltip.style.left =
            e.clientX - e.currentTarget.getBoundingClientRect().left + 'px';
          tooltip.style.top =
            e.clientY - e.currentTarget.getBoundingClientRect().top - 40 + 'px';
        }
      }
    "
  >
    <img :src="pixelHeart" class="w-50 h-30" alt="Heart outline" />
    <span class="absolute inset-0 flex items-center justify-center">
      <img :src="icon" class="size-11" :alt="label" />
    </span>
    <span
      class="tooltip absolute pointer-events-none bg-[#9f76c9]/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm -translate-y-8"
      >{{ label }}</span
    >
  </div>
</template>
