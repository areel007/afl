import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Homes from "../views/get-connected/homes.vue";
import Businesses from "../views/get-connected/businesses.vue";
import Availability from "../views/Availability.vue";
import AboutUs from "../views/about-us/AboutUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Welcome to AFL",
    },
  },
  {
    path: "/about-us",
    name: "About us",
    component: AboutUs,
    meta: {
      title: "About Us - AFL",
    },
  },
  {
    path: "/about-us/our-rollout",
    name: "Rollout",
    component: () => import("../views/about-us/rollout.vue"),
    meta: {
      title: "About Us - AFL",
    },
  },
  {
    path: "/about-us/our-infrastructure",
    name: "Infrastructure",
    component: () => import("../views/about-us/infrastructure.vue"),
    meta: {
      title: "About Us - AFL",
    },
  },
  {
    path: "/about-us/our-platform",
    name: "Platform",
    component: () => import("../views/about-us/platform.vue"),
    meta: {
      title: "About Us - AFL",
    },
  },
  {
    path: "/about-us/our-service",
    name: "Service",
    component: () => import("../views/about-us/service.vue"),
    meta: {
      title: "About Us - AFL",
    },
  },
  {
    path: "/about-us/our-management-team",
    name: "ManagementTeam",
    component: () => import("../views/about-us/management-team.vue"),
    meta: {
      title: "About Us - AFL",
    },
  },
  {
    path: "/availability",
    name: "Availability",
    component: Availability,
  },
  {
    path: "/get-connected/homes",
    name: "Homes",
    component: Homes,
    meta: {
      title: "Get Connected - AFL",
    },
  },
  {
    path: "/get-connected/businesses",
    name: "Businesses",
    component: Businesses,
    meta: {
      title: "Get Connected - AFL",
    },
  },
  {
    path: "/get-connected/landlords",
    name: "Landlords",
    component: () => import("../views/get-connected/landlords.vue"),
    meta: {
      title: "Get Connected - AFL",
    },
  },
  {
    path: "/get-connected/developers",
    name: "Developers",
    component: () => import("../views/get-connected/developers.vue"),
    meta: {
      title: "Get Connected - AFL",
    },
  },
  {
    path: "/get-connected/public",
    name: "Public",
    component: () => import("../views/get-connected/public.vue"),
    meta: {
      title: "Get Connected - AFL",
    },
  },
  {
    path: "/partners",
    name: "Partners",
    component: () => import("../views/partners/partners.vue"),
    meta: {
      title: "Partners - AFL",
    },
  },
  {
    path: "/partners/mobile-operators",
    name: "PartnersMobileOperators",
    component: () => import("../views/partners/mobile-operators.vue"),
    meta: {
      title: "Partners - AFL",
    },
  },
  {
    path: "/partners/retail-service-providers",
    name: "PartnersRetailServiceProviders",
    component: () => import("../views/partners/retail-service-providers.vue"),
    meta: {
      title: "Partners - AFL",
    },
  },
  {
    path: "/partners/public-sector",
    name: "PartnersPublicSector",
    component: () => import("../views/partners/public-sector.vue"),
    meta: {
      title: "Partners - AFL",
    },
  },
  {
    path: "/partners/businesses",
    name: "PartnersBusinesses",
    component: () => import("../views/partners/businesses.vue"),
    meta: {
      title: "Partners - AFL",
    },
  },
  {
    path: "/communication/news",
    name: "AflNews",
    component: () => import("../views/communication/blog.vue"),
    meta: {
      title: "News - AFL",
    },
  },
  {
    path: "/communication/contact-us",
    name: "ContactUs",
    component: () => import("../views/communication/contact-us.vue"),
    meta: {
      title: "Contact us - AFL",
    },
  },
  {
    path: "/careers",
    name: "Careers",
    component: () => import("../views/careers/careers.vue"),
    meta: {
      title: "Careers - AFL",
    },
  },
  {
    path: "/careers/all-jobs",
    name: "AllJobs",
    component: () => import("../views/careers/all-jobs.vue"),
    meta: {
      title: "Careers - AFL",
    },
    children: [
      {
        path: "/careers/network-build",
        component: () => import("../views/careers/network-build.vue"),
      },
    ],
  },
  {
    path: "/careers/job-application",
    name: "JobApplication",
    component: () => import("../views/careers/job-application.vue"),
    meta: {
      title: "Careers - AFL",
    },
  },
  {
    path: "/search-result",
    name: "SearchResult",
    component: () => import("../views/search-result.vue"),
    meta: {
      title: "Search Result - AFL",
    },
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
