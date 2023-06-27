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
        <div
          class="w-[100%] lg:w-[800px] mb-[20px] md:mb-[40px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[20px] lg:gap-[40px]"
        >
          <div class="">
            <h1 class="font-[600] text-[20px] md:text-[28px] leading-[1] text-[#000]">
              Co-Location
            </h1>
            <p class="text-[16px] md:text-[20px] mb-[10px] md:mb-[20px]">
              Data Center Co-location
            </p>

            <p class="text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
              In addition to our capacity and connectivity solutions, we provide customers
              with the option of co-location services within most of our mini Data Centers
              throughout our network coverage.

              <br /><br />

              This service allows for seamless interconnection between operators and
              system integrators, facilitating the rapid deployment of new connections
              while ensuring optimal equipment and service availability and protection.

              <br /><br />

              At AFL Networks, we meet all the essential requirements to maintain the
              highest standards of reliability and safety in our customer's demand. Our
              Data Centers have state-of-the-art HVAC systems, uninterruptible power
              supplies, anti-fire systems, access control mechanisms, monitoring systems,
              and more.

              <br /><br />

              By opting for our co-location services, you can leverage our infrastructure
              to establish a secure and dependable environment for your equipment and
              services, backed by the necessary safeguards to ensure uninterrupted
              operations.
            </p>
          </div>
          <div class="w-full">
            <img
              src="../../assets/images/300x350-co-location-page.jpg"
              class="w-full"
              alt="afl networks"
            />
          </div>
        </div>

        <!-- <div class="w-full h-full bg-[#f5f5f5] hidden xl:block"></div> -->
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped>
.our-solutions-hero {
  background-image: url(../../assets/images/colocation.webp);
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
