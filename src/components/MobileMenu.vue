<template>
  <div>
    <nav
      class="w-[80vw] h-[100vh] fixed left-0 top-0 bg-[#2A2760] z-[1001] transition translate-x-[-100%] p-[40px_20px]"
      :class="showMobileMenu ? 'translate-x-[0]' : null"
    >
      <ul v-if="step === 0" class="text-white font-[300] text-[14px]">
        <!--  -->
        <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
          <div class="flex items-center justify-between gap-[5px]">
            <a href="/about-us">About Us</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
              @click="$emit('choose-step-one')"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </li>

        <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
          <div class="flex items-center justify-between gap-[5px]">
            <a href="/our-solutions">Our Solutions</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
              @click="$emit('choose-step-seven')"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </li>

        <li
          @click="$emit('choose-step-two')"
          class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]"
        >
          <div class="flex items-center justify-between gap-[5px]">
            <span>Get Connected</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </li>

        <li
          @click="$emit('choose-step-five')"
          class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]"
        >
          <div class="flex items-center justify-between gap-[5px]">
            <span>Partners</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </li>

        <!-- <li
          @click="$emit('choose-step-three')"
          class="p-[10px] hover:bg-white hover:text-[#ddf6dd]"
        >
          <div class="flex items-center justify-between gap-[5px]">
            <span>Communication</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </li> -->

        <a href="/careers" class="p-[10px] block"> Careers </a>

        <li
          @click="$emit('choose-step-six')"
          class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]"
        >
          <div class="flex items-center justify-between gap-[5px]">
            <span>Portals</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </li>
      </ul>

      <!--  -->
      <div class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 cursor-pointer absolute top-[20px] left-[20px] text-white"
          @click="$emit('close-step')"
          v-if="step !== 0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <!-- Step 1 -->
        <ul v-if="step === 1" class="text-white font-[300] text-[14px]">
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/about-us/our-rollout">Our Rollout</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/about-us/our-infrastructure">Our Infrastructure</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/about-us/our-platform">Our Platform</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/about-us/our-service">Our Service</a>
          </li>
          <!-- <li class="p-[10px] hover:bg-white hover:text-[#6CC06D]">
            <a href="/">Our Vision</a>
          </li> -->
          <!-- <li class="p-[10px] hover:bg-white hover:text-[#6CC06D]">
            <a href="/">Our Management Team</a>
          </li> -->
        </ul>

        <!-- Step 2 -->
        <ul v-if="step === 2" class="text-white font-[300] text-[14px]">
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/get-connected/homes">Residential Properties</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/get-connected/businesses">Commercial Properties</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/get-connected/landlords">Landlord & Estate Managers</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/get-connected/developers">Property Developers</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/get-connected/public">Public Sectors</a>
          </li>
        </ul>

        <!-- Step 3 -->
        <ul v-if="step === 3" class="text-white font-[300] text-[14px]">
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/">News</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/">Contact Us</a>
          </li>
        </ul>

        <!-- Step 4 -->
        <!-- <ul v-if="step === 4" class="text-white font-[300] text-[14px]">
          <li class="p-[10px] hover:bg-white hover:text-[#6CC06D]">
            <a href="/career-segments">Career Segments</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#6CC06D]">
            <a href="/graduates">Graduates</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#6CC06D]">
            <a href="/apprentices-and-placements">Apprentices & Placements</a>
          </li>
        </ul> -->

        <!-- Step 5 -->
        <ul v-if="step === 5" class="text-white font-[300] text-[14px]">
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/partners">Partners</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/partners/mobile-operators">Mobile Operators</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/partners/retail-services-providers">Retail Services Providers</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/partners/public-sector">Public Sector</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/partners/businesses">Businesses</a>
          </li>
        </ul>

        <!-- Step 6 -->
        <ul v-if="step === 6" class="text-white font-[300] text-[14px]">
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/">Client Portal</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/">Customer Portal</a>
          </li>
        </ul>

        <!-- Step 7 -->
        <ul v-if="step === 7" class="text-white font-[300] text-[14px]">
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/our-solutions/capacity">Capacity</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/our-solutions/fibre-to-the-home">Fibre to the Home</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/our-solutions/dark-fibre">Dark Fibre</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/our-solutions/co-location">Co-Location</a>
          </li>
          <li class="p-[10px] hover:bg-white hover:text-[#2A2760] hover:font-[600]">
            <a href="/our-solutions/virtual-machines">Virtual Machines</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  props: ["showMobileMenu", "step", "navMenu"],
};
</script>
