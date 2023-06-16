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
        <div class="mb-[20px] md:mb-[40px]">
          <div class="w-[100%] lg:w-[800px] mb-[20px] md:mb-[40px] mx-auto">
            <!-- <h1
              class="font-[600] text-[20px] md:text-[28px] leading-[1.3] mb-[15px] md:mb-[20px] text-[#000]"
            >
              Capacity Services
            </h1> -->
            <p class="text-[18px] md:text-[22px] mb-[10px] md:mb-[20px]">
              We specialise in providing high-capacity bandwidth connections through fibre
              optic technology, delivering fast and secure connectivity for a wide range
              of network services. Our solutions cater to backbone and access networks and
              backhaul.
            </p>
            <p class="text-[14px] md:text-[16px] mb-[10px]">Our services include:</p>

            <ul class="ml-[40px] text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
              <li class="list-disc">
                <span class="block ml-[20px]"
                  >Ethernet Services with 1G, 10G, and 100G interfaces based on MEF
                  Carrier Ethernet standards.</span
                >
              </li>
              <li class="list-disc">
                <span class="block ml-[20px]"
                  >Wavelengths (up to nx100 Gbps) to support high-speed data transfer
                  requirements based on DWDM technology.</span
                >
              </li>
            </ul>

            <p class="text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
              Our fibre-optic capacity services are designed to meet the demands of
              today's evolving networks. We offer fully scalable solutions with maximum
              agility, adaptability, and flexibility. Whether you require dark fibre or
              other custom solutions, our offerings can be tailored to your needs.
            </p>

            <p class="text-[14px] md:text-[16px]">
              Experience the power of high-capacity fibre optic connectivity with our
              scalable and reliable solutions.
            </p>
          </div>

          <div
            class="w-[100%] lg:w-[800px] mx-auto bg-[#f5eded] p-[20px] md:p-[40px] grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px]"
          >
            <div class="">
              <div class="mb-[20px]">
                <p class="font-[600] text-[14px] md:text-[16px] mb-[10px]">
                  Characteristics
                </p>

                <ul class="ml-[40px] list-disc text-[14px] md:text-[16px]">
                  <li>Protected and unprotected optical fibre circuits</li>
                  <li>Scalability of connections from 1Mbps to multi- 100Gbps</li>
                  <li>
                    Wide range of technologies and connectivity interfaces available
                  </li>
                </ul>
              </div>
            </div>

            <div class="">
              <p class="font-[600] text-[14px] md:text-[16px] mb-[10px]">Benefits</p>

              <ul class="ml-[15px] list-disc text-[14px] md:text-[16px]">
                <li>Total integration into the customer's optical fibre network</li>
                <li>Boundless scalability</li>
                <li>Circuit redundancy through already existing routes</li>
                <li>Cost savings with no need for network deployment by the customer</li>
                <li>
                  Personalised customer support 24x7 through our Network Operations Center
                  (NOC)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full xl:w-[1000px] mx-auto mb-[20px] md:mb-[40px]">
          <img
            src="../../assets/images/AFL-Networks-Network-Topology-Capacity.jpg"
            class="w-full h-full object-contain"
            alt="afl networks"
          />
        </div>

        <div class="w-full xl:w-[1000px] mx-auto bg-[#cccccc]">
          <img
            src="../../assets/images/AFL-Networks-Network-Topology-Capacity-2.jpg"
            class="w-full h-full object-contain"
            alt="afl networks"
          />
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
import TechPartnersLogos from "../../components/TechPartnersLogos.vue";
export default {
  components: { TechPartnersLogos },
};
</script>

<style scoped>
.our-solutions-hero {
  background-image: url(../../assets/images/capacity-services.jpg);
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
