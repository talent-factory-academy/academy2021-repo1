import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface User {
  id: number;
  firstname: string;
  lastname: string;
  birthday: number;
  gender: string;
}

type UserForm = Omit<User, 'birthday'>;

@Component({
  selector: 'app-contacts',
  template: `
    <input type="text" [ngModel]>
    <div class="d-flex justify-content-end me-2">
      <i class="fa fa-plus-circle fa-2x" *ngIf="activeUser" (click)="resetForm()"></i>
    </div>
    
    <app-card title="FORM">
      <form 
        #f="ngForm" (submit)="submitForm()" 
        [ngFormOptions]="{updateOn: 'change'}"
        class="form"
        [ngClass]="{'form-invalid': f.invalid && f.dirty}"
      >
        <div *ngIf="f.invalid && f.dirty">ahia! ci sono errori</div>
        <input 
          class="form-control" type="text" name="firstname" 
          #inputFirstName="ngModel" 
          [ngModel]="activeUser?.firstname" 
          required minlength="3" 
          placeholder="name *"
          [ngClass]="{'is-invalid': inputFirstName.invalid && f.dirty, 'is-valid': inputFirstName.valid}"
        >
        <!--CUSTOM ERRORS-->
        <small *ngIf="inputFirstName.errors?.required">required field</small>
        <small *ngIf="inputFirstName.errors?.minlength">
          Mancano {{inputFirstName.errors?.minlength.requiredLength - inputFirstName.errors?.minlength.actualLength}} chars
        </small>
        
        <input 
          class="form-control" type="text" name="lastname" #inputLastName="ngModel"
          [ngModel]="activeUser?.lastname" 
          required
          pattern="^[a-zA-Z0-9]*$"
          placeholder="lastname *"
          [ngClass]="{'is-invalid': inputLastName.invalid && f.dirty, 'is-valid': inputLastName.valid}"
        >
        <small *ngIf="inputLastName.errors?.pattern">Last name must contain chars/number only</small>
         
        <select
          class="form-control"
          name="gender"
          [ngModel]="activeUser?.gender"
          required
          #inputGender="ngModel"
          [ngClass]="{'is-invalid': inputGender.invalid && f.dirty, 'is-valid': inputGender.valid}"
        >
          <option [ngValue]="null">Select gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>    
        </select>
        <button type="submit" [disabled]="f.invalid">
          {{activeUser ? 'EDIT' : 'ADD'}}
        </button>
      </form>
    </app-card>

    <app-card title="LIST">
      <li 
        *ngFor="let user of users" 
        (click)="selectItem(user)"
        class="list-group-item"
        [ngClass]="{'active': user.id === activeUser?.id}"
      >
        {{user.firstname}} - {{user.id}}
        <button (click)="deleteHandler(user, $event)">delete</button>
      </li>
    </app-card>
  `,
  styles: [`
    .form {
      padding: 10px;
      margin: 10px;
      border: 2px solid black;
    }
    
    .form-invalid {
      border: 4px dotted red;
    }
  `]
})
export class ContactsComponent {
  @ViewChild('f') form!: NgForm;


  users: UserForm[] = [
    { id: 1, firstname: 'AAAA', lastname: 'B', gender: 'M'},
    { id: 2, firstname: 'CCCC', lastname: 'D', gender: 'F'},
  ]
  activeUser: UserForm | null = null;

  submitForm() {
    if (this.activeUser) {
      this.edit()
    } else {
      this.add();
    }
  }

  edit() {
    const index = this.users.findIndex(u => u.id === this.activeUser?.id)
    this.users[index] = {
      ...this.activeUser,
      ...this.form.value,
    };
  }

  add() {
    const formData: UserForm = this.form.value as UserForm;
    this.users.push({ ...formData, id: Date.now() })
    this.form.reset()
  }

  deleteHandler(user: UserForm, event: MouseEvent) {
    event.stopPropagation();
    setTimeout(() => {
      const index = this.users.findIndex(u => u.id === user.id)
      this.users.splice(index, 1)
      if (user.id === this.activeUser?.id) {
        this.activeUser = null;
      }
    }, 500)
  }

  selectItem(user: UserForm) {
    this.activeUser = user;
  }

  resetForm() {
    this.activeUser = null
    this.form.reset()
  }
}
