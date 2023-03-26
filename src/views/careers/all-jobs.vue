<template>
  <div class="relative top-[48px] md:top-[92px] mb-[50px] md:mb-[100px]">
    <div v-if="true">
      <section class="pt-[50px] md:pt-[100px]">
        <div class="w-[85%] xl:w-[1200px] mx-auto">
          <div class="w-full md:w-[600px] mb-[20px] md:mb-[40px]">
            <div
              class="p-[8px_10px] bg-[#67be68] whitespace-nowrap text-white rounded-full text-[14px] mb-[20px]"
              style="width: min-content"
            >
              We're hiring
            </div>

            <h2
              class="text-[18px] md:text-[30px] font-[600] leading-[1.2] mb-[20px]"
            >
              Be part of our mission
            </h2>
            <p class="text-[14px] md:text-[16px]">
              We're looking for passionate people to join us on our mission. We
              value flat hierachies, clear communication, and full ownership and
              responsibility.
            </p>
          </div>

          <div class="w-full pb-[20px] md:pb-[50px] lg:w-[800px]">
            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-[5px] md:gap-[20px] mt-[20px] md:mt-[40px]"
            >
              <div
                class="p-[10px] bg-black text-white rounded-full text-center inline-flex items-center justify-center leading-[1] text-[14px]"
                >All Jobs</div
              >
            </div>
          </div>
        </div>
      </section>

      <section class="" v-if="$route.path === '/careers/all-jobs'">
        <div class="w-[85%] xl:w-[1200px] mx-auto">
          <div
            class="py-[20px] md:py-[40px] first:border-transparent border-t border-gray-400"
            v-for="(job, index) in jobs"
            :key="index"
          >
            <!--  -->
            <div>
              <h3 class="text-[16px] md:text-[26px] font-[600] mb-[10px]">
                {{ job.title }}
              </h3>
              <p class="text-[14px] md:text-[16px] mb-[10px]">
                {{ job.jobDescription }}
              </p>
              <div class="flex gap-[10px] items-center">
                <div
                  class="text-[12px] bg-black text-white p-[8px_10px] rounded-full"
                >
                  {{ job.location }}
                </div>
                <div
                  class="text-[12px] bg-black text-white p-[8px_10px] rounded-full"
                >
                  {{ job.type }}
                </div>
                <button
                  @click="
                    $router.push({
                      path: '/careers/job-application',
                      query: {
                        title: job.title,
                      },
                    })
                  "
                  class="text-[12px] bg-black text-white p-[8px_10px] rounded-full"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <router-view></router-view>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  name: "AllJobs",
  data() {
    return {
      jobs: [
        {
          title: "Product Designer",
          jobDescription:
            "We're looking for a mid-level product designer to join out team.",
          location: "Hybrid",
          type: "Full-time",
        },
        {
          title: "Engineering Manager",
          jobDescription:
            "We're looking for an experienced engineering manager to join our team.",
          location: "On-site",
          type: "Full-time",
        },
        {
          title: "Customer Success Manager",
          jobDescription:
            "We're looking for a customer success manager to join out team.",
          location: "100% remote",
          type: "Full-time",
        },
        {
          title: "Product Manager",
          jobDescription:
            "We're looking for a customer success manager to join out team.",
          location: "100% remote",
          type: "Full-time",
        },
        {
          title: "Front End Developer",
          jobDescription:
            "We're looking for a customer success manager to join out team.",
          location: "100% remote",
          type: "Full-time",
        },
      ],
    };
  },
};
</script>

<style scoped>
.vertical__scrolling__menu {
  max-width: 1200px;
  overflow-x: auto;
}
</style>
