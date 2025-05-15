<template>
  <div
    class="grid grid-col-[auto_auto] bg-pink-300 rounded-xl shadow-lg w-[20rem] py-5"
  >
    <div
      class="grid grid-rows-[auto_auto] justify-end Truckin-font px-2 col-start-2"
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
      <p class="font-bold text-white text-sm justify-self-end">
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
