import VueRouter from 'vue-router';
import Test from '../components/Test';
import Admin from '../views/admin';
import Login from '../views/login';

const routes = [
    { path: '/test', component: Test },
    { path: '/admin', component: Admin },
    { path: '/login', component: Login },
    { path: '/', redirect: '/login'}
]

const router = new VueRouter({
    routes
});

export default router;