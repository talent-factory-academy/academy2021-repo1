import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-demo-users',
  template: `
    
    <div class="container mt-3">
      <ul class="list-group">
        <li 
          class="list-group-item d-flex align-items-center gap-2 justify-content-between"
          style="border-bottom: 1px solid black"
          *ngFor="let user of users"
        >
          <i
            class="fa fa-2x"
            [ngClass]="{
              'fa-venus':  user.gender === 'M', 
              'fa-mars':  user.gender === 'F'
            }"
            [style.color]="user.gender === 'M' ? 'blue' : 'pink'"
          ></i>

          <div>
            <div>{{user.name}} - {{user.age}}y</div>
            <div>{{user.birthday | date: 'dd MM yy @ hh:mm'}}</div>
          </div>

          <img width="150" [src]="'https://maps.googleapis.com/maps/api/staticmap?center=' + user.city +'&zoom=5&size=200x100&key=AIzaSyBzQurvW6YciltmMcXNZwKo5njyFIn_f8I'" alt="">

          <i class="fa fa-trash" (click)="deleteUser(user)"></i>
        </li>
      </ul>
    </div>
    <div *ngIf="users.length === 0">Non ci sono elementi nell'array</div>
    <div *ngIf="!users">fetching</div>
    
  `,
  styles: [`

  `]
})
export class DemoUsersComponent {
  users: User[] = [];

  constructor() {
    setTimeout(() => {
      this.users = [
        {
          id: 11,
          name: 'Fabio',
          age: 15,
          gender: 'M',
          city: 'Trieste',
          birthday: 1598910648000,
          bitcoins: 1.32093207543207523
        },
        {
          id: 22,
          name: 'Ciccio',
          age: 15,
          gender: 'M',
          city: 'Palermo',
          birthday: 1598910648000,
          bitcoins: 1.32093207543207523
        },
        {
          id: 33,
          name: 'Fabia',
          age: 15,
          gender: 'F',
          city: 'Milano',
          birthday: 1598910648000,
          bitcoins: 1.32093207543207523
        },
      ]
    }, 100)
  }

  deleteUser(user: User) {
    const index = this.users.findIndex(u => u.id === user.id)
    this.users.splice(index, 1);
    // this.users = this.users.filter(u => u.id !== user.id)
  }

}
