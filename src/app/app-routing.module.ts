import {NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from './shared/auth/auth.guard';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: 'home',
                loadChildren: './modules/dashbroad/dashbroad.module#DashbroadModule'
            },
            {
                path: 'tryout',
                loadChildren: './modules/tryout/tryout.module#TryoutModule'
            },
            {
                path: 'demo',
                loadChildren: './modules/demo/demo.module#DemoModule'
            },
        ]
    },
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
        // CommonModule
    ],
    exports: [RouterModule]
    // declarations: []
})
export class AppRoutingModule {
}
