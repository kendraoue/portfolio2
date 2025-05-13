<script setup lang="ts">
defineProps<{
  icon: string;
  label: string;
  delay: number;
  isExpanded: boolean;
}>();
</script>

<template>
  <div
    class="relative transition-all duration-500 ease-in-out group cursor-none"
    :class="
      isExpanded
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'
    "
    :style="{ transitionDelay: `${delay}ms` }"
    @mousemove="(e) => {
      const tooltip = e.currentTarget.querySelector('.tooltip');
      if (tooltip) {
        tooltip.style.left = e.clientX - e.currentTarget.getBoundingClientRect().left + 'px';
        tooltip.style.top = e.clientY - e.currentTarget.getBoundingClientRect().top - 40 + 'px';
      }
    }"
  >
    <img :src="'/src/assets/images/PixelHeart.png'" class="w-50 h-30" alt="Heart outline" />
    <span class="absolute inset-0 flex items-center justify-center">
      <img :src="icon" class="size-13" :alt="label" />
    </span>
    <span class="tooltip absolute pointer-events-none bg-[#9f76c9]/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm -translate-y-8">{{ label }}</span>
  </div>
</template> 