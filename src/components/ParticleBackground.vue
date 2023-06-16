<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    class="absolute top-0 h-[400px]"
    :options="{
      background: {
        color: {
          value: 'transparent',
        },
        fullScreen: {
          enable: false,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 10,
            opacity: 0.8,
            size: 10,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: true,
          value: 2,
        },
      },
      detectRetina: true,
    }"
  />
</template>

<script>
import { defineComponent } from "vue";
import { loadFull } from "tsparticles";

export default defineComponent({
  setup() {
    const particlesInit = async (engine) => {
      await loadFull(engine);
    };

    const particlesLoaded = async (container) => {
      console.log("Particles container loaded", container);
    };
    return {
      particlesInit,
      particlesLoaded,
    };
  },
});
</script>

<style scoped>
#tsparticles {
  height: 400px;
}
</style>
