import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData: any = {
    firstName: '',
    lastName: '',
    isMember: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    
  }

}
