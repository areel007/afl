<template>
  <div class="center">
    <div class="circle"><div></div></div>
    <div class="circle"><div></div></div>
    <div class="circle"><div></div></div>
    <div class="circle"><div></div></div>
    <div class="circle"><div></div></div>
    <div class="circle"><div></div></div>
    <div class="circle"><div></div></div>
  </div>
</template>

<style scoped lang="scss">
.center {
  position: relative;
  /*   background-color: white; */
  animation: spin 7s infinite linear;
}

.circle > div {
  --size: 8px;
  --radius: 40px;
  position: absolute;
  top: calc(var(--size) / 2);
  left: calc(var(--size) / 2);
  width: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #000;
  transform: translate(0px, var(--radius));
}

.circle {
  opacity: 0;
  animation: fade-spin 2.6s ease-in-out infinite;
  animation-delay: 0.5s;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes fade-spin {
  0% {
  }
  25% {
    opacity: 0;
    transform: rotate(0deg);
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
    // transform: rotate(180deg);
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: rotate(360deg);
  }
}

@for $i from 1 through 7 {
  .circle:nth-child(#{$i}) {
    animation-delay: calc(0.12 * #{$i}s);
  }
}
</style>
