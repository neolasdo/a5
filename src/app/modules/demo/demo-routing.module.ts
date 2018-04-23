import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';
import {DemoComponent} from './demo.component';
import {AppGridsterComponent} from './app-gridster/app-gridster.component';

const routes: Routes = [
    {
        path: '',
        component: DemoComponent,
        data: {
            title: 'DEMO'
        },
        children: [
            {path: 'form', component: FormComponent, data: {title: 'Form'}},
            {path: 'gridster', component: AppGridsterComponent, data: {title: 'Gridster'}},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
