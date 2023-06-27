<template>
  <div class="relative top-[48px] md:top-[92px]">
    <div class="w-full bg-[#f5f5f5] py-[20px] hidden md:block">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="flex justify-between items-center">
          <ul class="flex items-center gap-[5px] xl:gap-[20px] text-[14px]">
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/get-connected/homes' ? 'bg-[#6CC06D] text-white' : null
              "
            >
              <router-link to="/get-connected/homes" class=""
                >Residential Properties</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/get-connected/businesses"
                >Commercial Properties</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/get-connected/landlords"
                >Landlord & Estate Managers</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/get-connected/developers"
                >Property Developers</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/get-connected/public' ? 'bg-[#6CC06D] text-white' : null
              "
            >
              <router-link to="/get-connected/public">Public Sectors</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--  -->
    <section class="h-[300px] md:h-[500px] get-connected-hero">
      <div class="w-full h-full bg-black absolute top-0 left-0 opacity-[.5]"></div>
      <div class="absolute w-full h-full top-0 left-0">
        <div
          class="w-[85%] xl:w-[1200px] h-full flex flex-col justify-center mx-auto gap-[10px] md:gap-[40px]"
        >
          <div class="mb-[10px]">
            <h1
              class="text-white font-[700] uppercase text-[24px] md:text-[40px] lg:text-[80px] leading-[1] w-full md:w-[70%] mb-[10px]"
            >
              Enabling open access metro fibre broadband
            </h1>
            <!-- <p class="text-[14px] md:text-[16px] text-white leading-[1] font-[300]">
              Enter your address to find out how you can get connected
            </p> -->
          </div>
          <!-- <div
            class="w-[100%] md:w-[700px] grid grid-cols-1 sm:grid-cols-[80%_1fr] items-start"
          >
            <input
              type="text"
              class="p-[7px_10px] outline-none"
              placeholder="Your home address, i.e. Ikoyi"
            />
            <button class="p-[7px_10px] bg-[#6CC06D] text-white">Check now</button>
          </div> -->
        </div>
      </div>
    </section>

    <!--  -->
    <section
      class="p-[50px_0_50px_0] md:p-[100px_0_100px_0] bg-white"
      :class="isRequirementFormShown ? '!p-[50px_0_0_0] md:!p-[100px_0_0_0]' : null"
    >
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-[30px] md:gap-[50px] items-start"
        >
          <div>
            <h3 class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]">
              Digitally transforming the footprint. <br />
              Enhancing Lagos
            </h3>
            <p class="text-[14px] md:text-[16px]">
              <span class="block mb-[10px]">
                As cutting-edge services and tech solutions continue to surge in
                popularity, there's a growing need for cost-effective and expansive
                bandwidth.
              </span>

              <span class="block mb-[10px]">
                The government is at the forefront of this, tasked with utilising
                technological advancements to enhance public services.
              </span>

              <span class="block mb-[10px]">
                Our localised strategy and commitment to supporting the state's fibre
                objectives and regulations position us as pioneers in this digital
                revolution. This not only attracts foreign investment but also enables the
                state's revival and strengthens the country as a whole.
              </span>
            </p>

            <div class="mt-[10px] md:mt-[20px]">
              <p class="text-[14px] md:text-[16px] mb-[10px] font-[600]">
                In Lagos, our networks are fostering new opportunities, including:
              </p>
              <ul class="ml-[20px] list-disc">
                <li class="text-[14px] md:text-[16px]">
                  Establishing inter-connected networks between educational institutions,
                  libraries, government offices, and emergency response units.
                </li>
                <li class="text-[14px] md:text-[16px]">
                  Catering to the security, stability, performance, and accessibility
                  requirements of public organisations while maximising cost savings and
                  operational efficiency. Devising robust disaster recovery strategies.
                </li>
                <li class="text-[14px] md:text-[16px]">
                  Enabling the deployment of smart city initiatives that feature advanced
                  monitoring, community-wide Wi-Fi, and public information systems.
                </li>
                <li class="text-[14px] md:text-[16px]">
                  Fostering regional investment and generating employment opportunities
                  for the local population.
                </li>
                <li class="text-[14px] md:text-[16px]">
                  Achieving a significant rise in social impact, aligned to elevate Lagos.
                </li>
              </ul>
            </div>
          </div>

          <div class="w-full h-[250px] md:h-[400px]">
            <img
              src="../../assets/images/public-sector-1.jpg"
              alt="afl network"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="mt-[20px] md:mt-[40px]">
          <button
            class="bg-black border border-transparent p-[10px_20px] text-white text-[14px] hover:bg-transparent hover:border hover:border-black hover:text-black"
            @click="isRequirementFormShown = true"
            v-if="!isRequirementFormShown"
          >
            Get in touch
          </button>

          <button
            class="bg-black border border-transparent p-[10px_20px] text-white text-[14px] hover:bg-transparent hover:border hover:border-black hover:text-black"
            @click="isRequirementFormShown = false"
            v-else
          >
            Close form
          </button>
        </div>
      </div>
    </section>

    <section class="bg-white" :class="isRequirementFormShown ? 'py-[50px]' : null">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="mt-[20px]" v-if="isRequirementFormShown">
          <form
            action=""
            class="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[30px] w-full md:w-[750px] content-end"
          >
            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block"
                >First name</label
              >
              <input
                type="text"
                placeholder="John"
                required
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none"
              />
            </div>

            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block"
                >Last name</label
              >
              <input
                type="text"
                placeholder="Smith"
                required
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none"
              />
            </div>

            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block"
                >Company name</label
              >
              <input
                type="text"
                placeholder="Meta"
                required
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none"
              />
            </div>

            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block"
                >Email</label
              >
              <input
                type="email"
                placeholder="e.g. john@afl.com"
                required
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none"
              />
            </div>

            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block"
                >Phone</label
              >
              <input
                type="text"
                placeholder="+234 80xx"
                required
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none"
              />
            </div>

            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block"
                >Business address</label
              >
              <input
                type="text"
                placeholder="e.g. Adeola Odeku"
                required
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none"
              />
            </div>

            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block"
                >Size of business</label
              >
              <select
                name=""
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none"
              >
                <option value="">Choose business size</option>
                <option value="">1-10 Employees</option>
                <option value="">11-49 Employees</option>
                <option value="">50-249 Employees</option>
                <option value="">250+ Employees</option>
              </select>
            </div>

            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block"
                >Product interested in</label
              >
              <input
                type="text"
                placeholder="e.g. Adeola Odeku"
                required
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none"
              />
            </div>

            <div class="w-full">
              <textarea
                name=""
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none resize-none"
                placeholder="Requirements"
              ></textarea>
            </div>

            <button class="bg-black text-white p-[10px] self-center">Submit</button>
          </form>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-[#2a2760]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center gap-[20px] md:gap-[40px]"
        >
          <div>
            <h3
              class="text-white font-[600] text-[20px] md:text-[32px] leading-[1.2] mb-[10px] md:mb-[20px]"
            >
              Check my address on the Network
            </h3>
            <!-- <p class="text-[14px] md:text-[16px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus
              ex impedit voluptas, blanditiis voluptatem?
            </p> -->
          </div>

          <div class="grid grid-cols-1 md:grid-cols-[80%_1fr]">
            <input
              type="text"
              placeholder="Your home address i.e. Ikoyi, Lagos"
              class="text-white bg-transparent placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-white outline-none border border-gray-300 p-[10px]"
              v-model="searchAreaInput"
            />
            <button
              class="bg-black text-white text-[12px] md:text-[14px] leading-[1] p-[10px]"
              @click="checkArea"
            >
              Check now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="w-full lg:w-[100%] mx-auto">
          <!-- <h1
            class="text-center mb-[10px] text-[18px] md:text-[32px] font-[600] leading-[1.2]"
          >
            A range of providers to choose
          </h1> -->
          <h1
            class="text-center mb-[10px] text-[18px] md:text-[32px] font-[600] leading-[1.2]"
          >
            Connect to the AFL Networks
          </h1>
          <p class="text-center text-[14px] md:text-[16px] w-[100%] md:w-[700px] mx-auto">
            Working with some of the Nigeria’s leading Telecommunications and ISPs, we’re
            delivering full fibre-optic broadband connectivity directly into many homes
            and businesses.
          </p>
        </div>
        <div class="mt-[20px] md:mt-[50px]">
          <PartnersCarousel />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PartnersCarousel from "../../components/PartnersCarousel.vue";
export default {
  name: "Public",
  components: { PartnersCarousel },
  data() {
    return {
      isRequirementFormShown: false,
      searchAreaInput: "",
    };
  },

  methods: {
    checkArea() {
      if (this.searchAreaInput) {
        this.$router.push({
          path: "/availability",
          query: { selectedAddress: this.searchAreaInput },
        });
      } else {
        alert("Input your address correctly");
      }
    },
  },
};
</script>

<style scoped>
.get-connected-hero {
  background-image: url(../../assets/images/public-sector-hero.webp);
  background-position: center;
  background-size: cover;
  position: relative;
}

@media screen and (max-width: 768px) {
  .reverse {
    grid-row: 1/2;
  }
}
</style>
