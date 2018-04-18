import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  user: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }
}
