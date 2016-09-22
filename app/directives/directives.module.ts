import { NgModule} from '@angular/core';
import {AlertMe} from './alert.directive';

@NgModule({})
export class DirectivesModule {
    static forRoot(){
        return [
            {
                ngModule: DirectivesModule,
                declarations: [AlertMe]
            }
        ]
    }
}

export {
    AlertMe
}