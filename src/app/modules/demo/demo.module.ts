import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoRoutingModule} from './demo-routing.module';
import {FormComponent} from './form/form.component';
import {DemoComponent} from './demo.component';
import {FormsModule} from '@angular/forms';
import {ForbiddenNameDirective} from './form/forbidden-name.directive';
import {AppGridsterComponent} from './app-gridster/app-gridster.component';
import {GridsterModule} from 'angular2gridster';

@NgModule({
    imports: [
        CommonModule,
        DemoRoutingModule,
        FormsModule,
        GridsterModule
    ],
    declarations: [FormComponent, DemoComponent, ForbiddenNameDirective, AppGridsterComponent]
})
export class DemoModule {
}
