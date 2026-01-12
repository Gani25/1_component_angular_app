import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // property of a class/field
  selectedUser = DUMMY_USERS[randomIndex];

  // syntax for getters in JS
  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectUser() {
    console.log('User Clicked');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
