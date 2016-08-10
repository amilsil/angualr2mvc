"use strict";
var router_1 = require('@angular/router');
var documentation_component_1 = require('./components/documentation.component');
var about_component_1 = require('./components/about.component');
var expenses_component_1 = require('./components/expenses.component');
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
        path: 'home',
        component: expenses_component_1.ExpensesComponent
    },
    { path: '**', component: expenses_component_1.ExpensesComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map