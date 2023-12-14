<template>
  <div class="py-[20px] min-h-[700px]">
    <div class="flex flex-col gap-[30px]">
      <!-- Hero One -->
      <div class="flex flex-col gap-[10px]">
        <p class="text-[20px] font-[600]">Hero One Image</p>
        <span class="text-[14px]"
          >Accepted file format <b class="text-red-500">jpg, png</b>*</span
        >
        <input type="file" @change="handleChangeHeroOneImg" />
        <div class="flex gap-[10px]">
          <textarea
            placeholder="slider text..."
            v-model="heroOneText"
            class="border border-gray-400 p-[10px] w-full md:w-[500px] resize-none"
          ></textarea>
          <button class="bg-green-500 px-[20px] text-white" @click="updateHeroOneText">
            Submit
          </button>
        </div>
        <div>
          <img :src="heroOneImg" alt="" />
        </div>
      </div>

      <!-- Hero Two -->
      <div class="flex flex-col gap-[10px]">
        <p class="text-[20px] font-[600]">Hero Two Image</p>
        <span class="text-[14px]"
          >Accepted file format <b class="text-red-500">jpg, png</b>*</span
        >
        <input type="file" @change="handleChangeHeroTwoImg" />
        <div class="flex gap-[10px]">
          <textarea
            placeholder="slider text..."
            v-model="heroTwoText"
            class="border border-gray-400 p-[10px] w-full md:w-[500px] resize-none"
          ></textarea>
          <button class="bg-green-500 px-[20px] text-white" @click="updateHeroTwoText">
            Submit
          </button>
        </div>
        <div>
          <img :src="heroTwoImg" alt="afl" />
        </div>
      </div>

      <!-- Hero Three -->
      <div class="flex flex-col gap-[10px]">
        <p class="text-[20px] font-[600]">Hero Three Image</p>
        <span class="text-[14px]"
          >Accepted file format <b class="text-red-500">jpg, png</b>*</span
        >
        <input type="file" @change="handleChangeHeroThreeImg" />
        <div class="flex gap-[10px]">
          <textarea
            placeholder="slider text..."
            v-model="heroThreeText"
            class="border border-gray-400 p-[10px] w-full md:w-[500px] resize-none"
          ></textarea>
          <button class="bg-green-500 px-[20px] text-white" @click="updateHeroThreeText">
            Submit
          </button>
        </div>
        <div>
          <img :src="heroThreeImg" alt="afl" />
        </div>
      </div>

      <!-- Hero Four -->
      <div class="flex flex-col gap-[10px]">
        <p class="text-[20px] font-[600]">Hero Four Image</p>
        <span class="text-[14px]"
          >Accepted file format <b class="text-red-500">jpg, png</b>*</span
        >
        <input type="file" @change="handleChangeHeroFourImg" />
        <div class="flex gap-[10px]">
          <textarea
            placeholder="slider text..."
            v-model="heroFourText"
            class="border border-gray-400 p-[10px] w-full md:w-[500px] resize-none"
          ></textarea>
          <button class="bg-green-500 px-[20px] text-white" @click="updateHeroFourText">
            Submit
          </button>
        </div>
        <div>
          <img :src="heroFourImg" alt="afl" />
        </div>
      </div>

      <!-- Hero Four -->
      <div class="flex flex-col gap-[10px]">
        <p class="text-[20px] font-[600]">Hero Five Image</p>
        <span class="text-[14px]"
          >Accepted file format <b class="text-red-500">jpg, png</b>*</span
        >
        <input type="file" @change="handleChangeHeroFiveImg" />
        <div class="flex gap-[10px]">
          <textarea
            placeholder="slider text..."
            v-model="heroFiveText"
            class="border border-gray-400 p-[10px] w-full md:w-[500px] resize-none"
          ></textarea>
          <button class="bg-green-500 px-[20px] text-white" @click="updateHeroFiveText">
            Submit
          </button>
        </div>
        <div>
          <img :src="heroFiveImg" alt="afl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // Hero One
      heroOneImg: null,
      heroOneText: "",
      // Hero Two
      heroTwoImg: null,
      heroTwoText: "",
      // Hero Three
      heroThreeImg: null,
      heroThreeText: "",
      // Hero Four
      heroFourImg: null,
      heroFourText: "",
      // Hero Five
      heroFiveImg: null,
      heroFiveText: "",
    };
  },
  methods: {
    // hero one image
    async getHeroOneImg() {
      const heroOneImg = await axios.get(
        "http://localhost:5000/api/v1/home/one/hero/img/657acafdf7f243ffafcfb10b"
      );
      this.heroOneImg = heroOneImg.data.heroOneImg.heroOneImgUrl;
    },

    async handleChangeHeroOneImg(event) {
      try {
        this.heroOneImg = event.target.files[0];
        const fd = new FormData();
        fd.append("heroOneImg", this.heroOneImg);

        await axios.patch(
          "http://localhost:5000/api/v1/home/one/hero/img/657acafdf7f243ffafcfb10b",
          fd
        );

        await this.getHeroOneImg();
      } catch (e) {
        console.error(e);
      }
    },

    // hero one text
    async getHeroOneText() {
      const heroOneText = await axios.get(
        "http://localhost:5000/api/v1/home/one/hero/text/65786f14d1a49775094e58e7"
      );
      this.heroOneText = heroOneText.data.heroOneText.heroOneText;
    },

    async updateHeroOneText() {
      try {
        await axios.patch(
          "http://localhost:5000/api/v1/home/one/hero/text/65786f14d1a49775094e58e7",
          { heroOneText: this.heroOneText }
        );
        this.getHeroOneText();
      } catch (error) {
        console.log(error);
      }
    },

    // hero two img
    async getHeroTwoImg() {
      const heroTwoImg = await axios.get(
        "http://localhost:5000/api/v1/home/two/hero/img/657acb20f7f243ffafcfb10d"
      );
      this.heroTwoImg = heroTwoImg.data.heroTwoImg.heroTwoImgUrl;
    },

    async handleChangeHeroTwoImg(event) {
      try {
        this.heroTwoImg = event.target.files[0];
        const fd = new FormData();
        fd.append("heroTwoImg", this.heroTwoImg);

        await axios.patch(
          "http://localhost:5000/api/v1/home/two/hero/img/657acb20f7f243ffafcfb10d",
          fd
        );

        await this.getHeroTwoImg();
      } catch (e) {
        console.error(e);
      }
    },

    // hero two text
    async getHeroTwoText() {
      const heroTwoText = await axios.get(
        "http://localhost:5000/api/v1/home/two/hero/text/657ad5163238d050730d18c4"
      );
      this.heroTwoText = heroTwoText.data.heroTwoText.heroTwoText;
    },

    async updateHeroTwoText() {
      try {
        await axios.patch(
          "http://localhost:5000/api/v1/home/two/hero/text/657ad5163238d050730d18c4",
          { heroTwoText: this.heroTwoText }
        );
        this.getHeroTwoText();
      } catch (error) {
        console.log(error);
      }
    },

    // Hero three
    async getHeroThreeImg() {
      const heroThreeImg = await axios.get(
        "http://localhost:5000/api/v1/home/three/hero/img/657add894cf58a0e3d827a75"
      );
      this.heroThreeImg = heroThreeImg.data.heroThreeImg.heroThreeImgUrl;
    },

    async handleChangeHeroThreeImg(event) {
      try {
        this.heroThreeImg = event.target.files[0];
        const fd = new FormData();
        fd.append("heroThreeImg", this.heroThreeImg);

        await axios.patch(
          "http://localhost:5000/api/v1/home/three/hero/img/657add894cf58a0e3d827a75",
          fd
        );

        await this.getHeroThreeImg();
      } catch (e) {
        console.error(e);
      }
    },

    // hero three text
    async getHeroThreeText() {
      const heroThreeText = await axios.get(
        "http://localhost:5000/api/v1/home/three/hero/text/657ae59e9bca7b8749ac9bf8"
      );
      this.heroThreeText = heroThreeText.data.heroThreeText.heroThreeText;
    },

    async updateHeroThreeText() {
      try {
        await axios.patch(
          "http://localhost:5000/api/v1/home/three/hero/text/657ae59e9bca7b8749ac9bf8",
          { heroThreeText: this.heroThreeText }
        );
        this.getHeroThreeText();
      } catch (error) {
        console.log(error);
      }
    },

    // Hero Four
    async getHeroFourImg() {
      const heroFourImg = await axios.get(
        "http://localhost:5000/api/v1/home/four/hero/img/657ae1663419d56a789c015f"
      );
      this.heroFourImg = heroFourImg.data.heroFourImg.heroFourImgUrl;
    },

    async handleChangeHeroFourImg(event) {
      try {
        this.heroFourImg = event.target.files[0];
        const fd = new FormData();
        fd.append("heroFourImg", this.heroFourImg);

        await axios.patch(
          "http://localhost:5000/api/v1/home/four/hero/img/657ae1663419d56a789c015f",
          fd
        );

        await this.getHeroFourImg();
      } catch (e) {
        console.error(e);
      }
    },

    // hero four text
    async getHeroFourText() {
      const heroFourText = await axios.get(
        "http://localhost:5000/api/v1/home/four/hero/text/657ae56f9bca7b8749ac9bf6"
      );
      this.heroFourText = heroFourText.data.heroFourText.heroFourText;
    },

    async updateHeroFourText() {
      try {
        await axios.patch(
          "http://localhost:5000/api/v1/home/four/hero/text/657ae56f9bca7b8749ac9bf6",
          { heroFourText: this.heroFourText }
        );
        this.getHeroFourText();
      } catch (error) {
        console.log(error);
      }
    },

    // Hero Five
    async getHeroFiveImg() {
      const heroFiveImg = await axios.get(
        "http://localhost:5000/api/v1/home/five/hero/img/657ae4ac9bca7b8749ac9bf1"
      );
      this.heroFiveImg = heroFiveImg.data.heroFiveImg.heroFiveImgUrl;
    },

    async handleChangeHeroFiveImg(event) {
      try {
        this.heroFiveImg = event.target.files[0];
        const fd = new FormData();
        fd.append("heroFiveImg", this.heroFiveImg);

        await axios.patch(
          "http://localhost:5000/api/v1/home/five/hero/img/657ae4ac9bca7b8749ac9bf1",
          fd
        );

        await this.getHeroFiveImg();
      } catch (e) {
        console.error(e);
      }
    },

    // hero five text
    async getHeroFiveText() {
      const heroFiveText = await axios.get(
        "http://localhost:5000/api/v1/home/five/hero/text/657ae5c99bca7b8749ac9bfa"
      );
      this.heroFiveText = heroFiveText.data.heroFiveText.heroFiveText;
    },

    async updateHeroFiveText() {
      try {
        await axios.patch(
          "http://localhost:5000/api/v1/home/five/hero/text/657ae5c99bca7b8749ac9bfa",
          { heroFiveText: this.heroFiveText }
        );
        this.getHeroFiveText();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getHeroOneImg();
    this.getHeroOneText();
    this.getHeroTwoImg();
    this.getHeroTwoText();
    this.getHeroThreeImg();
    this.getHeroThreeText();
    this.getHeroFourImg();
    this.getHeroFourText();
    this.getHeroFiveImg();
    this.getHeroFiveText();
  },
};
</script>
