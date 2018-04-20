import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FormComponent } from './form/form.component';
import { DemoComponent } from './demo.component';
import {FormsModule} from '@angular/forms';
import { ForbiddenNameDirective } from './form/forbidden-name.directive';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ],
  declarations: [FormComponent, DemoComponent, ForbiddenNameDirective]
})
export class DemoModule { }
