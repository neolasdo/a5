import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TryoutRoutingModule } from './tryout-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    TryoutRoutingModule
  ],
  declarations: [ListComponent]
})
export class TryoutModule { }
