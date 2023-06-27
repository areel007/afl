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
            <h1
              class="font-[600] text-[20px] md:text-[28px] leading-[1] text-[#000] mb-[20px] md:mb-[40px]"
            >
              Dark Fibre
            </h1>

            <p class="text-[14px] md:text-[16px] font-[600]">What is Dark Fibre?</p>

            <p class="text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
              AFL Networks specialises in providing the most versatile form of
              communication technology: Dark Fiber. Our customers enjoy the benefits of
              accessing our extensive network, offering a complete infrastructure for
              renting single strands, pairs, or multiple strands to cater to requests of
              various distances, whether short, medium, or long.
            </p>

            <p class="text-[14px] md:text-[16px] font-[600]">
              What is a Dark Fiber Network?
            </p>

            <p class="text-[14px] md:text-[16px]">
              Unlike Capacity Services, which involve purchasing bandwidth or leased line
              capacity on an existing network, Dark Fiber refers to unused fibre optic
              threads that can be rented. This service grants you complete control over
              the dark fibre network, allowing you to create and operate your own
              privately-run optical dark fibre network.
              <br /><br />

              With this level of control, you can choose the transmission technology that
              best suits your needs. Whether you require a point-to-point connection or
              prefer a star self-healing ring or mesh topologies, you can tailor the
              solution to match your client's requirements.

              <br /><br />
              Dark fibre networks can be utilised for private networking, Internet access,
              or Internet infrastructure networking, and this technology's adoption
              continues to increase.

              <br /><br />
              One of AFL Networks' distinguishing features is our offering of dark fibre,
              available for rental or through a long-term transfer of usage rights via
              commercial agreements or Indefeasible Right of Use (IRU). This service is
              particularly advantageous for customers with high-bandwidth connectivity
              needs. We provide the dark fibre cable, and the customer's responsible for
              illuminating it using their equipment according to their specific
              requirements. Our dark fibre deployment is supported by ongoing maintenance,
              both in terms of preventive measures and routine maintenance, and prompt
              response in case of any breakdowns.
            </p>
          </div>

          <div
            class="w-[100%] lg:w-[800px] bg-[#f5eded] p-[20px] md:p-[40px] mb-[20px] md:mb-[40px] mx-auto"
          >
            <div class="mb-[20px] md:mb-[40px]">
              <p class="font-[600] mb-[5px] md:mb-[10px] text-[14px] md:text-[16px]">
                Characteristics:
              </p>
              <ul class="ml-[15px] list-disc text-[12px] md:text-[14px]">
                <li class="mb-[10px] md:mb-[20px]">
                  Monomode Optical Fiber: We exclusively use monomode fibre optic, which
                  ensures information is transmitted through a single, high-intensity
                  light beam.
                </li>

                <li class="mb-[10px] md:mb-[20px]">
                  Fibre Connections with or without Redundancy: We offer options for fibre
                  connections with or without independent secondary paths for added
                  redundancy.
                </li>

                <li class="mb-[10px] md:mb-[20px]">
                  Flexible Contractual Periods and Rental Options: We provide diverse
                  contractual and rental options to accommodate our customers’ needs.
                </li>
              </ul>
            </div>

            <div class="">
              <p class="font-[600] mb-[5px] md:mb-[10px] text-[14px] md:text-[16px]">
                Benefits:
              </p>
              <ul class="ml-[15px] list-disc text-[12px] md:text-[14px]">
                <li class="mb-[10px] md:mb-[20px]">
                  Long-Distance Reach: Monomode optical fibres enable transmission over
                  vast distances without packet loss, unlike multimode fibres.
                </li>

                <li class="mb-[10px] md:mb-[20px]">
                  Personalised Customer Support: Our Network Operations Center (NOC)
                  provides 24/7 customer support.
                </li>

                <li class="mb-[10px] md:mb-[20px]">
                  Strict SLA Compliance: We are committed to meeting the market's most
                  demanding Service Level Agreements (SLAs).
                </li>
              </ul>
            </div>
          </div>

          <div class="w-[100%] lg:w-[800px] mb-[20px] md:mb-[40px] mx-auto">
            <p class="text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
              AFL Networks' Dark Fiber Network empowers you to create a custom, reliable,
              high-performance network infrastructure tailored to your unique
              requirements, ensuring efficient data transmission and seamless
              connectivity.
            </p>
          </div>
        </div>

        <!-- <div class="w-full h-[600px] bg-[#f5f5f5] hidden xl:block"></div> -->
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped>
.our-solutions-hero {
  background-image: url(../../assets/images/dark-fibre.webp);
  /* object-fit: cover; */
  background-position: center;
  /* background-size: cover; */
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
