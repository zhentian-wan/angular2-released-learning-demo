import { Component, OnInit, ViewChild, Renderer } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'widget-three',
    templateUrl: 'widget-three.component.html'
})
export class WidgetThree implements OnInit {

    @ViewChild('inputRef') input;
    @ViewChild('divRef') div;

    constructor(private renderer: Renderer) { }

    ngOnInit() { }

    ngAfterViewInit(){
        this.renderer.invokeElementMethod(
            this.input.nativeElement,
            'focus',
            []
        );
    }
}