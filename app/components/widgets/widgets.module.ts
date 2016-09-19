import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WidgetOneComponent} from './widget-one.component';
import {WidgetTwoComponent} from './widget-two.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WidgetOneComponent, WidgetTwoComponent],
    exports: [WidgetOneComponent, WidgetTwoComponent, CommonModule]
})
export class WidgetsModule {

}