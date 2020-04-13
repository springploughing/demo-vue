import VueRouter from 'vue-router';
import ElementTest from '../components/ElementTest';
import Admin from '../views/admin';

const routes = [
    { path: '/test', component: ElementTest },
    { path: '/admin', component: Admin }
]

const router = new VueRouter({
    routes
});

export default router;