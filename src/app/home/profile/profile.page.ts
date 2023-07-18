import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  firstName!: string;
  middleName!: string;
  lastName!: string;
  age!: number;
  address!: string;
  gender!: string;
  phoneNumber!: string;
  email!: string;

  constructor() { }

  ngOnInit() {
  }

}
