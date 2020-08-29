import Vue from 'vue'
import Router from 'vue-router'

import Architecture from '../components/architecture'
import Landscaping from '../components/landscaping'
import Safety from '../components/safety'
import Engineering from '../components/engineering'
import Infrastructure from '../components/infrastructure'
import TransportAccessibility from '../components/transportAccessibility'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/architecture',
            name: 'Architecture',
            component: Architecture
        },
        {
            path: '/landscaping',
            name: 'Landscaping',
            component: Landscaping
        },
        {
            path: '/safety',
            name: 'Safety',
            component: Safety
        },
        {
            path: '/engineering',
            name: 'Engineering',
            component: Engineering
        },
        {
            path: '/infrastructure',
            name: 'Infrastructure',
            component: Infrastructure
        },
        {
            path: '/transportAccessibility',
            name: 'TransportAccessibility',
            component: TransportAccessibility
        }
    ]
})

export default router;