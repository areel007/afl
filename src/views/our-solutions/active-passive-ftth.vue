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
              class="font-[600] text-[20px] md:text-[28px] leading-[1] text-[#000] mb-[20px] md:mb-[40px]"
            >
              Active and Passive FTTH Network Models
            </h1>

            <p class="text-[14px] md:text-[17px] font-[600] mb-[10px]">
              Passive Model (Dedicated xODN Service for Operators)
            </p>

            <p class="text-[14px] md:text-[17px] mb-[20px] md:mb-[40px]">
              AFL Networks offers a managed Optical Distribution Network (ODN) service
              through dedicated Passive Optical Network (PON) trees.
              <br /><br />
              This service enables the connection of end users within a specific coverage
              area, encompassing a predetermined number of households.
              <br /><br />
              In this model, AFL Networks provides the infrastructure and manages the
              passive network, while the responsibility for activating the network lies
              with the customer or RSP. The customer or RSP implements the active network
              components, including Optical Line Terminals (OLTs) at the Central Office
              and Optical Network Terminals (ONTs) at the end user's home.
            </p>

            <p class="text-[14px] md:text-[17px] font-[600] mb-[10px]">
              Active Model (Bitstream)
            </p>

            <p class="text-[14px] md:text-[17px] mb-[20px] md:mb-[40px]">
              AFL Networks delivers a bitstream capacity supported by the GPON (Gigabit
              Passive Optical Network) FTTH Network, extending from the Central Office or
              head end to end user's home. In the active model, AFL Networks provides a
              comprehensive solution, encompassing both the passive and active
              infrastructure. AFL Networks owns and operates the passive network
              infrastructure and the active components required for delivering the
              bitstream service.
              <br /><br />
              Customers of AFL Networks receive a fully functional active model,
              benefiting from a seamless end-to-end solution.
              <br /><br />
              AFL Networks' flexible approach accommodates both passive and active FTTH
              network models, catering to operators' specific requirements and
              preferences. Whether customers opt for the dedicated xODN service with the
              passive model or the comprehensive bitstream service with the active model,
              AFL Networks ensures reliable connectivity and efficient management of the
              FTTH network infrastructure.
            </p>

            <p class="text-[14px] md:text-[17px] font-[600] mb-[10px]">
              Choosing Between Passive and Active FTTH Models
            </p>

            <p class="text-[14px] md:text-[17px] mb-[20px] md:mb-[40px]">
              For operators aiming to achieve high penetration rates, the passive model is
              a reasonable choice regarding cost, operation, and scalability. However, the
              active model offers a viable alternative for operators seeking control over
              network construction and management.
              <br /><br />
              Whether the end user's home is a Single Family Unit (SFU) or a Multiple
              Dwelling Unit (MDU), AFL Network ensures connectivity to the end user's
              premises in both solutions. This includes providing the last mile
              connection, such as the drop cable and Optical Network Terminal (ONT) if
              required. By offering end-to-end service, our customers can enjoy a seamless
              FTTH experience.
            </p>
          </div>

          <div
            class="w-[100%] lg:w-[800px] bg-[#f5eded] p-[20px] md:p-[40px] mb-[20px] md:mb-[40px] mx-auto"
          >
            <p class="font-[600] mb-[10px] md:mb-[20px] text-[14px] md:text-[17px]">
              Key Characteristics:
            </p>

            <ul
              class="ml-[15px] list-disc text-[14px] md:text-[17px] our-services-guarantee"
            >
              <li class="mb-[10px] md:mb-[20px]">
                Multi-Operator Network: AFL Networks enable independent passive networks,
                allowing multiple operators to utilise the infrastructure effectively.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                High Efficiency: Our passive model optimises the usage of splitters for
                GPON customers, even with low customer penetration. We provide splitters
                on demand, ensuring efficient utilisation of Optical Line Terminal (OLT)
                ports.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                Passive Model: Under the passive model, AFL Networks owns and provides the
                Optical Distribution Network (ODN) infrastructure, while the operators own
                the OLT and ONT devices.
              </li>

              <li class="mb-[10px] md:mb-[20px]">
                Active Model: In the active model, AFL Networks owns and provides the ODN
                infrastructure, as well as the OLT and ONT devices, offering a
                comprehensive solution to operators.
              </li>
            </ul>
          </div>

          <div class="w-[100%] lg:w-[800px] mb-[20px] md:mb-[40px] mx-auto">
            <p class="text-[14px] md:text-[17px] mb-[10px] md:mb-[20px]">
              The primary and secondary cables use a point-to-multipoint topology with a
              1:64 splitting ratio in both models. Each end user benefits from a logical
              point-to-point connection, ensuring they only send and receive the intended
              data. This applies whether AFL NEtworks' customers adopt the Active or
              Passive models by providing their OLTs and ONTs.<br /><br />
              AFL Networks offers the flexibility and expertise to support operators in
              selecting the most suitable FTTH model based on their specific business
              needs, ensuring reliable and efficient connectivity to end users.
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
