import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashbroadRoutingModule} from './dashbroad-routing.module';
import {ListComponent} from './components/list.component';
import {DashbroadComponent} from './dashbroad.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {BsDatepickerModule, BsDropdownModule, CollapseModule, ModalModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DashbroadRoutingModule,
        SlideshowModule,
        ModalModule.forRoot(),
        CollapseModule.forRoot(),
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
    ],
    declarations: [ListComponent, DashbroadComponent]
})
export class DashbroadModule {
}
