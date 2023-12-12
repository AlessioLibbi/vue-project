import { createRouter, createWebHistory } from "vue-router";



//COACH PAGES IMPORT
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';

//REQUEST PAGE IMPORT 
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
// NOTFOUND PAGE IMPORT
import NotFound from './pages/NotFound.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        { path : '/coaches', component: CoachList},
        { path : '/coaches/:id', component: CoachDetail, props:true, children: [
            {path: 'contact', component:ContactCoach}, //  /coaches/c1/contact nested route foe contact a coach
        ]},
        { path : '/register', component: CoachRegistration},
        { path : '/request', component: RequestReceived},
        { path : '/:notFound(.*)', component: NotFound},
    ],
})
export default router