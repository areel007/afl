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
            <!-- <h1 class="font-[600] text-[20px] md:text-[28px] leading-[1] text-[#000]">
              Fibre to the Home
            </h1> -->
            <p class="text-[16px] md:text-[22px] mb-[10px] md:mb-[20px]">
              Open Access FTTH Infrastructure as a Service
            </p>

            <p class="text-[14px] md:text-[17px] font-[600] mb-[10px]">
              What is Fibre to the Home (FTTH)?
            </p>

            <p class="text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
              Fibre to the Home (FTTH) is an access network architecture that utilises
              xPON technology to deliver the fastest and most efficient internet access
              speeds. It enables transmitting of data downstream (from the network to the
              end-user) and upstream (from the user to the network) using optical fibre.
              In this setup, fibre optic cables directly connect the operator's switching
              equipment to individual homes, ensuring a direct fibre connection for the
              end user.
            </p>

            <p class="text-[14px] md:text-[16px] font-[600] mb-[10px]">
              FTTH - xPON Replacing Legacy Infrastructure
            </p>

            <p class="text-[14px] md:text-[16px]">
              AFL Networks acknowledges the rapid technological advancements and evolving
              telecommunications market. In response, we offer planned resources for
              equipment transitions and skilled personnel to provide on-site support for
              installations and maintenance.
            </p>
          </div>

          <div
            class="w-[100%] lg:w-[800px] bg-[#f5eded] p-[20px] md:p-[40px] mb-[20px] md:mb-[40px] mx-auto"
          >
            <p class="font-[600] mb-[10px] md:mb-[20px] text-[14px] md:text-[16px]">
              Our services guarantee:
            </p>

            <ul
              class="ml-[15px] list-disc text-[14px] md:text-[16px] our-services-guarantee"
            >
              <li class="mb-[10px] md:mb-[20px]">
                Enhanced Transmission Speeds: FTTH with xPON enables significantly higher
                bidirectional transmission speeds, facilitating efficient delivery of
                digital information such as telephone, video, and data. Fibre optics offer
                virtually unlimited capacity, with bandwidth upgrades limited only by
                advancements in active equipment technology.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                Cost Reduction: FTTH components and equipment, including fibre, splicing
                boxes, splitters, drop cables, OLTs, and ONTs, have decreased over the
                years, making it a cost-effective solution.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                Reduced Maintenance Costs: Maintenance costs are minimised with no active
                equipment in the field requiring service and highly reliable optical
                components. Full automation and software control simplify network
                operation and maintenance, leading to a reduced need for staffing.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                Long Lifespan: Fiber optic cables have a lifespan of 30+ years, ensuring
                long-term durability and reliability for FTTH deployments.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                Immune to Electromagnetic Interference: Unlike copper networks, fibre
                optics are unaffected by electromagnetic interference, mitigating downtime
                risks associated with such disruptions.
              </li>

              <li>
                Lower Energy Consumption: FTTH consumes less electricity, contributing to
                energy efficiency and reducing environmental impact.
              </li>
            </ul>
          </div>

          <div class="w-[100%] lg:w-[800px] mb-[20px] md:mb-[40px] mx-auto">
            <p class="text-[14px] md:text-[16px] mb-[20px] md:mb-[40px]">
              AFL Networks is dedicated to providing state-of-the-art FTTH solutions that
              address the limitations of legacy or no infrastructure, enabling reliable,
              high-speed, and future-proof connectivity.
            </p>
          </div>

          <div class="w-full xl:w-[1000px] mx-auto bg-[#b3b3b3] mb-[20px] md:mb-[40px]">
            <img
              src="../../assets/images/FTTH-A.jpg"
              class="w-full h-full object-contain"
              alt="afl networks"
            />
          </div>

          <div class="w-full xl:w-[1000px] mx-auto bg-[#cccccc] mb-[20px] md:mb-[40px]">
            <img
              src="../../assets/images/FTTH-B.jpg"
              class="w-full h-full object-contain"
              alt="afl networks"
            />
          </div>
        </div>

        <div class="w-full lg:w-[800px] mx-auto">
          <p
            class="text-[14px] md:text-[16px] underline cursor-pointer mb-[20px]"
            v-if="!showQuicklinks"
            @click="showQuicklinks = true"
          >
            Read more
          </p>
          <p
            class="text-[14px] md:text-[16px] underline cursor-pointer mb-[20px]"
            v-else
            @click="showQuicklinks = false"
          >
            Read less
          </p>

          <div class="" v-if="showQuicklinks">
            <!-- <p class="text-[14px] md:text-[17px] font-[600] mb-[20px] md:mb-[40px]">
                Quick links
              </p> -->

            <div class="cursor-pointer group mb-[20px] w-full md:w-[300px]">
              <p class="text-[14px] md:text-[16px] leading-[1.2] mb-[10px]">
                How does AFL Networks deliver FTTH services?
              </p>
              <router-link
                to="/our-solutions/ftth/ftth-delivery"
                class="flex items-center gap-[5px]"
              >
                <span>Read more</span>
                <IconArrowRight class="transition group-hover:translate-x-[10px]" />
              </router-link>
            </div>

            <div class="cursor-pointer group">
              <p class="text-[14px] md:text-[16px] leading-[1.2] mb-[10px]">
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

        <!-- <div class="">
          <p class="text-[14px] md:text-[17px] font-[600] mb-[20px] md:mb-[40px]">
            Quick links
          </p>

          <div class="cursor-pointer group mb-[20px]">
            <p class="text-[14px] md:text-[16px] leading-[1.2] mb-[10px]">
              How does AFL Networks deliver FTTH services?
            </p>
            <router-link
              to="/our-solutions/ftth/ftth-delivery"
              class="flex items-center gap-[5px]"
            >
              <span>Read more</span>
              <IconArrowRight class="transition group-hover:translate-x-[10px]" />
            </router-link>
          </div>

          <div class="cursor-pointer group">
            <p class="text-[14px] md:text-[16px] leading-[1.2] mb-[10px]">
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
  background-image: url(../../assets/images/FTTH.webp);
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
