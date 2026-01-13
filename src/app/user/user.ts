import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // received value in string if not then undefined or we can pass default values
  //  -> so we can make type as string <string>

  // with required we can't pass initial values
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);

  // get imagePath() {
  //   return `assets/users/${this.avatar}`;
  // }
  onSelectUser() {}
}
