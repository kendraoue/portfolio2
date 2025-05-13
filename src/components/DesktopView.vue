<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { useTemplateRef, ref, onMounted, onUnmounted } from "vue";
import KendraPhoto from "@/assets/images/ardnek.jpg";
import Heart from "@/assets/images/Heart.png";
import HeartFlipped from "@/assets/images/HeartFlipped.png";
import Purplesticky from "@/assets/images/Purplesticky.png";
import PixelHeart from "@/assets/images/PixelHeart.png";
import CatHeart from "@/assets/images/CatHeart.gif";
import Placeholder1 from "@/assets/images/Placeholder1.png";
import Placeholder2 from "@/assets/images/Placeholder2.png";
import Placeholder3 from "@/assets/images/Placeholder3.png";
import Placeholder4 from "@/assets/images/Placeholder4.png";
import Polariod from "@/assets/images/Polariod.png";
import PixelHeartInterest from "@/components/PixelHeartInterest.vue";
import PDFView from "@/components/PDFView.vue";
import PDF from "pdf-vue3";

// The source PDF file
const pdfSource = ref("/Resume.pdf");

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

  // Automatically expand the first box after 3 seconds
  setTimeout(() => {
    visibleBoxes.value.box1 = true;
  }, 3000);
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

//Carousel logic
const currentSlide = ref(0);
const items = ref([
  {
    id: 1,
    image: Placeholder1,
    title: "Team Manager App",
    description:
      "This application is built with React on the frontend, using Express for the backend, and MongoDB for data storage. It enables users to manage teams, tournaments, and profiles with role-based access control.",
    frontend:
      "- The app offers a dynamic, responsive interface, allowing users to register, log in via Discord OAuth, and manage teams and tournaments.",
    backend:
      "- Handles authentication, user management, and the creation and modification of tournaments and teams. It ensures role-based access control (Admins, Team Members) and enforces limits like maximum team size and the number of teams per tournament.",
    database:
      "- Stores user data, tournament details, teams, and team memberships, ensuring efficient management and scalability.",
  },
  {
    id: 2,
    image: Placeholder2,
    title: "GamerHub",
    frontend:
      "Vue 3 - Handles user actions like profile updates, group management, event creation, and real-time search. Uses Inertia.js for smooth, reload-free navigation between Vue and the backend.",
    backend:
      "Laravel - Handles auth, business logic, and data processing for profiles, groups, events, and Steam API. Uses PHPUnit for automated testing and stability.",
    database:
      "PostgreSQL -  Stored all structured data such as user profiles, group memberships, events, and chat messages. It integrates tightly with Laravel's Eloquent ORM for easy querying and data manipulation, supporting complex relationships like group ownership, event participation, and linked Steam accounts.",
  },
  {
    id: 3,
    image: Placeholder3,
    title: "Invoice Automation Application",
    frontend:
      "React - Offers a secure, user-friendly interface for configuring invoice parsing, managing presets, and reviewing reports. It uses Microsoft Entra ID (Azure AD) for authentication and supports drag-and-drop PDF field selection.",
    backend:
      "Django - Handles email ingestion, PDF parsing, CSV generation, and reporting. It processes invoices using vendor-specific rules and supports both scheduled and manual parsing, with detailed error handling and system feedback.",
    database:
      "SQLite -  Stores presets, parsing results, and report data. It helps manage system state, supports CSV generation, and avoids duplicate invoice processing.",
  },
]);

const galleryConfig = {
  mouseDrag: false,
  itemsToShow: 1,
  wrapAround: true,
};
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-[#ffaedf]">
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
      <a
        href="https://github.com/kendraoue"
        class="p-3 rounded-lg size-24 flex flex-col items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="#9f76c9"
              d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"
            />
          </g>
        </svg>
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/kendra-ouellet-7a8802261/"
        class="p-3 rounded-lg size-24 flex flex-col items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
        >
          <path
            fill="#9f76c9"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
          />
        </svg>
        Linkedin
      </a>
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
            :class="
              isExpanded
                ? 'opacity-100 translate-y-0 delay-500'
                : 'opacity-0 translate-y-10'
            "
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
              :class="
                isExpanded
                  ? 'opacity-100 translate-y-0 delay-1500'
                  : 'opacity-0 translate-y-10'
              "
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
              As a former dental assistant turned full-stack developer, I’ve
              built my career on empathy, precision, and adaptability, qualities
              that now drive my passion for creating impactful digital
              solutions.
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
                  Throughout my career, I've had the privilege of working
                  alongside diverse teams in both the public and private
                  sectors, developing and optimizing custom applications that
                  improve business efficiency. I'm naturally curious and love
                  understanding how things work, whether it's experimenting with
                  a new framework or learning from everyday challenges to
                  <span class="">grow as a developer.</span>
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
      class="w-201 rounded-lg select-none cursor-move shadow-md flex flex-col"
    >
      <!-- Header Row -->
      <div
        class="bg-[#F9F5E4] border-2 border-[#6b3fa3] h-10 flex flex-row items-center"
      >
        <div class="w-192 ps-1 text-lg text-[#6b3fa3]">Projects</div>
        <button
          class="m-6 h-7 border-2 bg-[#fef9b5] border-[#6b3fa3]"
          @click="toggleBox('box2')"
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

      <!-- Content Area -->
      <div
        class="bg-[#E4F5F9] border-l-2 border-r-2 border-b-2 border-[#6b3fa3]"
      >
        <div class="w-full">
          <!-- Main Carousel -->
          <Carousel
            id="projectGallery"
            v-bind="galleryConfig"
            v-model="currentSlide"
            slide-effect="fade"
            :transition="500"
          >
            <Slide v-for="item in items" :key="item.id">
              <div
                class="relative h-[65vh] flex flex-row justify-center p-12 shadow-lg"
              >
                <!-- Text Content Section -->
                <div class="w-[65%] text-left pr-6 space-y-6">
                  <h2 class="text-3xl font-bold text-[#6b3fa3] border-b-2">
                    {{ item.title }}
                  </h2>
                  <ul class="text-gray-700 text-lg space-y-5 list-disc pl-7">
                    <li>
                      <span class="text-[#6b3fa3]">Frontend: </span>
                      {{ item.frontend }}
                    </li>
                    <li>
                      <span class="font-bold text-[#6b3fa3]">Backend: </span>
                      {{ item.backend }}
                    </li>
                    <li>
                      <span class="font-bold text-[#6b3fa3]">Database: </span>
                      {{ item.database }}
                    </li>
                  </ul>
                </div>

                <!-- Image Section -->
                <div class="w-[45%] flex justify-center items-center relative">
                  <div
                    class="absolute w-68 h-64 bg-white border-10 shadow-md"
                    style="
                      position: absolute !important;
                      width: 272px;
                      height: 256px;
                    "
                  >
                    <img
                      :src="item.image"
                      alt="Project Image"
                      class="w-full h-full object-cover"
                      style="width: 272px; height: 256px"
                    />
                  </div>
                  <div
                    class="absolute w-82 h-86 top-25 -left-6"
                    style="
                      position: absolute !important;
                      width: 328px;
                      height: 344px;
                    "
                  >
                    <img
                      :src="Polariod"
                      alt="Project Image"
                      class="w-full h-full object-cover"
                      style="width: 328px; height: 344px"
                    />
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </div>

    <div
      v-if="visibleBoxes.box3"
      ref="box3"
      v-motion-pop
      :style="style3"
      @wheel.prevent
      style="position: fixed"
      class="rounded-lg select-none cursor-move shadow-md flex flex-col items-center justify-center"
    >
      <!-- First Row -->
      <div
        class="bg-[#F9F5E4] border-2 border-[#6b3fa3] h-10 flex flex-row items-center w-full"
      >
        <div class="w-192 ps-1 text-lg text-[#6b3fa3]">My Resume</div>
        <button
          class="m-6 h-7 border-2 bg-[#fef9b5] border-[#6b3fa3]"
          @click="toggleBox('box3')"
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
        class="bg-[#E4F5F9] border-l-2 border-r-2 border-b-2 border-[#6b3fa3] cursor-pointer flex flex-row w-full h-full overflow-hidden scrollbar-thin scrollbar-thumb-[#6b3fa3] scrollbar-track-[#f0e6ff]"
      >
        <PDF :src="pdfSource" :page="currentPage" class="w-full h-full" />
      </div>
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
  scrollbar-width: thin;
  scrollbar-color: #6b3fa3 #f0e6ff;
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
/*Carousel*/
.carousel {
  --vc-nav-color: #6b3fa3;
  --vc-nav-color-hover: #9f76c9;
  --vc-nav-width: 70px;
  --vc-nav-height: 70px;
}
</style>
