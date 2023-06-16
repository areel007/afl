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
        slidesPerView: 4,
      },
    }"
    ref="mySwiper"
  >
    <swiper-slide v-for="(network, index) in networks" :key="index">
      <div class="w-[108px] h-[108px]">
        <img :src="network" alt="afl partners" class="rounded-full" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";

import MTN from "../assets/images/mtn.png";
import Airtel from "../assets/images/airtel-logo.png";
import Glo from "../assets/images/glo-logo.png";
import Mobile9 from "../assets/images/9mobile.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      networks: [MTN, Airtel, Glo, Mobile9],
    };
  },
  mounted() {
    this.startAutoplay();
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    startAutoplay() {
      this.stopAutoplay();
      this.autoplayInterval = setInterval(() => {
        if (this.swiper) {
          if (this.swiper.isEnd) {
            this.swiper.slideTo(0); // Go to the first slide when reaching the end
          } else {
            this.swiper.slideNext();
          }
        }
      }, 5000);
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
        this.autoplayInterval = null;
      }
    },
  },
  beforeDestroy() {
    this.stopAutoplay();
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
