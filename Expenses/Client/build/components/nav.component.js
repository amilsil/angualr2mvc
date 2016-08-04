"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Link = (function () {
    function Link(name, alt, target) {
        this.name = name;
        this.alt = alt;
        this.target = target;
    }
    return Link;
}());
exports.Link = Link;
var NavComponent = (function () {
    function NavComponent() {
        this.links = [
            new Link('Homess', 'Home page', '#home'),
            new Link('About', 'About page', '#about'),
            new Link('Documentation', 'Documentaiton of the API', '#documentation')
        ];
    }
    NavComponent = __decorate([
        core_1.Component({
            selector: 'mainNav',
            template: "\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"#\">Project name</a>\n            </div>\n            <div id=\"navbar\" class=\"collapse navbar-collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"active\" *ngFor=\"let link of links\">\n                        <a href=\"{{link.target}}\">{{link.name}}</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map