<template>
  <div
    class="absolute w-full h-[calc(100%_-_48.906px)] md:h-[calc(100%_-_92.031px)] top-[48.906px] md:top-[92.031px] left-0"
  >
    <div class="h-full relative slide" v-if="count === 1">
      <img
        src="https://res.cloudinary.com/dsnzvj1ot/image/upload/v1686248104/afl/slider-1_c00b0f.webp"
        alt="afl networks"
        class="w-full h-full object-cover absolute"
      />
      <div class="z-[11] w-full h-full relative">
        <div class="w-[85%] xl:w-[1200px] h-full mx-auto flex flex-col justify-center">
          <div class="h-full flex items-center hero__text">
            <h1
              class="text-white uppercase font-[700] lg:font-[700] leading-[1.2] md:leading-[1] text-left md:text-left"
              :class="{ show: isTextVisible }"
            >
              DEEPENING BROADBAND <br class="hidden lg:block" />
              PENETRATION THROUGH <br class="hide_br" />
              OPEN ACCESS FIBRE OPTIC <br class="hide__br" />
              NETWORK INFRASTRUCTURE
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="h-full relative slide" v-if="count === 2">
      <img
        src="https://res.cloudinary.com/dsnzvj1ot/image/upload/v1686248084/afl/slider-2_nl6eri.webp"
        alt="afl networks"
        class="w-full h-full object-cover absolute"
      />
      <div class="z-[11] w-full h-full relative">
        <div class="w-[85%] xl:w-[1200px] h-full mx-auto flex flex-col justify-center">
          <div class="h-full flex items-center hero__text">
            <h1
              class="text-white uppercase font-[700] lg:font-[700] leading-[1.2] md:leading-[1] text-left md:text-left"
              :class="{ show: isTextVisible }"
            >
              DEEPENING BROADBAND <br class="hidden lg:block" />
              PENETRATION THROUGH <br class="hide_br" />
              OPEN ACCESS FIBRE OPTIC <br class="hide__br" />
              NETWORK INFRASTRUCTURE
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="h-full relative slide" v-if="count === 3">
      <img
        src="https://res.cloudinary.com/dsnzvj1ot/image/upload/v1686248059/afl/slider-3_zvm7rm.webp"
        alt="afl networks"
        class="w-full h-full object-cover absolute"
      />
      <div class="z-[11] w-full h-full relative">
        <div class="w-[85%] xl:w-[1200px] h-full mx-auto flex flex-col justify-center">
          <div class="h-full flex items-center hero__text">
            <h1
              class="text-white uppercase font-[700] lg:font-[700] leading-[1.2] md:leading-[1] text-left md:text-left"
              :class="{ show: isTextVisible }"
            >
              DEEPENING BROADBAND <br class="hidden lg:block" />
              PENETRATION THROUGH <br class="hide_br" />
              OPEN ACCESS FIBRE OPTIC <br class="hide__br" />
              NETWORK INFRASTRUCTURE
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="h-full relative slide" v-if="count === 4">
      <img
        src="https://res.cloudinary.com/dsnzvj1ot/image/upload/v1686248042/afl/slider-4_kriaqb.webp"
        alt="afl networks"
        class="w-full h-full object-cover absolute"
      />
      <div class="z-[11] w-full h-full relative">
        <div class="w-[85%] xl:w-[1200px] h-full mx-auto flex flex-col justify-center">
          <div class="h-full flex items-center hero__text">
            <h1
              class="text-white uppercase font-[700] lg:font-[700] leading-[1.2] md:leading-[1] text-left md:text-left"
              :class="{ show: isTextVisible }"
            >
              DEEPENING BROADBAND <br class="hidden lg:block" />
              PENETRATION THROUGH <br class="hide_br" />
              OPEN ACCESS FIBRE OPTIC <br class="hide__br" />
              NETWORK INFRASTRUCTURE
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="h-full relative slide" v-if="count === 5">
      <img
        src="https://res.cloudinary.com/dsnzvj1ot/image/upload/v1686247979/afl/slider-5_inweiy.webp"
        alt="afl networks"
        class="w-full h-full object-cover absolute"
      />
      <div class="z-[11] w-full h-full relative">
        <div class="w-[85%] xl:w-[1200px] h-full mx-auto flex flex-col justify-center">
          <div class="h-full flex items-center hero__text">
            <h1
              class="text-white uppercase font-[700] lg:font-[700] leading-[1.2] md:leading-[1] text-left md:text-left"
              :class="{ show: isTextVisible }"
            >
              DEEPENING BROADBAND <br class="hidden lg:block" />
              PENETRATION THROUGH <br class="hide_br" />
              OPEN ACCESS FIBRE OPTIC <br class="hide__br" />
              NETWORK INFRASTRUCTURE
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Img1 from "../assets/images/slider-1.webp";
// import Img2 from "../assets/images/slider-2.webp";
// import Img3 from "../assets/images/slider-3.webp";
// import Img4 from "../assets/images/slider-4.webp";
// import Img5 from "../assets/images/slider-5.webp";

export default {
  data() {
    return {
      count: 1,
      isTextVisible: false,
    };
  },
  methods: {
    incrementCount() {
      if (this.count >= 5) {
        this.count = 1;
      } else {
        this.count += 1;
      }
    },
    showText() {
      this.isTextVisible = true;
    },
  },
  mounted() {
    setInterval(() => {
      this.incrementCount();
      this.isTextVisible = false;
      setTimeout(() => {
        this.isTextVisible = true;
      }, 500);
    }, 10000);
    this.isTextVisible = true;
  },
};
</script>

<style>
.hero__text h1 {
  font-size: 80px;
}

.hero__text h1 {
  opacity: 0;
  transition: opacity 3s ease-in;
}

.hero__text h1.show {
  opacity: 1;
}

@media screen and (max-width: 1280px) {
  .hero__text h1 {
    font-size: 70px;
  }
}

@media screen and (max-width: 1144px) {
  .hero__text h1 {
    font-size: 60px;
  }
}

@media screen and (max-width: 981px) {
  .hero__text h1 {
    font-size: 50px;
  }
}

@media screen and (max-width: 817px) {
  .hero__text h1 {
    font-size: 40px;
  }
}

@media screen and (max-width: 654px) {
  .hero__text h1 {
    font-size: 30px;
  }
}

@media screen and (max-width: 490px) {
  .hero__text h1 {
    font-size: 24px;
  }
}

@media screen and (max-width: 392px) {
  .hero__text h1 {
    font-size: 18px;
  }
}
</style>
