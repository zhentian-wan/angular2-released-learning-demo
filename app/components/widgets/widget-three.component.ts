import {Component, OnInit, ViewChild, Renderer, ElementRef, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'widget-three',
    template: `<input type="text" #inputRef [value]="message"/>`
})
export class WidgetThree {

    @ViewChild('inputRef') input;
    @Input() message = "Default Value";

    constructor(private renderer: Renderer) {
    }

    ngAfterViewInit(){
        this.renderer.invokeElementMethod(
            this.input.nativeElement,
            'focus',
            []
        );
    }
}