<template>
  <div class="flex bg-pink-300 rounded-xl shadow-lg px-[4.26rem] py-5">
    <div class="w-full Truckin-font" style="text-shadow: 2px 2px 0px hotpink">
      <!-- <p class="font-bold text-white text-lg">{{ currentTime.toLocaleString() }}</p> -->
      <p class="font-bold text-white text-4xl">
        {{
          currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        }}
      </p>
      <p class="font-bold text-white text-sm mb-1 flex justify-end mr-3">
        {{ currentTime.toLocaleDateString() }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useCurrentTime } from "../composables/useCurrentTime";

const { currentTime } = useCurrentTime();
console.log(currentTime.value);
</script>
