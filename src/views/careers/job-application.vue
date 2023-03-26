<template>
  <div class="relative top-[48px] md:top-[92px]">
    <section class="py-[50px] md:py-[100px]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="">
          <div
            class="border-b border-gray-200 pb-[20px] mb-[20px] md:mb-[40px]"
          >
            <div class="flex items-center gap-[5px] cursor-pointer mb-[20px]" @click="$router.go(-1)">
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

            <h3
              class="text-[18px] md:text-[30px] font-[600] mb-[5px] md:mb-[10px]"
            >
              Job Application
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Please complete the form below to apply for the position of
              <span class="text-[#67be68] italic underline">{{ $route.query.title }}</span> with us
            </p>
          </div>

          <form class="w-full lg:w-[800px] grid grid-cols-1 gap-[20px]">
            <!--  -->
            <div>
              <label
                class="block font-[500] text-[12px] md:text-[14px] mb-[5px]"
                >Full Name</label
              >
              <div
                class="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[20px]"
              >
                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                  />
                  <span class="block text-[10px] md:text-[12px]"
                    >First Name</span
                  >
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                  />
                  <span class="block text-[10px] md:text-[12px]"
                    >Middle Name</span
                  >
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                  />
                  <span class="block text-[10px] md:text-[12px]"
                    >Last Name</span
                  >
                </div>
              </div>
            </div>

            <div>
              <label
                class="block font-[500] text-[12px] md:text-[14px] mb-[5px]"
                >Date of Birth</label
              >
              <div
                class="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[20px]"
              >
                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                  />
                  <span class="block text-[10px] md:text-[12px]">Month</span>
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                  />
                  <span class="block text-[10px] md:text-[12px]">Day</span>
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                  />
                  <span class="block text-[10px] md:text-[12px]">Year</span>
                </div>
              </div>
            </div>

            <div>
              <label
                class="block font-[500] text-[12px] md:text-[14px] mb-[5px]"
                >Address</label
              >
              <div
                class="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[20px]"
              >
                <div class="grid grid-cols-1 col-span-1 md:col-span-2">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                  />
                  <span class="block text-[10px] md:text-[12px]"
                    >Street Address</span
                  >
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                  />
                  <span class="block text-[10px] md:text-[12px]">City</span>
                </div>

                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                  />
                  <span class="block text-[10px] md:text-[12px]"
                    >State/Province</span
                  >
                </div>
              </div>
            </div>

            <div>
              <label
                class="block font-[500] text-[12px] md:text-[14px] mb-[5px]"
                >Submit your resume</label
              >
              <div>
                <div class="grid grid-cols-1">
                  <input
                    type="text"
                    class="p-[10px] border border-gray-400 block mb-[0] md:mb-[5px]"
                  />
                  <span class="block text-[10px] md:text-[12px]"
                    >Resume URL</span
                  >
                </div>
              </div>
            </div>

            <button
              class="bg-black text-white p-[10px_20px] text-[14px]"
              style="width: min-content"
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
export default {};
</script>
