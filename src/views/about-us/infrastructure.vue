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
              :class="
                $route.path === '/about-us/our-infrastructure'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/about-us/our-infrastructure"
                >Our Infrastructure</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-platform">Our Platform</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-service">Our Service</router-link>
            </li>
            <!-- <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/">Our Vision</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-management-team"
                >Our Management Team</router-link
              >
            </li> -->
          </ul>
          <button class="p-[10px] bg-[#383B63] text-white text-[14px]">
            Check availability
          </button>
        </div>
      </div>
    </div>

    <!--  -->
    <section class="h-[300px] md:h-[500px] about-us-hero">
      <div class="w-full h-full bg-black absolute top-0 left-0 opacity-[.7]"></div>
      <div class="absolute w-full h-full top-0 left-0">
        <div
          class="w-[85%] xl:w-[1200px] h-full flex flex-col justify-center mx-auto gap-[10px] md:gap-[40px]"
        >
          <div class="mb-[10px]">
            <h1
              class="text-white font-[700] uppercase text-[24px] md:text-[40px] lg:text-[80px] leading-[1]"
            >
              FIBRE-OPTIC NETWORK DESIGNED SPECIFICALLY <br class="hidden md:block" />
              FOR THE DIGITAL ERA
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
              Our Infrastructure
            </h3>
            <p class="text-[18px] md:text-[22px] font-[300] text-left mb-[30px]">
              Creating and constructing our infrastructure from the ground up enables us
              to ensure that everything is done the first time correctly.
              <br />
              This approach allows us to demand the utmost excellence in construction,
              utilise cutting-edge network technology, and establish intelligent and
              adaptable systems immediately. The outcome is a highly dependable and
              intelligent network that can endure for many years.
            </p>
          </div>

          <div class="w-full h-[250px] md:h-[400px] bg-black">
            <img
              src="../../assets/images/Our-Infrastructure.jpg"
              alt="afl network"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-[#c6fcc8]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[100px] items-start"
        >
          <div class="w-full h-[250px] md:h-[400px] bg-gray-100">
            <img
              src="../../assets/images/the-way-we-plan.jpg"
              alt="afl network"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="reverse">
            <h3 class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]">
              The way we plan our Network
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Our network planning process commences with identifying all the sites that
              require connectivity before the construction process begins.<br /><br />
              This allows us to determine the areas where maximum capacity is necessary,
              both presently and potentially in the future. Using this information, we
              design the main routes of our network, ensuring that the cables can be
              redirected in case of any damage.
              <br /><br />
              Once the main routes have been established, we design a fibre connection
              point for each site we will pass through, ensuring excess capacity is
              reserved.
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
            <h3 class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]">
              The way we build
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Our approach to local network builds emphasises consideration for the impact
              on the surrounding neighbourhood, beginning from the initial planning
              stages.
              <br /><br />
              We are partnered with EKO Electricity Distribution Plc (EKEDP), which
              enables us to deliver fibre infrastructure to residents, businesses, local
              government institutions and municipalities by minimising disruption and
              ensuring precision during infrastructure installation.
              <br /><br />
              Additionally, we strive to include public and private landlords to ensure
              equal access for all.
            </p>
          </div>

          <div class="w-full h-[250px] md:h-[400px] bg-gray-100">
            <img
              src="../../assets/images/the-way-we-build.jpg"
              alt="afl network"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-[#c6fcc8]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[100px] items-start"
        >
          <div class="w-full h-[250px] md:h-[400px] bg-gray-100">
            <img
              src="../../assets/images/tech-we-use.jpg"
              alt="afl network"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="reverse">
            <h3 class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]">
              The technology we use
            </h3>
            <p class="text-[14px] md:text-[16px]">
              We use advanced technology to oversee and address any connection-related
              problems that may arise.
              <br /><br />
              Our containerised points of presence and fibre exchanges are slightly larger
              than the size of a shipping container, are designed to accommodate fibre
              connections and can be expanded as needed.
              <br /><br />
              These points of presence are purpose-built all-in-one containerised data
              centres equipped with climate control systems and incorporate AI and machine
              learning technology to ensure the longevity of the equipment, monitor the
              services and minimise the likelihood of equipment failure.
              <br /><br />
              Our commitment to using environmentally friendly and efficient energy
              sources also helps to keep their carbon emissions low.
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
            <h3 class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]">
              The way we connect the Metropolis
            </h3>
            <p class="text-[14px] md:text-[16px]">
              The manner in which a local network is linked to the rest of Lagos and
              Nigeria can significantly impact the quality of all services.
              <br /><br />
              To ensure optimal control over quality, speed, and reliability even after
              data traffic leaves a local area, we have developed our own core metro
              backbone network.
              <br /><br />
              This strategic move enables us to provide people with the connections they
              deserve while enabling our ISP/MNO partners to offer their services in every
              locality within the footprint by linking up with a single point on our
              network.
            </p>
          </div>

          <div class="w-full h-[250px] md:h-[400px] bg-gray-100">
            <img
              src="../../assets/images/connect-metropolis.jpg"
              alt="afl network"
              class="w-full h-full object-cover"
            />
          </div>
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
              Check my address on the Network
            </h3>
            <!-- <p class="text-[14px] md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus
              ex impedit voluptas, blanditiis voluptatem?
            </p> -->
          </div>

          <div class="grid grid-cols-1 md:grid-cols-[80%_1fr]">
            <input
              type="text"
              placeholder="Your home address i.e. Ikoyi, Lagos"
              class="bg-transparent placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-black outline-none border border-gray-300 p-[10px]"
            />
            <button
              class="bg-black text-white text-[12px] md:text-[14px] leading-[1] p-[10px]"
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
import Map from "../../components/Map.vue";
export default {
  name: "Rollout",
  components: { Map },
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
