<template>
  <div class="relative top-[48px] md:top-[92px]">
    <section class="py-[50px] md:py-[100px]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="">
          <div class="border-b border-gray-200 pb-[20px] mb-[20px] md:mb-[40px]">
            <div
              class="flex items-center gap-[5px] cursor-pointer mb-[20px]"
              @click="$router.go(-1)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span class="text-[12px] md:text-[14px]">Back</span>
            </div>

            <div class="mb-[20px] md:mb-[40px] w-full lg:w-[800px]">
              <div class="mb-[10px] md:mb-[20px]">
                <h3 class="font-[600] text-[#2A2760] text-[24px]">Careers</h3>
                <p class="text-[14px] md:text-[16px]">
                  In Aldreda fields Limited, we enable broadband penetration and create
                  access to affordable and quality digital content through innovative
                  deployment of future-proof full fibre infrastructure and technology in
                  transforming Lagos State into a digital knowledge-based economy for
                  national development and global presence. <br /><br />
                  As technology advances in an unprecedented pace, we are at the
                  forefront, connecting the world through our open access fibre
                  infrastructure-as-a-service. With a commitment to excellence and
                  innovation, we empower ISPs and media content providers to reach new
                  horizons in delivering unparalleled digital services to consumers.
                </p>
              </div>

              <div class="mb-[10px]">
                <h3 class="font-[600] text-[#2A2760] text-[24px]">Our Commitment</h3>
                <p class="text-[14px] md:text-[16px]">
                  We are a people-centric organization, focused on building dreams and
                  providing great opportunities for our teams. We believe in the
                  uniqueness of every individual and in our quest to constantly challenge
                  the status quo and remain ahead, we harness the strength of diversity,
                  encourage collaboration and tenacity in delivering the highest standards
                  of work output that surpass customer expectations.<br /><br />
                  At Aldreda Fields Limited, we understand that the fortitude of any
                  successful enterprise lies in its talented workforce, hence our
                  commitment to build the right character, standards, methods and process
                  orientation for excellent delivery. We believe in fostering a
                  collaborative and dynamic work culture, where your ideas are valued,
                  your skills are honed and your potentials unleashed in appreciable
                  measures.
                  <br /><br />Whether you’re an experienced professional seeking a new
                  challenge or a fresh graduate eager to make your mark, our startup
                  environment is brimming with opportunities for your growth and
                  fulfillment.
                </p>
              </div>
            </div>

            <div
              class="mb-[20px] md:mb-[40px] w-full lg:w-[800px]"
              v-html="job.jobContent"
            ></div>

            <h3
              class="text-[16px] md:text-[24px] font-[600] mb-[5px] md:mb-[10px] text-[#2A2760]"
            >
              Job Application
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Please complete the form below to apply for the position of
              <span class="text-[#2A2760] underline font-[500]">{{ job.jobTitle }}</span>
              with us
            </p>
          </div>

          <form class="w-full lg:w-[800px] grid grid-cols-1 gap-[20px]">
            <!--  -->
            <div>
              <label class="block font-[500] text-[12px] md:text-[14px] mb-[5px]"
                >Full Name</label
              >
              <div class="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[20px]">
                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                    v-model="applicationForm.firstname"
                  />
                  <span class="block text-[10px] md:text-[12px]">First Name</span>
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                    v-model="applicationForm.middlename"
                  />
                  <span class="block text-[10px] md:text-[12px]">Middle Name</span>
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                    v-model="applicationForm.lastname"
                  />
                  <span class="block text-[10px] md:text-[12px]">Last Name</span>
                </div>
              </div>
            </div>

            <div>
              <label class="block font-[500] text-[12px] md:text-[14px] mb-[5px]"
                >Date of Birth</label
              >
              <div class="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[20px]">
                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                    v-model="applicationForm.month"
                  />
                  <span class="block text-[10px] md:text-[12px]">Month</span>
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                    v-model="applicationForm.day"
                  />
                  <span class="block text-[10px] md:text-[12px]">Day</span>
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                    v-model="applicationForm.year"
                  />
                  <span class="block text-[10px] md:text-[12px]">Year</span>
                </div>
              </div>
            </div>

            <div>
              <label class="block font-[500] text-[12px] md:text-[14px] mb-[5px]"
                >Address</label
              >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[20px]">
                <div class="grid grid-cols-1 col-span-1 md:col-span-2">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                    v-model="applicationForm.street"
                  />
                  <span class="block text-[10px] md:text-[12px]">Street Address</span>
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                    v-model="applicationForm.city"
                  />
                  <span class="block text-[10px] md:text-[12px]">City</span>
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                    v-model="applicationForm.state"
                  />
                  <span class="block text-[10px] md:text-[12px]">State/Province</span>
                </div>
              </div>
            </div>

            <div>
              <label class="block font-[500] text-[12px] md:text-[14px] mb-[5px]"
                >Submit your resume</label
              >
              <div>
                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                    v-model="applicationForm.resumeUrl"
                  />
                  <span class="block text-[10px] md:text-[12px]">Resume URL</span>
                </div>
              </div>
            </div>

            <button
              class="bg-black text-white p-[10px_20px] text-[14px]"
              style="width: min-content"
              @click.prevent="submitApplication"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "job application",
  data() {
    return {
      job: {},
      applicationForm: {
        firstname: "",
        middlename: "",
        lastname: "",
        month: "",
        day: "",
        year: "",
        street: "",
        city: "",
        state: "",
        resumeUrl: "",
      },
    };
  },
  methods: {
    async getJob() {
      const id = this.$route.query.jobID;
      const job = await axios.get(`https://afl-server.onrender.com/api/v1/jobs/${id}`);
      this.job = job.data.job;
    },

    async submitApplication() {
      await axios.post("https://afl-server.onrender.com/api/v1/application", {
        position: this.job.jobTitle,
        firstname: this.applicationForm.firstname,
        middlename: this.applicationForm.middlename,
        lastname: this.applicationForm.lastname,
        monthOfBirth: this.applicationForm.month,
        dayOfBirth: this.applicationForm.day,
        yearOfBirth: this.applicationForm.year,
        streetName: this.applicationForm.street,
        city: this.applicationForm.city,
        state: this.applicationForm.state,
        resumeUrl: this.applicationForm.resumeUrl,
      });
    },
  },
  mounted() {
    this.getJob();
  },
};
</script>
