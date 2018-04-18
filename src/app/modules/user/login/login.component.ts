import { Component, OnInit } from '@angular/core';
import {Users} from '../../../../models/users';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
      if (this.authService.isLoggedIn()) {
          this.router.navigateByUrl('/');
      }
  }
  login(user, pass) {
    this.authService.login(user, pass);
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/');
    }
  }

}
