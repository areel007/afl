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
            >
              <router-link to="/about-us/our-platform">Our Platform</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/about-us/our-service' ? 'bg-[#6CC06D] text-white' : null
              "
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
              Our Services
            </h3>
            <p class="text-[18px] md:text-[22px] font-[300] text-left mb-[30px]">
              Providing consistently prompt and dependable services is not a coincidence;
              it requires intentional effort and attention to detail.
              <br />

              Our collaboration with partners is an ongoing process requiring foresight,
              commitment, resources, and technology. Nevertheless, the most crucial aspect
              is having a team of compassionate individuals. We seek inspiration from
              companies outside our field that provide essential services, and we question
              ourselves: How can we make every interaction with our customers seamless?
              How can we eliminate wait times? And, in the rare event of an issue, how can
              we guarantee that it is addressed truthfully, effectively, and
              empathetically?
            </p>
          </div>

          <div class="w-full h-[250px] md:h-[400px] bg-black">
            <img
              src="../../assets/images/our-service.jpg"
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
              src="../../assets/images/our-people.jpg"
              alt="afl network"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="reverse">
            <h3 class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]">
              Our people establish our standards.
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Our team is dedicated to anticipating problems and proactively seeking
              resolutions before they affect our customers.<br /><br />
              We refrain from using systems, procedures, or justifications as a shield
              when communicating with our partners or their customers. We only make
              promises we can fulfil and only claim to be knowledgeable about topics we
              genuinely understand.
              <br /><br />
              Suppose the situation is challenging or the outcome is unfavourable. In that
              case, we provide a straightforward account of the facts, clarify the reasons
              behind the issue, and make every effort to remedy it. Subsequently, we
              thoroughly evaluate the occurrence and its causes and take steps to improve
              our approach as we advance.
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
              Accountability is crucial.
            </h3>
            <p class="text-[14px] md:text-[16px]">
              We’re fine-tuning our intelligent monitoring systems and introducing service
              tools and AI-driven chatbots to handle every day efficiently.
              <br /><br />
              But even the smartest technology needs a human heart. If an issue arises, a
              reputation is on the line, or a tricky question needs answering, the swift
              intervention and accountability of a living, thinking person makes the
              difference between meeting and surpassing expectations.
            </p>
          </div>

          <div class="w-full h-[300px] md:h-[400px] bg-gray-100">
            <img
              src="../../assets/images/accountabilty.jpg"
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
          <div class="w-full h-[300px] md:h-[400px] bg-gray-100">
            <img
              src="../../assets/images/change-enablers.jpg"
              alt="afl network"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="reverse">
            <h3 class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]">
              Our people are the enablers of change.
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Recognising areas for improvement is the initial stage in enhancing service
              for the future. We urge all members of our team to undertake this approach
              and to view every issue as a chance to gain knowledge.
              <br /><br />
              In the event that circumstances do not proceed according to plan, we provide
              a clear account of the facts, elucidate the causes, and strive to rectify
              the issue to the best of our ability.
              <br /><br />
              In the event that circumstances do not proceed according to plan, we provide
              a clear account of the facts, elucidate the causes, and strive to rectify
              the issue to the best of our ability.
            </p>
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
            <button class="bg-black text-white text-[12px] md:text-[14px] leading-[1]">
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
  name: "Service",
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
