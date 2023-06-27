<template>
  <div class="relative top-[48px] md:top-[92px]">
    <!--  -->
    <div class="w-full bg-[#f5f5f5] py-[20px] hidden md:block">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="flex justify-between items-center">
          <ul class="flex items-center gap-[20px] text-[14px]">
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/our-solutions/capacity'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/our-solutions/capacity">Capacity Services</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/our-solutions/fibre-to-the-home'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/our-solutions/fibre-to-the-home"
                >Fibre to the home</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/our-solutions/dark-fibre'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/our-solutions/dark-fibre">Dark Fibre</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/our-solutions/co-location'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/our-solutions/co-location">Co-Location</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/our-solutions/virtual-machines'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/our-solutions/virtual-machines"
                >Virtual Machines</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--  -->
    <section class="h-[300px] md:h-[500px] our-solutions-hero">
      <div class="w-full h-full bg-black absolute top-0 left-0 opacity-[.7]"></div>
      <div class="absolute w-full h-full top-0 left-0">
        <div
          class="w-[85%] xl:w-[1200px] h-full flex flex-col justify-center mx-auto gap-[10px] md:gap-[40px]"
        >
          <div class="mb-[10px]">
            <p
              class="text-[14px] md:text-[18px] leading-[1] font-[300] mb-[20px] md:mb-[40px] uppercase text-white text__underline"
            >
              Our Solutions
            </p>
            <h1
              class="text-white font-[700] uppercase text-[24px] md:text-[40px] lg:text-[80px] leading-[1]"
            >
              FIBRE-OPTIC NETWORK DESIGNED SPECIFICALLY
              <br class="hidden md:block" />
              FOR THE DIGITAL ERA
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="">
          <div class="w-[100%] lg:w-[800px] mb-[20px] md:mb-[40px] mx-auto">
            <h1 class="font-[600] text-[20px] md:text-[28px] leading-[1] text-[#000]">
              Virtual Machines
            </h1>

            <p class="text-[14px] md:text-[16px] font-[500] mb-[20px] md:mb-[40px]">
              Introducing Virtual Machines at the Network Edge: Empowering Your Business
              with Unparalleled Efficiency.
            </p>

            <p class="text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
              At AFL Networks, we understand the evolving needs of modern businesses in an
              increasingly digital landscape. That's why we are proud to offer
              cutting-edge virtual machine (VM) solutions at the network edge, enabling
              your organisation to unlock a range of advantages and stay ahead of the
              competition.
            </p>
          </div>

          <div
            class="w-[100%] lg:w-[800px] bg-[#f5eded] p-[20px] md:p-[40px] mb-[20px] md:mb-[40px] mx-auto"
          >
            <div class="mb-[20px] md:mb-[40px]">
              <p class="font-[600] mb-[5px] md:mb-[10px] text-[14px] md:text-[16px]">
                Here's a summarised breakdown of the combined benefits of virtual machines
                at the network edge:
              </p>
              <ul class="ml-[15px] list-decimal text-[14px] md:text-[16px]">
                <li class="mb-[10px] md:mb-[20px]">
                  Enhanced Performance: By deploying virtual machines at the network edge,
                  you can significantly reduce latency and improve application
                  performance. The proximity to end-users ensures faster response times,
                  enabling seamless user experiences and higher customer satisfaction.
                </li>

                <li class="mb-[10px] md:mb-[20px]">
                  Increased Flexibility: VMs offer unparalleled flexibility, allowing you
                  to dynamically allocate computing resources per your requirements. With
                  virtual machines at the network edge, you gain the agility to scale
                  resources up or down on-demand, adapting to fluctuating workloads and
                  optimising resource utilisation.
                </li>

                <li class="mb-[10px] md:mb-[20px]">
                  Improved Security: Placing virtual machines at the network edge
                  strengthens your overall security posture. By processing data closer to
                  its source, you can minimise the exposure of sensitive information and
                  reduce the risk of unauthorised access or data breaches. VM-based
                  isolation also provides an additional layer of protection for your
                  critical applications.
                </li>

                <li class="mb-[10px] md:mb-[20px]">
                  Cost Efficiency: Virtual machines at the network edge offer cost
                  advantages through efficient resource allocation. By distributing
                  computing power geographically, you can reduce the need for expensive
                  data centre infrastructure while optimising bandwidth utilisation. This
                  can result in significant cost savings regarding hardware, maintenance,
                  and energy consumption.
                </li>

                <li class="mb-[10px] md:mb-[20px]">
                  Edge Computing Capabilities: Virtual machines at the network edge enable
                  edge computing, bringing processing power and intelligence closer to
                  where data is generated. This empowers real-time decision-making, faster
                  data analysis, and reduced reliance on centralised cloud resources. Edge
                  computing is particularly beneficial for latency-sensitive applications
                  like IoT, video streaming, and AI-driven services.
                </li>

                <li class="mb-[10px] md:mb-[20px]">
                  Simplified Management: With our VM solutions, you gain centralised
                  management and control over your distributed infrastructure. Our
                  user-friendly interfaces and robust management tools allow for easy
                  provisioning, monitoring, and maintenance of virtual machines at the
                  network edge. This streamlines operation, reduces administrative
                  overhead, and simplifies the management of your IT ecosystem.
                </li>
              </ul>
            </div>
          </div>

          <div class="w-[100%] lg:w-[800px] mb-[20px] md:mb-[40px] mx-auto">
            <p class="text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
              By harnessing the combined advantages of virtual machines at the network
              edge, you can elevate your business to new heights of efficiency,
              performance, and scalability.
              <br /><br />
              At AFL Networks, we are committed to helping you leverage this cutting-edge
              technology and stay at the forefront of your industry. Contact us today to
              explore how our VM solutions
            </p>
          </div>
        </div>

        <!-- <div class="w-full h-[600px] bg-[#f5f5f5]"></div> -->
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped>
.our-solutions-hero {
  background-image: url(../../assets/images/virtual-machine.webp);
  /* object-fit: cover; */
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

.our-services-guarantee {
  column-count: 2;
  gap: 40px;
}

@media screen and (max-width: 768px) {
  .reverse {
    grid-row: 1/2;
  }
  .our-services-guarantee {
    column-count: 1;
    gap: 40px;
  }
}
</style>
