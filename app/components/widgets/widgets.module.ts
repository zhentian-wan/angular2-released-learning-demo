import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WidgetOneComponent} from './widget-one.component';
import {WidgetTwoComponent} from './widget-two.component';
import {WidgetThree} from './widget-three.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WidgetOneComponent, WidgetTwoComponent, WidgetThree],
    entryComponents: [WidgetThree],
    exports: [WidgetOneComponent, WidgetTwoComponent, WidgetThree, CommonModule]
})
export class WidgetsModule {

}