import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'widget-one',
    templateUrl: 'widget-one.component.html'
})
export class WidgetOneComponent implements OnInit {
    selected = false;
    constructor() { }

    ngOnInit() { }
    
}