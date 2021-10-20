import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.isLoggedIn = true;

    this.authService.user = {
      firstName: 'Nebojsa',
      lastName: 'Marinkov',
      isMember: false
    };
  }

}
