<template>
  <div class="relative top-[48px] md:top-[92px]">
    <div class="w-full bg-[#f5f5f5] py-[20px] hidden md:block">
      <!--  -->
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="flex justify-between items-center">
          <ul class="flex items-center gap-[20px] text-[14px]">
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/communication/news">News</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/communication/contact-us'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/communication/contact-us"
                >Contact us</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--  -->
    <section class="h-[300px] md:h-[500px] about-us-hero">
      <div
        class="w-full h-full bg-black absolute top-0 left-0 opacity-[.7]"
      ></div>
      <div class="absolute w-full h-full top-0 left-0">
        <div
          class="w-[85%] xl:w-[1200px] h-full flex flex-col justify-center mx-auto gap-[10px] md:gap-[40px]"
        >
          <div class="mb-[10px]">
            <p
              class="text-[14px] md:text-[18px] leading-[1] font-[300] mb-[20px] md:mb-[40px] uppercase text-white text__underline"
            >
              Contact us
            </p>
            <h1
              class="text-white font-[700] uppercase text-[24px] md:text-[40px] lg:text-[80px] leading-[1]"
            >
              How can we help?
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="py-[50px] md:py-[100px] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="w-full lg:w-[800px]">
          <h3
            class="font-[600] text-[20px] md:text-[30px] leading-[1.2] mb-[10px]"
          >
            Have you tried our
            <router-link to="/" class="underline"
              >Frequently Asked Questions?</router-link
            >
            <br />
          </h3>
          <p class="text-[16px] md:text-[20px] font-[300]">
            If you still can't find the answer you're looking for, you can
            contact us using the form below.
          </p>
        </div>
      </div>
    </section>

    <section class="py-[50px] md:py-[100px] bg-[#f5f5f5]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="w-full">
          <form
            action=""
            class="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[30px] w-full md:w-[750px] content-end"
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
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none"
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
                class="text-[14px] p-[10px] border border-black w-full shadow-lg bg-transparent placeholder:text-black outline-none"
              />
            </div>

            <div class="w-full">
              <label
                for=""
                class="font-[600] text-[14px] text-black mb-[5px] block"
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
              <label
                for=""
                class="font-[600] text-[14px] text-black mb-[5px] block"
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
              <label
                for=""
                class="font-[600] text-[14px] text-black mb-[5px] block"
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
              <label
                for=""
                class="font-[600] text-[14px] text-black mb-[5px] block"
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
              <label
                for=""
                class="font-[600] text-[14px] text-black mb-[5px] block"
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
              <label
                for=""
                class="font-[600] text-[14px] text-black mb-[5px] block"
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

            <button class="bg-black text-white p-[10px] self-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>

    <!--  -->
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>
.about-us-hero {
  background-image: url(../../assets/images/bg3.jpg);
  object-fit: cover;
  background-position: center;
  background-size: cover;
  position: relative;
}

.text__underline {
  position: relative;
  font-weight: 500;
}

.text__underline:after {
  position: absolute;
  left: 0;
  top: 110%;
  content: "";
  height: 4px;
  width: 40px;
  background: #6cc06d;
}
</style>
