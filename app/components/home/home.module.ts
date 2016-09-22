import { NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {WidgetsModule} from '../widgets/widgets.module';
import {AlertMe} from "../../directives/directives.module";

@NgModule({
    imports: [WidgetsModule],
    declarations: [HomeComponent, AlertMe],
    exports: [HomeComponent]
})
export class HomeModule {

}