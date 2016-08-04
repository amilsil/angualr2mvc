import { Component } from '@angular/core';

export class Link {
    name: string; 
    alt: string;
    target: string;

    constructor(public n, public a, public _target){
        this.name = n;
        this.alt = a;
        this.target = _target;
    }
}

@Component ({
    selector: 'mainNav',
    template: 
    `
    <nav class="navbar navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active" *ngFor="let link of links">
                        <a href="{{link.target}}">{{link.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
})

export class NavComponent {
    links: Link[] = [
        new Link('Homess', 'Home page', '#home'),
        new Link('About', 'About page', '#about'),
        new Link('Documentation', 'Documentaiton of the API', '#documentation')
    ];
}