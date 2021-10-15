import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  name: string;
  surname: string;
  gender: string;
}
@Component({
  selector: 'app-contacts2ways',
  template: `
    
    <form #f="ngForm" (submit)="save(f)">
      <input type="text" [(ngModel)]="selectedUser.name" name="name">
      <input type="text" [(ngModel)]="selectedUser.surname" name="surname">
      <select [(ngModel)]="selectedUser.gender" name="gender">
        <option value="all">....</option>
        <option value="M">male</option>
        <option value="F">female</option>    
      </select>
       <button type="submit">SAVE</button>
    </form>
    
    <li 
      *ngFor="let user of users"
      (click)="selectItem(user)"
    >
      {{user.name}}
    </li>
    
    <pre>{{selectedUser | json}}</pre>
  `,
})
export class Contacts2waysComponent {
  users: User[] = [];
  selectedUser: User;

  constructor() {
    this.selectedUser = {
      name: 'pippo',
      surname: 'biondi',
      gender: 'F'
    }
  }

  save(f: NgForm): void {
    this.users.push(f.value)
  }

  selectItem(user: User) {
    this.selectedUser = user;
  }

}
