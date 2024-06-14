import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () => import("@/views/InicioView.vue"),
    meta: { title: "Início" },
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: () => import("@/views/SobreView.vue"),
    meta: { title: "Sobre" },
  },
  {
    path: "/genero-acao",
    name: "GeneroAcao",
    component: () => import("@/views/AcaoView.vue"),
    meta: { title: "Gênero Ação" },
  },
  {
    path: "/genero-aventura",
    name: "GeneroAventura",
    component: () => import("@/views/AventuraView.vue"),
    meta: { title: "Gênero Aventura" },
  },
  {
    path: "/genero-comedia",
    name: "GeneroComedia",
    component: () => import("@/views/ComediaView.vue"),
    meta: { title: "Gênero Comédia" },
  },
  {
    path: "/genero-fantasia",
    name: "GeneroFantasia",
    component: () => import("@/views/FantasiaView.vue"),
    meta: { title: "Gênero Fantasia" },
  },
  {
    path: "/genero-ficcao",
    name: "GeneroFiccao",
    component: () => import("@/views/FiccaoView.vue"),
    meta: { title: "Gênero Ficção" },
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    component: () => import("@/views/FavoritosView.vue"),
    meta: { title: "Favoritos" },
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
