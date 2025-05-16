<template>
  <div
    class="grid grid-cols-2 bg-pink-300 rounded-xl shadow-lg w-[20rem] h-[7rem] p-2"
  >
    <div
      class="flex items-start inline-block Truckin-font text-white px-2"
      style="text-shadow: 2px 2px 0px hotpink"
    >
      <h2 class="text-3xl">Welcome,</h2>
      <p class="text-xl">I'm Kendra</p>
    </div>
    <div
      class="Truckin-font px-2 text-right"
      style="text-shadow: 2px 2px 0px hotpink"
    >
      <p class="flex inline font-bold text-white text-3xl whitespace-nowrap">
        {{
          currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        }}
      </p>

      <p class="font-bold text-white text-sm px-2">
        {{ currentTime.toLocaleDateString([], { weekday: "long" }) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useCurrentTime } from "../composables/useCurrentTime";

const { currentTime } = useCurrentTime();
console.log(currentTime.value);
</script>
