<template>
  <div class="py-[20px]" style="min-height: 70vh">
    <div class="w-full xl:w-[1200px] mx-auto">
      <div class="">
        <nav
          class="flex items-center gap-[20px] bg-black p-[10px_20px] text-white text-[14px] mb-[20px]"
        >
          <router-link to="/admin/dashboard">Registered areas</router-link>
        </nav>

        <div class="">
          <div class="" v-if="areas.length < 1">No area has been registered</div>
          <div class="" v-else>
            <div class="" v-for="area in areas" :key="area._id">
              <div
                class="w-full grid grid-cols-1 md:grid-cols-4 bg-[#f5f5f5] p-[10px] text-[14px] md:text-[16px] mb-[10px]"
              >
                <div class="">{{ area.firstname }} {{ area.lastname }}</div>
                <div class="">{{ area.email }}</div>
                <div class="">{{ area.phone }}</div>
                <div class="font-[600]">{{ area.area }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      areas: [],
    };
  },
  methods: {
    async getAreas() {
      const response = await axios.get(
        "https://afl-server.onrender.com/api/v1/area-register"
      );
      this.areas = response.data.msg;
    },
  },

  mounted() {
    this.getAreas();
  },
};
</script>
