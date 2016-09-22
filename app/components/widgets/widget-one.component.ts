import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'widget-one',
    styles: [
        `
            :host{
               display: block;
               border: 3px dashed black;
            }
        `
    ],
    templateUrl: 'widget-one.component.html'
})
export class WidgetOneComponent implements OnInit {
    @Input('message') message;
    constructor() { }

    ngOnInit() { }
    
}