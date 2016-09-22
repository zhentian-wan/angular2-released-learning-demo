import { Component, OnInit } from '@angular/core';
import {SimpleService} from '../../serivces/service.module';

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