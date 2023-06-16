<template>
  <div class="relative top-[48px] md:top-[92px]">
    <!--  -->
    <div class="w-full bg-[#f5f5f5] py-[20px] hidden md:block">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="flex justify-between items-center">
          <ul class="flex items-center gap-[20px] text-[14px]">
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/our-solutions/capacity">Capacity Services</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/our-solutions/fibre-to-the-home"
                >Fibre to the home</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/our-solutions/dark-fibre">Dark Fibre</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/our-solutions/co-location">Co-Location</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/our-solutions/virtual-machines"
                >Virtual Machines</router-link
              >
            </li>
          </ul>
          <button class="p-[10px] bg-[#383B63] text-white text-[14px]">
            Check availability
          </button>
        </div>
      </div>
    </div>

    <!--  -->
    <section class="h-[300px] md:h-[500px] our-solutions-hero">
      <div class="w-full h-full bg-black absolute top-0 left-0 opacity-[.7]"></div>
      <div class="absolute w-full h-full top-0 left-0">
        <div
          class="w-[85%] xl:w-[1200px] h-full flex flex-col justify-center mx-auto gap-[10px] md:gap-[40px]"
        >
          <div class="mb-[10px]">
            <p
              class="text-[14px] md:text-[18px] leading-[1] font-[300] mb-[20px] md:mb-[40px] uppercase text-white text__underline"
            >
              Our Solutions
            </p>
            <h1
              class="text-white font-[700] uppercase text-[24px] md:text-[40px] lg:text-[80px] leading-[1]"
            >
              FIBRE-OPTIC NETWORK DESIGNED SPECIFICALLY
              <br class="hidden md:block" />
              FOR THE DIGITAL ERA
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="w-[100%] lg:w-[800px] mx-auto">
          <!-- <h1
            class="font-[600] text-[20px] md:text-[28px] leading-[1.3] mb-[15px] md:mb-[20px] text-[#000]"
          >
            The Solution
          </h1> -->
          <p class="text-[16px] md:text-[22px] mb-[10px] md:mb-[20px]">
            AFL Networks firmly believe that adopting modern, open, and pure fibre
            infrastructure is the most effective means of supporting the digital economy,
            fostering national growth, and facilitating future prosperity.
          </p>
          <p class="text-[14px] md:text-[16px] mb-[10px] md:mb-[24px]">
            To truly revolutionise our nation's internet infrastructure, we believe that a
            full-fibre infrastructure provider must possess two critical components:
          </p>
          <ul class="ml-[40px] text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
            <li class="list-disc mb-[10px] md:mb-[20px]">
              <span class="font-[600] mb-[10px] block ml-[20px]"
                >Digital Exchanges or Points of Presence</span
              >
              <p class="ml-[20px]">
                A Digital Exchange serves as a marketplace for exchanging Internet
                resources between supply and demand while acting as a small-scale cloud
                data centre located at the edge of the Internet. AFL Networks has
                earmarked 54 Points of Presence as digital exchanges across the footprint
                with interconnecting fibre optics rings.
              </p>
            </li>
            <li class="list-disc">
              <span class="font-[600] block mb-[10px] ml-[20px]"
                >Open Access Networks</span
              >
              <p class="ml-[20px] text-[14px] md:text-[16px]">
                Wholesale-only open access networks refer to independent, full-fibre
                infrastructure made available to a wide range of service providers to
                offer broadband services to customers across towns and cities. ALF
                Networks operates an open access model, meaning that any service provider
                can access the network equally and provide their services to end-users.
              </p>
            </li>
          </ul>

          <p class="text-[14px] md:text-[16px]">
            We are pleased to offer a full suite of connectivity and collaboration
            services that will truly change the way you live, work and play.
          </p>
        </div>

        <!-- <div class="w-full h-full bg-[#f5f5f5] hidden xl:block"></div> -->
      </div>
    </section>

    <section class="mb-[50px]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[40px] cursor-pointer">
          <div
            class="min-h-[auto] md:min-h-[250px]"
            @click="$router.push('/our-solutions/capacity')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              class="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            >
              <path
                d="M300-286q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm132 328h244v-60H432v60Zm0-164h244v-60H432v60Zm0-164h244v-60H432v60ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"
              />
            </svg>
            <p class="text-[15px] md:text-[20px] font-[500] mb-[5px]">
              Capacity Services
            </p>
            <p class="text-[14px] md:text-[16px] mb-[5px] w-full md:w-[85%]">
              Our fibre-optic capacity services are designed to meet the demands of
              today's evolving networks.
            </p>

            <router-link to="/our-solutions/capacity" class="flex items-center gap-[5px]">
              <span>Read more</span>
              <IconArrowRight />
            </router-link>
          </div>

          <div
            class="min-h-[auto] md:min-h-[250px]"
            @click="$router.push('/our-solutions/fibre-to-the-home')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              class="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            >
              <path
                d="M120-120v-555h165v-165h390v330h165v390H533v-165H427v165H120Zm60-60h105v-105H180v105Zm0-165h105v-105H180v105Zm0-165h105v-105H180v105Zm165 165h105v-105H345v105Zm0-165h105v-105H345v105Zm0-165h105v-105H345v105Zm165 330h105v-105H510v105Zm0-165h105v-105H510v105Zm0-165h105v-105H510v105Zm165 495h105v-105H675v105Zm0-165h105v-105H675v105Z"
              />
            </svg>
            <p class="text-[15px] md:text-[20px] font-[500] mb-[5px]">
              Fibre to the Home
            </p>
            <p class="text-[14px] md:text-[16px] mb-[5px] w-full md:w-[85%]">
              We deliver reliable and efficient FTTH solutions to meet our customers'
              connectivity needs.
            </p>

            <router-link to="/our-solutions/capacity" class="flex items-center gap-[5px]">
              <span>Read more</span>
              <IconArrowRight />
            </router-link>
          </div>

          <div
            class="min-h-[auto] md:min-h-[250px]"
            @click="$router.push('/our-solutions/capacity')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              class="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            >
              <path
                d="M480-120 0-600q99-94 221-147t259-53q137 0 259 53t221 147L480-120Z"
              />
            </svg>
            <p class="text-[15px] md:text-[20px] font-[500] mb-[5px]">Dark Fibre</p>
            <p class="text-[14px] md:text-[16px] mb-[5px] w-full md:w-[70%]">
              Our extensive Dark Fibre network provides complete flexibility with
              unrivaled capacity.
            </p>

            <router-link
              to="/our-solutions/dark-fibre"
              class="flex items-center gap-[5px]"
            >
              <span>Read more</span>
              <IconArrowRight />
            </router-link>
          </div>

          <div
            class="min-h-[auto] md:min-h-[250px]"
            @click="$router.push('/our-solutions/co-location')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              class="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            >
              <path
                d="M522-82v-60q45-6 87.5-23.5T689-212l41 44q-46 38-98 59T522-82Zm269-148-43-41q27-36 45-77.5t25-89.5h61q-8 60-30.5 112.5T791-230Zm27-292q-7-48-25-89t-45-78l43-41q38 50 58 99t30 109h-61ZM437-82Q285-99 183-212.5T81-480q0-154 102-267.5T437-878v60q-127 17-211.5 113.5T141-480q0 128 84.5 224.5T437-142v60Zm253-666q-39-27-81.5-44.5T524-818v-60q54 8 107 29t99 57l-40 44ZM480-269q-85-72-126-133.5T313-516q0-79 50.5-125.5T480-688q66 0 116.5 46.5T647-516q0 52-41 113.5T480-269Zm0-209q19 0 32-13t13-32q0-17-13-31t-32-14q-19 0-32 14t-13 31q0 19 13 32t32 13Z"
              />
            </svg>
            <p class="text-[15px] md:text-[20px] font-[500] mb-[5px]">Co-Location</p>
            <p class="text-[14px] md:text-[16px] mb-[5px] w-full md:w-[85%]">
              This service allows for seamless interconnection between operators and
              system integrators.
            </p>

            <router-link to="/our-solutions/capacity" class="flex items-center gap-[5px]">
              <span>Read more</span>
              <IconArrowRight />
            </router-link>
          </div>

          <div
            class="min-h-[auto] md:min-h-[250px]"
            @click="$router.push('/our-solutions/virtual-machines')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              class="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            >
              <path
                d="M198-278q-60-58-89-133T80-560q0-74 29-149t89-133l35 35q-50 49-76.5 116.5T130-560q0 63 26.5 130.5T233-313l-35 35Zm92-92q-40-37-59-89.5T212-560q0-48 19-100.5t59-89.5l35 35q-29 29-46 72.5T262-560q0 35 17.5 79.5T325-405l-35 35Zm4 290 133-405q-17-12-27.5-31T389-560q0-38 26.5-64.5T480-651q38 0 64.5 26.5T571-560q0 25-10.5 44T533-485L666-80h-59l-29-90H383l-30 90h-59Zm108-150h156l-78-238-78 238Zm268-140-35-35q29-29 46-72.5t17-82.5q0-35-17.5-79.5T635-715l35-35q39 37 58.5 89.5T748-560q0 47-19.5 100T670-370Zm92 92-35-35q49-49 76-116.5T830-560q0-63-27-130.5T727-807l35-35q60 58 89 133t29 149q0 75-27.5 149.5T762-278Z"
              />
            </svg>
            <p class="text-[15px] md:text-[20px] font-[500] mb-[5px]">Virtual Machines</p>
            <p class="text-[14px] md:text-[16px] mb-[5px] w-full md:w-[70%]">
              This is geared towards empowering your business with unparalleled
              efficiency.
            </p>

            <router-link to="/our-solutions/capacity" class="flex items-center gap-[5px]">
              <span>Read more</span>
              <IconArrowRight />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="py-[50px] md:py-[100px]">
      <div class="">
        <TechPartnersLogos />
      </div>
    </section> -->
  </div>
</template>

<script>
import IconArrowRight from "../../components/icons/IconArrowRight.vue";
export default {
  components: { IconArrowRight },
};
</script>

<style scoped>
.our-solutions-hero {
  background-image: url(../../assets/images/our-solutions-hero.jpg);
  /* object-fit: cover; */
  background-position: center;
  background-size: cover;
  position: relative;
}

.text__underline {
  position: relative;
  font-weight: 500;
}

.text__underline:after {
  position: absolute;
  left: 0;
  top: 110%;
  content: "";
  height: 4px;
  width: 40px;
  background: #6cc06d;
}

@media screen and (max-width: 768px) {
  .reverse {
    grid-row: 1/2;
  }
}
</style>
