import { NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from './app.component';
import {HomeModule} from './components/home/home.module';
import {WidgetsModule} from './components/widgets/widgets.module';

@NgModule({
    imports:[BrowserModule, HomeModule, WidgetsModule],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}