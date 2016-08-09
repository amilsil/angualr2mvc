"use strict";
var router_1 = require('@angular/router');
var documentation_component_1 = require('./components/documentation.component');
var about_component_1 = require('./components/about.component');
var routes = [
    {
        path: 'documentation',
        component: documentation_component_1.DocumentationComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: '',
        component: about_component_1.AboutComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map