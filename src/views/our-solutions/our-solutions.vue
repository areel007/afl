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
      <div class="w-[85%] xl:w-[1000px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[40px] cursor-pointer">
          <div
            class="min-h-[auto] md:min-h-[250px]"
            @click="$router.push('/our-solutions/capacity')"
          >
            <IconCapacity class="mb-[10px]" />
            <p class="text-[15px] md:text-[20px] font-[500] mb-[5px]">
              Capacity Services
            </p>
            <p class="text-[14px] md:text-[16px] mb-[5px] w-full lg:w-[85%]">
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
            <IconFTTH class="mb-[10px]" />
            <p class="text-[15px] md:text-[20px] font-[500] mb-[5px]">
              Fibre to the Home
            </p>
            <p class="text-[14px] md:text-[16px] mb-[5px] w-full lg:w-[85%]">
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
            <IconDarkFibre class="mb-[10px]" />
            <p class="text-[15px] md:text-[20px] font-[500] mb-[5px]">Dark Fibre</p>
            <p class="text-[14px] md:text-[16px] mb-[5px] w-full lg:w-[80%]">
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
            <IconCoLocation class="mb-[10px]" />
            <p class="text-[15px] md:text-[20px] font-[500] mb-[5px]">Co-Location</p>
            <p class="text-[14px] md:text-[16px] mb-[5px] w-full lg:w-[85%]">
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
            <IconVirtualMachine class="mb-[10px]" />
            <p class="text-[15px] md:text-[20px] font-[500] mb-[5px]">Virtual Machines</p>
            <p class="text-[14px] md:text-[16px] mb-[5px] w-full lg:w-[70%]">
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
import IconCapacity from "../../components/icons/IconCapacity.vue";
import IconFTTH from "../../components/icons/IconFTTH.vue";
import IconDarkFibre from "../../components/icons/IconDarkFibre.vue";
import IconCoLocation from "../../components/icons/IconCoLocation.vue";
import IconVirtualMachine from "../../components/icons/IconVirtualMachine.vue";

export default {
  components: {
    IconArrowRight,
    IconCapacity,
    IconFTTH,
    IconDarkFibre,
    IconCoLocation,
    IconVirtualMachine,
  },
};
</script>

<style scoped>
.our-solutions-hero {
  background-image: url(../../assets/images/our-solutions-hero.webp);
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
