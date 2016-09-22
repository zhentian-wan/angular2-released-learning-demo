import {Component, OnInit, ViewChild, Renderer, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'widget-three',
    template: `<input type="text" #inputRef/>`
})
export class WidgetThree {

    @ViewChild('inputRef') input;

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