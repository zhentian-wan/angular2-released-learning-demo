import {
    Component, ViewChild, ViewContainerRef, ComponentFactoryResolver
} from '@angular/core';
import {SimpleService} from "../../serivces/simple.service";
import {WidgetThree} from "../widgets/widget-three.component";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {

    last;
    @ViewChild('container', {
        read: ViewContainerRef
    }) container;

    constructor(private resolver: ComponentFactoryResolver, private simpleService: SimpleService) {
    }

    ngAfterContentInit(){
        const WidgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
        this.container.createComponent(WidgetFactory);
        this.container.createComponent(WidgetFactory);
        this.container.createComponent(WidgetFactory);
        this.container.createComponent(WidgetFactory);
        this.last = this.container.createComponent(WidgetFactory); // return a componentRef
        this.last.instance.message = "I am last"; // using componentRef's instance prop to access the component prop
        this.last.instance.renderer.setElementStyle(
            this.last.instance.input.nativeElement,
            'color',
            'red'
        );
    }

    onClick(){
        const WidgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
        const comRef = this.container.createComponent(WidgetFactory, 2);
        comRef.instance.message = "I am third";
    }

    moveup(){
        const randomInx = Math.floor(Math.random() * this.container.length);
        this.container.move(this.last.hostView, randomInx);
    }

}