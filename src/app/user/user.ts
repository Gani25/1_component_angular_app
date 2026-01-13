import { Component, computed, signal } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomIndex]); // initial value to signal

  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  onSelectUser() {
    console.log('User Clicked');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
