import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') form: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
      if (this.authService.isLoggedIn()) {
          this.router.navigateByUrl('/');
      }
  }

  signup() {
    if (this.form.valid) {
      let val = this.form.value;
      this.authService.signup(val);
    }
  }
}
