import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Inicio", //Nome da rota
    component: () => import("@/views/InicioView.vue"),
    meta: { title: "InicioView" }, // Define o título da aba para esta rota
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
    meta: { title: "About" },
  },
  {
    path:"/Detalhes",
    name: "Detalhes",
    component:() => import("@/views/Detalhes.vue"),
  }
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
