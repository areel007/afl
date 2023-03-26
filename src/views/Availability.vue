<template>
  <div class="relative top-[42px] md:top-[92.063px]">
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
          To be the first to know when we are coming to your street and when you
          can access full fibre broadband, please sign up with us for updates.
        </p>
        <button
          class="bg-black p-[10px_20px] text-white rounded-md font-[300] text-[14px]"
        >
          Check another address
        </button>
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
            Be the first to know when you can connect to our netword by
            registering below.
          </p>
        </div>

        <form
          action=""
          class="w-[95%] xl:w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-[10px]"
        >
          <div class="w-full">
            <label
              for=""
              class="font-[600] text-[14px] text-black mb-[5px] block"
              >First name</label
            >
            <input
              type="text"
              placeholder="John"
              required
              class="text-[14px] p-[10px] border border-gray-300 w-full"
            />
          </div>

          <div class="w-full">
            <label
              for=""
              class="font-[600] text-[14px] text-black mb-[5px] block"
              >Last name</label
            >
            <input
              type="text"
              placeholder="Smith"
              required
              class="text-[14px] p-[10px] border border-gray-300 w-full"
            />
          </div>

          <div class="w-full">
            <label
              for=""
              class="font-[600] text-[14px] text-black mb-[5px] block"
              >Email</label
            >
            <input
              type="email"
              placeholder="e.g. john@afl.com"
              required
              class="text-[14px] p-[10px] border border-gray-300 w-full"
            />
          </div>

          <div class="w-full">
            <label
              for=""
              class="font-[600] text-[14px] text-black mb-[5px] block"
              >Phone</label
            >
            <input
              type="text"
              placeholder="+234 80xx"
              required
              class="text-[14px] p-[10px] border border-gray-300 w-full"
            />
          </div>

          <button class="bg-black text-white p-[10px] self-end">Submit</button>
        </form>
      </div>
    </div>

    <div class="py-[30px] md:oy-[60px]">
      <div class="w-[95%] xl:w-[1200px] mx-auto">
        <div class="w-[100%] lg:w-[800px] mx-auto">
          <h2
            class="text-center text-[20px] md:text-[30px] font-[700] text-black uppercase mb-[30px] leading-[1]"
          >
            Explore the map to find out where our network is being rolled out
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
