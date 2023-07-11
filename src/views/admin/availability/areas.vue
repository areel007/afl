<template>
  <div class="py-[20px]" style="min-height: 70vh">
    <div class="w-full xl:w-[1200px] mx-auto">
      <div class="">
        <nav
          class="flex items-center gap-[20px] bg-black p-[10px_20px] text-white text-[14px] mb-[20px]"
        >
          <router-link to="/admin/dashboard/areas">Areas</router-link>
          <router-link to="/admin/dashboard/add-area">Add Areas</router-link>
        </nav>

        <div class="" v-if="$route.path === '/admin/dashboard/areas'">
          <div class="" v-if="areas.length < 1">No area has been registered</div>
          <div class="" v-else>
            <div
              class="w-full grid grid-cols-1 md:grid-cols-[50px_1fr_1fr_1fr_100px_100px_100px] bg-[#424141] p-[10px] text-[14px] md:text-[16px] mb-[10px] gap-[20px]"
            >
              <div class="text-white">S/n</div>
              <div class="text-white">Name</div>
              <div class="text-white">Email</div>
              <div class="text-white">Area</div>
              <div class="text-white">Longitude</div>
              <div class="text-white">Latitude</div>
              <div class="text-white">Planned</div>
            </div>
            <div class="" v-for="(area, index) in areas" :key="area._id">
              <div
                class="w-full grid grid-cols-1 md:grid-cols-[50px_1fr_1fr_1fr_100px_100px_100px] bg-[#f5f5f5] p-[10px] text-[14px] md:text-[16px] mb-[10px] gap-[20px]"
              >
                <div class="">{{ index + 1 }}</div>
                <div class="capitalize">{{ area.firstname }} {{ area.lastname }}</div>
                <div class="capitalize">{{ area.email }}</div>
                <div class="">{{ area.area }}</div>
                <div class="">{{ area.longitude }}</div>
                <div class="">{{ area.latitude }}</div>
                <div
                  class="cursor-pointer"
                  :class="area.isPlanned ? 'text-green-500' : 'text-red-500'"
                  title="toggle the value"
                  @click="toggleValue(area._id)"
                >
                  {{ area.isPlanned ? "Yes" : "No" }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <router-view></router-view>
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
      plannedValue: false,
    };
  },
  methods: {
    async getAreas() {
      const response = await axios.get(
        "https://afl-server.onrender.com/api/v1/area-register"
      );
      this.areas = response.data.msg;
    },

    async toggleValue(id) {
      await axios.patch(`http://localhost:5000/api/v1/area-register/${id}`);
      !this.plannedValue;
      this.getAreas();
    },
  },

  mounted() {
    this.getAreas();
  },
};
</script>
