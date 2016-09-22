import {Directive, HostListener, HostBinding, ElementRef, Renderer} from "@angular/core";

@Directive({
    selector: '[alert-me]'
})
export class AlertMe{

    constructor(private elm: ElementRef, private renderer: Renderer){

    }

    @HostListener('click')
    clog(){
        this.highlight(this.elm.nativeElement);
        console.log(this.elm.nativeElement.innerHTML);
    }

    highlight(elm){
        this.renderer.setElementStyle(
            elm,
            'backgroundColor',
            'yellow'
        );
        setTimeout(() => {
            this.renderer.setElementStyle(
                elm,
                'backgroundColor',
                'white'
            );
        }, 350)
    }
}
