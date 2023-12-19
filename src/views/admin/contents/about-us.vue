<template>
  <div>
    <div class="grid grid-cols-1 gap-[10px] mt-[20px]">
      <span class="font-[600] text-[20px]">About us page</span>
      <div>
        <input type="file" @change="updateHeroImg" />
        <div class="w-full mt-[10px] md:w-[500px]">
          <img :src="heroImg" alt="afl" />
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
      heroImg: null,
      heroText: "",
    };
  },
  methods: {
    async getHeroImg() {
      const heroImg = await axios.get(
        "http://localhost:5000/api/v1/about-us/hero/657e2d61292c038c4dd37197"
      );
      this.heroImg = heroImg.data.heroImg.aboutHeroImg;
    },

    async updateHeroImg(event) {
      try {
        this.heroImg = event.target.files[0];

        const fd = new FormData();
        fd.append("heroImg", this.heroImg);

        await axios.patch(
          "http://localhost:5000/api/v1/about-us/hero/657e2d61292c038c4dd37197",
          fd
        );

        this.getHeroImg();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getHeroImg();
  },
};
</script>
