import {Directive, HostListener, HostBinding} from "@angular/core";
@Directive({
    selector: ['alert-me']
})
export class AlertMe{
    @HostListener('click')
    alert(){
        alert("Alert");
    }
}