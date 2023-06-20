<template>
  <div class="py-[20px]">
    <div class="w-full xl:w-[1200px] mx-auto">
      <div class="">
        <nav
          class="flex items-center gap-[20px] bg-black p-[10px_20px] text-white text-[14px]"
        >
          <router-link to="/admin/dashboard/jobs">All Jobs</router-link>
          <router-link to="/admin/dashboard/add-job">Add Job</router-link>
          <router-link to="/admin/dashboard/applications">Applications</router-link>
        </nav>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconDelete from "../../components/icons/IconDelete.vue";
export default {
  name: "jobs",
  components: { IconDelete },
  data() {
    return {
      jobs: [],
    };
  },

  methods: {
    async getJobs() {
      const jobs = await axios.get("https://afl-server.onrender.com/api/v1/jobs");

      this.jobs = jobs.data.jobs;
    },

    async deleteJob(id) {
      await axios.delete(`https://afl-server.onrender.com/api/v1/jobs/${id}`);
      this.getJobs();
    },
  },

  mounted() {
    this.getJobs();
  },
};
</script>
