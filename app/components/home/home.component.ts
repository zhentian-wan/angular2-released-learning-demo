import { Component, OnInit } from '@angular/core';
import {AlertMe} from "../../directives/alert.directive";
import {SimpleService} from "../../serivces/simple.service";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(private simpleService: SimpleService) {
    }

    ngOnInit() { }

}