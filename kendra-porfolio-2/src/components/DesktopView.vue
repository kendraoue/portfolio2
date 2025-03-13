<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
import { useTemplateRef, ref, onMounted, onUnmounted } from "vue";
import KendraPhoto from "@/assets/images/ardnek.jpg";
import Heart from "@/assets/images/Heart.png";
import HeartFlipped from "@/assets/images/HeartFlipped.png";
import Purplesticky from "@/assets/images/Purplesticky.png";
import PixelHeart from "@/assets/images/PixelHeart.png";
import CatHeart from "@/assets/images/CatHeart.gif";
import PixelHeartInterest from "@/components/PixelHeartInterest.vue";

// Define refs for five draggable elements
const box1 = useTemplateRef<HTMLElement>("box1");
const box2 = useTemplateRef<HTMLElement>("box2");
const box3 = useTemplateRef<HTMLElement>("box3");
const box4 = useTemplateRef<HTMLElement>("box4");

// Simple expanded state
const isExpanded = ref(false);

// Simplified scroll handler
const handleScroll = (event: WheelEvent) => {
  if (visibleBoxes.value.box1) {
    event.preventDefault();
    isExpanded.value = event.deltaY > 0;
  }
};

// Add event listener on component mount
onMounted(() => {
  window.addEventListener("wheel", handleScroll, { passive: false });
});

// Remove event listener on component unmount
onUnmounted(() => {
  window.removeEventListener("wheel", handleScroll);
});

// State to track which boxes are visible
const visibleBoxes = ref({
  box1: false,
  box2: false,
  box3: false,
  box4: false,
});

// Function to toggle box visibility
const toggleBox = (boxId: keyof typeof visibleBoxes.value) => {
  visibleBoxes.value[boxId] = !visibleBoxes.value[boxId];
};

// Function to get initial position from localStorage or default values
const getInitialPosition = (
  key: string,
  defaultX: number,
  defaultY: number
) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : { x: defaultX, y: defaultY };
};

// Apply `useDraggable` to each box
const {
  x: x1,
  y: y1,
  style: style1,
} = useDraggable(box1, {
  initialValue: getInitialPosition("box1-pos", 350, 30),
});
const {
  x: x2,
  y: y2,
  style: style2,
} = useDraggable(box2, {
  initialValue: getInitialPosition("box2-pos", 140, 140),
});
const {
  x: x3,
  y: y3,
  style: style3,
} = useDraggable(box3, {
  initialValue: getInitialPosition("box3-pos", 140, 240),
});
const {
  x: x4,
  y: y4,
  style: style4,
} = useDraggable(box4, {
  initialValue: getInitialPosition("box4-pos", 140, 340),
});
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Buttons to toggle visibility -->
    <div class="flex flex-col gap-4 p-4 fixed left-0 top-0">
      <button
        class="p-3 size-24 flex flex-col items-center justify-center"
        @click="toggleBox('box1')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
        >
          <path
            fill="#9f76c9"
            d="m19.5 1l-1.09 2.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09zM12 2C6.5 2 2 6.5 2 12v10h20V12c0-1.47-.33-2.87-.9-4.13l-1.24 2.72c.08.46.14.91.14 1.41c0 4.43-3.57 8-8 8s-8-3.57-8-8v-.13a10 10 0 0 0 5.74-5.56A10 10 0 0 0 17.5 10a10 10 0 0 0 1.33-.09l-1.48-3.26L12.6 4.5l3.53-1.6C14.87 2.33 13.47 2 12 2m-3 9.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75m6 0A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75"
          />
        </svg>
        About Me
      </button>
      <button
        class="p-3 rounded-lg size-24 flex-col items-center justify-center"
        @click="toggleBox('box2')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="64"
          viewBox="0 0 64 64"
        >
          <g fill="#6b3fa3">
            <path
              d="M48.48 14c2.498 0 4.52 2.224 4.52 4.978v31.04c0 2.746-2.02 4.979-4.52 4.979H7.516C5.024 54.997 3 52.765 3 50.018V18.269c0-2.754 2.02-4.272 4.516-4.272"
            />
            <path
              d="M18.26 8c.842 0 1.525.75 1.525 1.68l10 10.709c0 .926-.684 1.678-1.525 1.678H4.522c-.84 0-1.521-.752-1.521-1.678V9.68c0-.93.682-1.68 1.521-1.68z"
            />
          </g>
          <path
            fill="#9f76c9"
            d="M56.41 22.944c2.496 0 4.518 2.224 4.518 4.978l-6.967 22.1c-.76 1.979-3.02 4.979-5.52 4.979H7.516C5.024 55.001 3 52.769 3 50.022l6.969-22.1C11 26 12.989 22.944 15.485 22.944"
          />
        </svg>
        Projects
      </button>
      <button
        class="p-3 rounded-lg size-24 flex flex-col items-center justify-center"
        @click="toggleBox('box3')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 16 16"
        >
          <path
            fill="#9f76c9"
            d="M8 4.5A1.25 1.25 0 1 0 8 2a1.25 1.25 0 0 0 0 2.5"
          />
          <path
            fill="#9f76c9"
            d="M8 4.5c.597 0 1.13.382 1.32.949l.087.26a.22.22 0 0 1-.21.291h-2.39a.222.222 0 0 1-.21-.291l.087-.26a1.39 1.39 0 0 1 1.32-.949zm-3 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
          />
          <path
            fill="#9f76c9"
            fill-rule="evenodd"
            d="M2.33 1.64c-.327.642-.327 1.48-.327 3.16v6.4c0 1.68 0 2.52.327 3.16a3.02 3.02 0 0 0 1.31 1.31c.642.327 1.48.327 3.16.327h2.4c1.68 0 2.52 0 3.16-.327a3 3 0 0 0 1.31-1.31c.327-.642.327-1.48.327-3.16V4.8c0-1.68 0-2.52-.327-3.16A3 3 0 0 0 12.36.33C11.718.003 10.88.003 9.2.003H6.8c-1.68 0-2.52 0-3.16.327a3.02 3.02 0 0 0-1.31 1.31m6.87-.638H6.8c-.857 0-1.44 0-1.89.038c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819c-.037.45-.038 1.03-.038 1.89v6.4c0 .857.001 1.44.038 1.89c.036.438.101.663.18.819c.192.376.498.682.874.874c.156.08.381.145.819.18c.45.036 1.03.037 1.89.037h2.4c.857 0 1.44 0 1.89-.037c.438-.036.663-.101.819-.18c.376-.192.682-.498.874-.874c.08-.156.145-.381.18-.82c.037-.45.038-1.03.038-1.89v-6.4c0-.856-.001-1.44-.038-1.89c-.036-.437-.101-.662-.18-.818a2 2 0 0 0-.874-.874c-.156-.08-.381-.145-.819-.18c-.45-.037-1.03-.038-1.89-.038"
            clip-rule="evenodd"
          />
        </svg>
        Resume
      </button>
      <button
        class="p-3 rounded-lg size-24 flex flex-col items-center justify-center"
        @click="toggleBox('box4')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 20 20"
        >
          <path
            fill="#9f76c9"
            d="M17.74 2.76a4.32 4.32 0 0 1 0 6.1l-1.53 1.52c-1.12 1.12-2.7 1.47-4.14 1.09l2.62-2.61l.76-.77l.76-.76c.84-.84.84-2.2 0-3.04a2.13 2.13 0 0 0-3.04 0l-.77.76l-3.38 3.38c-.37-1.44-.02-3.02 1.1-4.14l1.52-1.53a4.32 4.32 0 0 1 6.1 0M8.59 13.43l5.34-5.34c.42-.42.42-1.1 0-1.52c-.44-.43-1.13-.39-1.53 0l-5.33 5.34c-.42.42-.42 1.1 0 1.52c.44.43 1.13.39 1.52 0m-.76 2.29l4.14-4.15c.38 1.44.03 3.02-1.09 4.14l-1.52 1.53a4.32 4.32 0 0 1-6.1 0a4.32 4.32 0 0 1 0-6.1l1.53-1.52c1.12-1.12 2.7-1.47 4.14-1.1l-4.14 4.15c-.85.84-.85 2.2 0 3.05c.84.84 2.2.84 3.04 0"
          />
        </svg>
        My Links
      </button>
    </div>
    <!--Animation needed for exit-->
    <!-- Draggable Boxes -->
    <div
      v-if="visibleBoxes.box1"
      ref="box1"
      v-motion-pop
      :style="style1"
      style="position: fixed"
      class="w-201 rounded-lg select-none cursor-move shadow-md flex flex-col"
    >
      <!-- First Row -->
      <div
        class="bg-[#F9F5E4] border-2 border-[#6b3fa3] h-10 flex flex-row items-center"
      >
        <div class="w-192 ps-1 text-lg text-[#6b3fa3]">About Me</div>
        <button
          class="m-6 h-7 border-2 bg-[#fef9b5] border-[#6b3fa3]"
          @click="toggleBox('box1')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ff68b4"
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
            />
          </svg>
        </button>
        <div class="w-1"></div>
      </div>

      <!-- Second Row -->
      <div
        class="bg-[#E4F5F9] border-l-2 border-r-2 border-b-2 border-[#6b3fa3] flex flex-row transition-[height] duration-500 ease-in-out overflow-hidden"
        :class="isExpanded ? 'h-[70vh]' : 'h-[40vh]'"
      >
        <div class="w-1/2 pt-4">
          <!-- Fixed position image container -->
          <div class="flex justify-center items-center">
            <img :src="KendraPhoto" class="border-4 border-[#6b3fa3] size-75" />
            <img :src="Heart" class="absolute size-25 top-10 left-0" />
            <img :src="HeartFlipped" class="absolute size-15 top-72 left-80" />
          </div>

          <!-- Content section with transition -->
          <div 
            class="relative pt-8 transition-all duration-500 ease-in-out"
            :class="isExpanded ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-10'"
          >
            <!-- Interests Title -->
            <div class="text-[#6b3fa3] text-2xl Palm-font text-center mb-4">
              Some of my interests...
            </div>

            <!-- Three hearts with text -->
            <div class="flex justify-center space-x-4 text-center">
              <PixelHeartInterest
                icon="/src/assets/images/Controller.png"
                label="Gaming"
                :delay="700"
                :is-expanded="isExpanded"
              />
              <PixelHeartInterest
                icon="/src/assets/images/Music.png"
                label="Music"
                :delay="900"
                :is-expanded="isExpanded"
              />
              <PixelHeartInterest
                icon="/src/assets/images/Trees.png"
                label="Outgoing"
                :delay="1200"
                :is-expanded="isExpanded"
              />
            </div>

            <!-- Projects Link -->
            <div 
              class="text-[#6b3fa3] text-2xl Palm-font text-center mt-8 hover:underline cursor-pointer transition-all duration-500 ease-in-out"
              :class="isExpanded ? 'opacity-100 translate-y-0 delay-1500' : 'opacity-0 translate-y-10'"
              @click="toggleBox('box2')"
            >
              Click me to see my projects!
            </div>
          </div>
        </div>
        <div
          class="bg-blue-100 w-1/2 p-4 flex flex-col scrollbar-hide relative h-full"
        >
          <!-- Title -->
          <div
            class="font-semibold Palm-font absolute transition-all duration-500 ease-in-out w-full"
            :class="
              isExpanded
                ? 'top-4 text-[#6b3fa3]'
                : 'top-[50%] -translate-y-1/2 text-[#9f76c9] animate-title-pulse'
            "
          >
            <div class="text-3xl">
              <span><</span>Hello, my name is Kendra Ouellet.>
            </div>
            <div class="text-[#6b3fa3] text-lg ps-3 pe-5">
              I am a passionate software developer with expertise in web
              development and user experience design. I love creating beautiful,
              functional applications that make a difference.
            </div>
          </div>

          <!-- Centered down arrow -->
          <div
            v-if="!isExpanded"
            class="absolute w-full flex justify-center top-[65%] animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 1024 1024"
              class="text-[#9f76c9]"
            >
              <path
                fill="currentColor"
                d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
              />
            </svg>
          </div>

          <!-- Content -->
          <!--Used Transition to see the difference between tailwind and Vue-->
          <Transition
            enter-active-class="transition-all duration-500 delay-500"
            leave-active-class="transition-all duration-500"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="isExpanded"
              class="flex flex-col Palm-font gap-4 absolute w-[98%] top-[160px] items-center"
            >
              <img
                :src="Purplesticky"
                class="absolute size-[420px] -top-[20px]"
                alt="Purple sticky note"
              />
              <div class="ps-11 pt-12 pe-8 relative max-w-[350px] mt-4">
                <div class="text-[#6b3fa3] text-xl">
                  My journey in technology began with a fascination for how
                  things work on the internet, and that curiosity has led me to
                  become a full-stack developer.
                </div>
                <div class="text-[#6b3fa3] text-xl mt-4">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through technical writing.
                </div>
              </div>
              <img
                :src="CatHeart"
                class="absolute size-25 top-[40vh]"
                alt="Cat playing with heart gif"
              />
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <div
      v-if="visibleBoxes.box2"
      ref="box2"
      v-motion-pop
      :style="style2"
      style="position: fixed"
      class="w-24 h-24 bg-red-500 rounded-lg select-none cursor-move shadow-md flex flex-col items-center justify-center"
    >
      Box 2
      <button
        class="mt-2 text-xs bg-white text-black px-2 py-1 rounded"
        @click="toggleBox('box2')"
      >
        Close
      </button>
    </div>

    <div
      v-if="visibleBoxes.box3"
      ref="box3"
      v-motion-pop
      :style="style3"
      style="position: fixed"
      class="w-24 h-24 bg-green-500 rounded-lg select-none cursor-move shadow-md flex flex-col items-center justify-center"
    >
      Box 3
      <button
        class="mt-2 text-xs bg-white text-black px-2 py-1 rounded"
        @click="toggleBox('box3')"
      >
        Close
      </button>
    </div>

    <div
      v-if="visibleBoxes.box4"
      ref="box4"
      v-motion-pop
      :style="style4"
      style="position: fixed"
      class="w-24 h-24 bg-yellow-500 rounded-lg select-none cursor-move shadow-md flex flex-col items-center justify-center"
    >
      Box 4
      <button
        class="mt-2 text-xs bg-white text-black px-2 py-1 rounded"
        @click="toggleBox('box4')"
      >
        Close
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Prevent text selection while dragging */
* {
  user-select: none;
}

/* Hide scrollbar while maintaining scroll functionality */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

/* Add custom pulse animation */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}
</style>
/* Ensure pop animation only plays once */
