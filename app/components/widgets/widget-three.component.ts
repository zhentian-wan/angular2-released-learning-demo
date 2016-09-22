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
        console.log(this.input.nativeElement);
        console.log(this.div.nativeElement);
    }

    do(){
        alert("hjelow")
    }

}