<template>
  <swiper
    :slides-per-view="1"
    :space-between="10"
    @swiper="onSwiper"
    :breakpoints="{
      370: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4
      }
    }"
    :autoplay="true"
  >
    <swiper-slide>
      <div class="w-[108px] h-[108px]">
        <img
          src="../assets/images/mtn.png"
          alt="afl partners"
          class="rounded-full"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-[108px] h-[108px]">
        <img
          src="../assets/images/airtel-logo.png"
          alt="afl partners"
          class="rounded-full"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-[108px] h-[108px]">
        <img
          src="../assets/images/glo-logo.png"
          alt="afl partners"
          class="rounded-full"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-[108px] h-[108px]">
        <img
          src="../assets/images/9mobile.png"
          alt="afl partners"
          class="rounded-full"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style>
.swiper {
  width: 500px;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  width: 108px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 500px) {
  .swiper {
    width: 100%;
  }
}
</style>
