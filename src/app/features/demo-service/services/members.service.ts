import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  values = [1, 2, 3, 4]

  clear() {
    this.values = [];
  }

  constructor() { }
}
