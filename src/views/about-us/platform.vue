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
              <router-link to="/about-us/our-rollout">Our Rollout</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-infrastructure"
                >Our Infrastructure</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/about-us/our-platform'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/about-us/our-platform"
                >Our Platform</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-service">Our Service</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/">Our Vision</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-management-team">Our Management Team</router-link>
            </li>
          </ul>
          <button class="p-[10px] bg-[#383B63] text-white text-[14px]">
            Check availability
          </button>
        </div>
      </div>
    </div>

    <!--  -->
    <section class="h-[300px] md:h-[500px] about-us-hero">
      <div
        class="w-full h-full bg-black absolute top-0 left-0 opacity-[.7]"
      ></div>
      <div class="absolute w-full h-full top-0 left-0">
        <div
          class="w-[85%] xl:w-[1200px] h-full flex flex-col justify-center mx-auto gap-[10px] md:gap-[40px]"
        >
          <div class="mb-[10px]">
            <h1
              class="text-white font-[700] uppercase text-[24px] md:text-[40px] lg:text-[80px] leading-[1]"
            >
            FIBRE-OPTIC NETWORK DESIGNED SPECIFICALLY <br class="hidden md:block"> FOR THE DIGITAL ERA
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="p-[40px_0_40px_0] md:p-[80px_0_80px_0] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="w-full lg:w-[800px] mx-auto">
          <div>
            <h3
              class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[10px] md:mb-[20px]"
            >
              Our Platform
            </h3>
            <p
              class="text-[18px] md:text-[22px] font-[300] text-left mb-[30px]"
            >
              We focus on enhancing our service level by implementing more
              intelligent systems.
              We aim to enable our partners to provide high-quality service and
              connectivity to their customers. We're developing advanced network
              management platforms that utilise real-time geospatial data to
              achieve this. These platforms will provide partners instant access
              to comprehensive information, facilitating easy, zero-touch
              upgrades that can help reduce costs while keeping customers
              satisfied throughout their journey.
            </p>
          </div>

          <div class="w-full h-[300px] md:h-[400px] bg-black"></div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-[#c6fcc8]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[100px] items-start"
        >
          <div class="w-full h-[300px] md:h-[400px] bg-gray-100"></div>

          <div class="reverse">
            <h3
              class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]"
            >
              We develop our platforms in a way that sets a positive precedence
              for the future.
            </h3>
            <p class="text-[14px] md:text-[16px]">
              We can obtain and disseminate vital information about ongoing
              construction, service availability, and installation timelines by
              ensuring the highest calibre of build and service readiness data
              are input into our specialised, intelligent systems. <br /><br />
              This data is also used to power the address checker on our
              website, enabling individuals throughout the footprint in Lagos to
              quickly determine when AFL Networks services will be accessible in
              their area.
              <br /><br />
              This approach sets the tone for our operations, allowing us to
              remain committed to excellence in everything.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[100px] items-start"
        >
          <div>
            <h3
              class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]"
            >
              Universal accessibility.
            </h3>
            <p class="text-[14px] md:text-[16px]">
              We are developing web and API-based interfaces allowing partners
              of various sizes and types to easily access up-to-date information
              regarding our network status and customer service performance.
              <br /><br />
              By providing comprehensive and dependable information, we assist
              our partners in offering their customers reliable estimates of
              installation, upgrade, and repair times.
              <br /><br />
              Additionally, partners can utilise this information to create
              their service tools and improve the quality of their products.
            </p>
          </div>

          <div class="w-full h-[300px] md:h-[400px] bg-gray-100"></div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-[#c6fcc8]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[100px] items-start"
        >
          <div class="w-full h-[300px] md:h-[400px] bg-gray-100"></div>

          <div class="reverse">
            <h3
              class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]"
            >
              Round-the-clock service.
            </h3>
            <p class="text-[14px] md:text-[16px]">
              It can be incredibly frustrating to wait for an engineer to come
              and fix your internet service.
              <br /><br />
              However, our approach is different. We employ intelligent
              diagnostics to continuously monitor every aspect of our network
              and the connections we provide. With this system, we receive
              immediate alerts when there is an issue, allowing us to quickly
              determine how many users are affected and pinpoint the precise
              location of the problem.
              <br /><br />
              As a result, we can send our repair team directly to the location
              of the fault, often fixing the issue before it is even noticed.
              This means that our customers can return to their activities
              without delay, rather than wait for a repair.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[100px] items-start"
        >
          <div>
            <h3
              class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]"
            >
              We utilise technology to enhance daily tasks and activities.
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Continuously seeking innovative approaches to improve the
              satisfaction of our partners and customers is our priority. An
              excellent illustration of this is our implementation of
              open-access automation technology.
              <br /><br />
              This enables the automatic allocation of network resources in an
              organised and managed fashion, ruling out unnecessary mistakes and
              providing visibility to partners of their customer's connections
              and the endpoints connected to a given area.
              <br /><br />
              This ultimately informs the marketing approach for the client's
              consideration. In addition, this minimises mistakes caused by
              human errors and reduces carbon emissions resulting from repeat
              engineer visits, allowing us to serve a more significant number of
              customers daily.
            </p>
          </div>

          <div class="w-full h-[300px] md:h-[400px] bg-gray-100"></div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-gray-100">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center gap-[20px] md:gap-[40px]"
        >
          <div>
            <h3
              class="text-black font-[600] text-[20px] md:text-[32px] leading-[1] tracking-tighter mb-[10px]"
            >
              Check my address
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos natus ex impedit voluptas, blanditiis voluptatem?
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-[80%_1fr]">
            <input
              type="text"
              placeholder="Your home address i.e. Ikoyi, Lagos"
              class="bg-transparent placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-black outline-none border border-gray-300 p-[10px]"
            />
            <button
              class="bg-black text-white text-[12px] md:text-[14px] leading-[1]"
            >
              Check now
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Platform",
};
</script>

<style scoped>
.about-us-hero {
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
</style>
