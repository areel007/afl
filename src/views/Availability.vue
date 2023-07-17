<template>
  <div class="relative top-[42px] md:top-[92.063px]">
    <div class="" v-if="area.isPlanned">
      <div class="w-full py-[50px] md:py-[100px] bg-[#6CC06D] h-[80vh]">
        <div class="w-[95%] xl:w-[1200px] mx-auto">
          <p class="text-black text-[14px] md:text-[16px] mb-[20px]">
            Availability results for
            <span class="uppercase font-[600]">{{
              this.$route.query.selectedAddress
            }}</span>
          </p>
          <h1
            class="text-[24px] md:text-[40px] font-[700] uppercase leading-[1] w-[100%] lg:w-[900px] mb-[20px]"
          >
            Thanks for your interest, your area has been planned.
          </h1>
        </div>
      </div>
    </div>

    <div class="" v-else>
      <div class="w-full py-[50px] md:py-[100px] bg-[#6CC06D]">
        <div class="w-[95%] xl:w-[1200px] mx-auto">
          <p class="text-black text-[14px] md:text-[16px] mb-[20px]">
            Availability results for
            <span class="uppercase font-[600]">{{
              this.$route.query.selectedAddress
            }}</span>
          </p>
          <h1
            class="text-[24px] md:text-[40px] font-[700] uppercase leading-[1] w-[100%] lg:w-[900px] mb-[20px]"
          >
            Thanks for your interest, we haven't planned your area at the moment.
          </h1>
          <p class="text-[14px] md:text-[16px] w-[100%] lg:w-[900px] mb-[20px]">
            To be the first to know when we are coming to your street and when you can
            access full fibre broadband, please sign up with us for updates.
          </p>
          <!-- <button
          class="bg-black p-[10px_20px] text-white rounded-md font-[300] text-[14px]"
        >
          Check another address
        </button> -->
        </div>
      </div>

      <div class="py-[30px] md:py-[60px]">
        <div class="w-[95%] xl:w-[1200px] mx-auto">
          <div class="mb-[30px]">
            <h2
              class="text-center text-[20px] md:text-[30px] font-[700] text-black uppercase"
            >
              Register with us today
            </h2>
            <p class="text-center text-[14px]">
              Be the first to know when you can connect to our netword by registering
              below. The asterisked fields are required.
            </p>
          </div>

          <form
            action=""
            class="w-[95%] xl:w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-[10px]"
          >
            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block">
                Area
                <span class="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                required
                class="text-[14px] p-[10px] border border-gray-300 w-full"
                :value="$route.query.selectedAddress"
              />
            </div>
            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block">
                First name
                <span class="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                required
                class="text-[14px] p-[10px] border border-gray-300 w-full"
                v-model="firstname"
              />
            </div>

            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block">
                Email
                <span class="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="smith@xyz.com"
                required
                class="text-[14px] p-[10px] border border-gray-300 w-full"
                v-model="email"
              />
            </div>

            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block">
                Longitude
              </label>
              <input
                type="text"
                placeholder="6.4559"
                class="text-[14px] p-[10px] border border-gray-300 w-full"
                v-model="longitude"
              />
            </div>

            <div class="w-full">
              <label for="" class="font-[600] text-[14px] text-black mb-[5px] block"
                >Latitude</label
              >
              <input
                type="text"
                placeholder="3.2476"
                class="text-[14px] p-[10px] border border-gray-300 w-full"
                v-model="latitude"
              />
            </div>

            <button class="bg-black text-white p-[10px] self-end" @click.prevent="submit">
              Submit
            </button>
          </form>

          <div class="w-[95%] xl:w-[1100px] mx-auto mt-[20px]">
            <p class="text-[#2A2760]">{{ msg }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="py-[30px] md:oy-[60px]">
      <div class="w-[95%] xl:w-[1200px] mx-auto">
        <div class="w-[100%] lg:w-[800px] mx-auto">
          <h2
            class="text-center text-[20px] md:text-[30px] font-[700] text-black uppercase mb-[30px] leading-[1]"
          >
            Explore the map to find out where our network is being rolled out
          </h2>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "available",
  data() {
    return {
      firstname: "",
      longitude: "",
      email: "",
      latitude: "",
      msg: "",
      area: {},
    };
  },
  methods: {
    async submit() {
      const response = await axios.post(
        "https://afl-server.onrender.com/api/v1/area-register",
        {
          firstname: this.firstname,
          longitude: this.longitude,
          email: this.email,
          latitude: this.latitude,
          area: this.$route.query.selectedAddress,
        }
      );
      this.msg = response.data.msg;
      this.longitude = "";
      this.firstname = "";
      this.email = "";
      this.latitude = "";
      setTimeout(() => (this.msg = ""), 4000);
    },

    async getArea() {
      const address = this.$route.query.selectedAddress;
      const area = await axios.get(
        `https://afl-server.onrender.com/api/v1/area-register/${address}`
      );

      this.area = area.data.area;
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    this.getArea();
    this.scrollToTop();
  },
};
</script>
