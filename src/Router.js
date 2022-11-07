import { createRouter, createWebHistory } from "vue-router"
import EmpleadosDetalle from './components/EmpleadosDetalle.vue'
import EmpleadosOficio from './components/EmpleadosOficio.vue'
import HomeComponent from './components/HomeComponent.vue'
import CochesComponent from './components/CochesComponent.vue'

const routes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/coches", component: CochesComponent
    },
    {
        path: "/empleadosdetalles", component: EmpleadosDetalle
    },
    {
        path: "/empleadosoficio/:oficio", component: EmpleadosOficio
    }
]

const router = createRouter ({
    history:createWebHistory(),
    routes: routes
});

export default router;