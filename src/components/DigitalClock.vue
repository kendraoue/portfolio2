<template>
  <div
    class="grid grid-cols-2 bg-pink-300 rounded-xl shadow-lg w-[20rem] h-[8rem] p-4"
  >
    <div
      class="Truckin-font text-3xl text-white px-2"
      style="text-shadow: 2px 2px 0px hotpink"
    >
      <h2>Welcome</h2>
    </div>
    <div
      class="grid grid-rows-2 Truckin-font px-2 text-right"
      style="text-shadow: 2px 2px 0px hotpink"
    >
      <p class="font-bold text-white text-4xl">
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
