import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @ViewChild('f') form: any;

    constructor(private router: Router, private authService: AuthService, private http: HttpClient) {
    }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/');
        }
    }
    onSubmit() {
        if (this.form.valid) {
            this.authService.login(this.form.value.email, this.form.value.password)
                .subscribe(
                    data => this.router.navigateByUrl('/'),
                    err => {
                        console.log(err);
                    }
                );
        }
    }
}
