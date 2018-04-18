import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'User'
        },
        children: [
            {path: 'login', component: LoginComponent, data: {title: 'Login'}},
            {path: 'signup', component: SignupComponent, data: {title: 'SignUp'}},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
