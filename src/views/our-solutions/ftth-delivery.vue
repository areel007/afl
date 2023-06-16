<template>
  <div class="relative top-[48px] md:top-[92px]">
    <!--  -->
    <div class="w-full bg-[#f5f5f5] py-[20px] hidden md:block">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="flex justify-between items-center">
          <ul class="flex items-center gap-[20px] text-[14px]">
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/our-solutions/capacity'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/our-solutions/capacity">Capacity Services</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/our-solutions/fibre-to-the-home'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/our-solutions/fibre-to-the-home"
                >Fibre to the home</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/our-solutions/dark-fibre'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/our-solutions/dark-fibre">Dark Fibre</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/our-solutions/co-location'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/our-solutions/co-location">Co-Location</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/our-solutions/virtual-machines'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
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
        <div class="">
          <div class="w-[100%] lg:w-[800px] mb-[20px] md:mb-[40px] mx-auto">
            <h1
              class="font-[600] text-[20px] md:text-[28px] leading-[1] text-[#000] mb-[10px] md:mb-[20px]"
            >
              How does AFL Networks deliver FTTH services?
            </h1>

            <p class="text-[14px] md:text-[17px] mb-[10px] md:mb-[20px]">
              AFL Networks has expanded its business offerings to include Fiber to the
              Home (FTTH), providing an open and neutral network model to operators in
              Nigeria. We offer FTTH solutions focusing on network management, expertise,
              and high-quality service provision.
            </p>
          </div>

          <div
            class="w-[100%] lg:w-[800px] bg-[#f5eded] p-[20px] md:p-[40px] mb-[20px] md:mb-[40px] mx-auto"
          >
            <p class="font-[600] mb-[10px] md:mb-[20px] text-[14px] md:text-[17px]">
              The following vital factors drive our FTTH solutions:
            </p>

            <ul
              class="ml-[15px] list-disc text-[14px] md:text-[17px] our-services-guarantee"
            >
              <li class="mb-[10px] md:mb-[20px]">
                Passive Networks: We deploy passive network infrastructure, including
                fibre optic cables and distribution points, to facilitate seamless data
                transmission to end users.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                Active Networks (Bitstream): We enable efficient and reliable data
                transmission over the FTTH infrastructure through our active network
                solutions, specifically bitstream technology.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                Large-scale Deployments: AFL Networks specialises in undertaking massive
                end-to-end FTTH deployments, ensuring comprehensive coverage and enabling
                reliable connectivity for many end users.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                Management, Operation, and Maintenance: We provide comprehensive
                management, operation, and maintenance services to ensure the smooth
                functioning of the FTTH network. Our expertise in network management
                ensures optimal performance and reliability.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                Backhaul: AFL Networks offer backhaul services to support the FTTH
                network, ensuring robust connectivity and seamless data transmission
                between different network segments.
              </li>

              <li>
                Provisioning and Operating Management System Integration: We provide
                integrated provisioning and operating management systems, streamlining the
                management and operation of the FTTH network effectively.
              </li>
            </ul>
          </div>

          <div class="w-[100%] lg:w-[800px] mb-[20px] md:mb-[40px] mx-auto">
            <p class="text-[14px] md:text-[17px] mb-[10px] md:mb-[20px]">
              By combining our extensive network infrastructure, technical expertise, and
              dedication to quality service, AFL Networks delivers reliable and efficient
              FTTH solutions to meet our customers' connectivity needs.
            </p>

            <p class="text-[14px] md:text-[16px] underline cursor-pointer mb-[20px]">
              <span v-if="!showQuicklinks" @click="showQuicklinks = true">Read more</span>
              <span v-else @click="showQuicklinks = false">Read less</span>
            </p>

            <div class="" v-if="showQuicklinks">
              <!-- <p class="text-[14px] md:text-[17px] font-[600] mb-[20px] md:mb-[40px]">
                Quick links
              </p> -->

              <div class="cursor-pointer group mb-[20px]">
                <p class="text-[14px] md:text-[17px] leading-[1.2] mb-[10px]">
                  Fibre to the Home
                </p>
                <router-link
                  to="/our-solutions/fibre-to-the-home"
                  class="flex items-center gap-[5px]"
                >
                  <span>Read more</span>
                  <IconArrowRight class="transition group-hover:translate-x-[10px]" />
                </router-link>
              </div>

              <div class="cursor-pointer group">
                <p class="text-[14px] md:text-[17px] leading-[1.2] mb-[10px]">
                  Active and Passive FTTH Network Models
                </p>
                <router-link
                  to="/our-solutions/ftth/active-passive-ftth"
                  class="flex items-center gap-[5px]"
                >
                  <span>Read more</span>
                  <IconArrowRight class="transition group-hover:translate-x-[10px]" />
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="">
          <p class="text-[14px] md:text-[17px] font-[600] mb-[20px] md:mb-[40px]">
            Quick links
          </p>

          <div class="cursor-pointer group mb-[20px]">
            <p class="text-[14px] md:text-[17px] leading-[1.2] mb-[10px]">
              Fibre to the Home
            </p>
            <router-link
              to="/our-solutions/fibre-to-the-home"
              class="flex items-center gap-[5px]"
            >
              <span>Read more</span>
              <IconArrowRight class="transition group-hover:translate-x-[10px]" />
            </router-link>
          </div>

          <div class="cursor-pointer group">
            <p class="text-[14px] md:text-[17px] leading-[1.2] mb-[10px]">
              Active and Passive FTTH Network Models
            </p>
            <router-link
              to="/our-solutions/ftth/active-passive-ftth"
              class="flex items-center gap-[5px]"
            >
              <span>Read more</span>
              <IconArrowRight class="transition group-hover:translate-x-[10px]" />
            </router-link>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import IconArrowRight from "../../components/icons/IconArrowRight.vue";

export default {
  components: {
    IconArrowRight,
  },
  data() {
    return {
      showQuicklinks: false,
    };
  },
};
</script>

<style scoped>
.our-solutions-hero {
  background-image: url(../../assets/images/bg3.jpg);
  object-fit: cover;
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

.our-services-guarantee {
  column-count: 2;
  gap: 40px;
}

@media screen and (max-width: 768px) {
  .reverse {
    grid-row: 1/2;
  }
  .our-services-guarantee {
    column-count: 1;
    gap: 40px;
  }
}
</style>
