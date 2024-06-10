import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home", //Nome da rota
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "Home" }, // Define o título da aba para esta rota
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
    meta: { title: "About" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Vue"; // Define o título da aba com base na meta.title
  next();
});

export default router;
