import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashbroadComponent} from './dashbroad.component';

const routes: Routes = [
    {
        path: '',
        data: {title: 'Home'},
        component: DashbroadComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashbroadRoutingModule {
}
