import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
    selector: 'my-app',
    template: `
        <mainNav></mainNav>
        <h1>{{ title }}</h1>
        `,
    directives: [NavComponent]
})

export class AppComponent {
    title = 'App expenses'
 }
