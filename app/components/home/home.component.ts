import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {SimpleService} from "../../serivces/simple.service";
import {WidgetThree} from "../widgets/widget-three.component";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {

    @ViewChild('container', {
        read: ViewContainerRef
    }) container;
    @ViewChild('template') template;

    constructor(private resolver: ComponentFactoryResolver, private simpleService: SimpleService) {
    }

    ngAfterContentInit(){
        const WidgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
        this.container.createComponent(WidgetFactory);
        this.container.createComponent(WidgetFactory);
        this.container.createComponent(WidgetFactory);
        this.container.createComponent(WidgetFactory);
        this.container.createComponent(WidgetFactory);
    }

    onClick(){
        this.container.createEmbeddedView(
            this.template,
            {
                desc: 'Good'
            }
        )
    }

}