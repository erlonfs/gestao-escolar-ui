import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/views/page-not-found';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/pessoas-fisicas',
        },
        {
            path: '/pessoas-fisicas',
            name: 'pessoas-fisicas',
            component: () =>
                import('./views/pessoas-fisicas.vue'),
        },
        {
            path: '/pessoas-fisicas/cadastro',
            name: 'pessoas-fisicas-cadastro',
            component: () =>
                import('./views/pessoas-fisicas-cadastro.vue'),
        },

        {
            path: '*',
            component: PageNotFound,
        },
    ],
});
