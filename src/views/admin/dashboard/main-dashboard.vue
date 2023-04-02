import SignOut from '../../../components/icons/SignOut.vue';

<template>
  <div class="w-full">
    <header class="w-full py-[10px] md:py-[20px] bg-[#67be68] shadow-md">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="flex justify-between items-center">
          <span class="text-[14px] md:text-[18px] font-[500] text-white"
            >Dashboard</span
          >
          <nav class="flex gap-[10px] text-[14px]">
            <router-link to="/admin/dashboard" class="text-white"
              >News</router-link
            >
            <router-link to="/admin/dashboard/jobs" class="text-white"
              >Jobs</router-link
            >
          </nav>
          <div
            class="flex items-center gap-[10px] cursor-pointer"
            @click="signOut"
          >
            <SignOut />
            <span class="text-white text-[14px] hidden sm:block">Log out</span>
          </div>
        </div>
      </div>
    </header>
    <div class="w-[85%] xl:w-[1200px] mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SignOut from "../../../components/icons/SignOut.vue";

export default {
  name: "Dashboard",
  components: { SignOut },

  methods: {
    signOut() {
      localStorage.removeItem("LoggedUser");
      this.$router.push("/admin/authentication");
    },
  },
};
</script>
